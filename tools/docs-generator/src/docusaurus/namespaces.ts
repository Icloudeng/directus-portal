import slug from "limax";
import { forEach, map } from "modern-async";
import type { MDDCNamespace, MDDCPage } from "@apps/contracts";
import type { MDLang } from "../cms/type";
import type { ID } from "@directus/sdk";
import { constructPagesTree, pagesById } from "./pages";
import { getTranslation, transKey, Translations } from "./translations";

export type NamespaceBaseLink = {
  [id: string]: {
    to: string;
    activeBasePath: string;
    docId?: string;
  };
};

export type SidebarsConfig =
  | string
  | {
      type: "category";
      label: string;
      link: {
        type: "doc" | "generated-index";
        id?: string;
        title?: string;
        description?: string;
        keywords?: string[];
        image?: string;
      };
      items: SidebarsConfig[];
    };

type ContentTreeTrans = {
  [lang: string]: {
    name: string;
    description?: string;
    markdown?: string;
  };
};

export type NamespacesContentTree = {
  type: "parent" | "child"; // this can be tranducted as "folder" (parent) | "Child" (file)
  path: string; // parent path tree
  slug: string;
  id: ID;
  position?: number;
  show_content: boolean;
  content?: ContentTreeTrans;
  children: NamespacesContentTree[];
};

export type NamespacesContent = {
  tree: NamespacesContentTree[];
  translations: Translations;
  links: NamespaceBaseLink;
  sidebars: {
    [namespace: string]: SidebarsConfig[];
  };
};

function getFirstChildLink(
  contentTree: NamespacesContentTree
): { slug: string; pathId: string } | undefined {
  if (
    contentTree.type === "parent" &&
    contentTree.content &&
    contentTree.show_content
  ) {
    return {
      slug: contentTree.slug,
      pathId: contentTree.path + `${contentTree.id}-overview`,
    };
  }

  if (contentTree.type !== "parent" || contentTree.children.length === 0) {
    return {
      slug: contentTree.slug,
      pathId: contentTree.path.slice(0, -1),
    };
  }

  return getFirstChildLink(contentTree.children[0]);
}

/**
 * Generate namespace pages by follow design tree
 *
 * @param namespacess
 * @param pages
 * @param languages
 * @returns
 */
export async function generateNamespacesContent(
  namespaces: MDDCNamespace[],
  pages: MDDCPage[],
  languages: MDLang[]
) {
  const langs = languages.map((l) => l.code);
  const content: NamespacesContent = {
    tree: [],
    translations: {},
    links: {},
    sidebars: {},
  };

  const tree = content.tree;
  const translations = content.translations;
  const links = content.links;
  const sidebars = content.sidebars;

  langs.forEach((lang) => {
    translations[lang] = {};
  });

  /**
   * Construct namespace pages by following design tree
   */
  const constructed = await constructNamespacePagesTree(namespaces, pages);

  /**
   * THis will contract page tree recursively
   *
   * @param page
   * @param mutableParent
   */
  function constructPageContentTree(
    page: MDDCPage,
    mutableParent: NamespacesContentTree,
    position: number
  ) {
    const parent = mutableParent;
    // Put page content
    const itemTree: NamespacesContentTree = {
      type: page.pages.length > 0 ? "parent" : "child", // if page has children set it as parent
      path: `${parent.path + page.id}/`, // this should end with /
      id: page.id,
      slug: `${
        parent.slug.endsWith("/") ? parent.slug.slice(0, -1) : parent.slug
      }/${slug(page.label)}`, // slug tree
      show_content: page.show_content,
      position,
      content: langs.reduce((acc, lang) => {
        const data = getTranslation(page.translations, lang);

        // Add name to translation object
        const name_key = transKey(page.id, "name");
        translations[lang][name_key] = {
          message: data.name,
          description: `The label for category ${page.id} in sidebar docs`,
        };

        // Add description to translation object
        const dest_key = transKey(page.id, "description");
        translations[lang][dest_key] = {
          message: data.description || "",
          description: `The description for category ${page.id} in sidebar docs`,
        };

        acc[lang] = {
          name: name_key,
          description: dest_key,
          markdown: page.show_content ? data.markdown_content : "",
        };
        return acc;
      }, {} as ContentTreeTrans),
      children: [],
    };

    /**
     * Contruct page pages tree
     */
    page.pages.forEach((npage, index) => {
      constructPageContentTree(npage, itemTree, index + 1);
    });

    /**
     * Mutate parent page
     */
    parent.children.push(itemTree);
  }

  /**
   * Contruct namespace tree
   */
  constructed.forEach((nsp) => {
    const itemTree: NamespacesContentTree = {
      type: "parent",
      path: `${nsp.id}/`, // this should end with / (slash)
      slug: `${nsp.url}`,
      id: nsp.id,
      show_content: false,
      children: [],
    };

    /**
     * Contruct namespace pages tree
     */
    nsp.pages.forEach((page, index) => {
      constructPageContentTree(page, itemTree, index + 1);
    });

    // get first child link of the tree
    const firstChildLink = getFirstChildLink(itemTree);

    // Set namespace link meta
    links[nsp.id] = {
      activeBasePath: nsp.url,
      to: firstChildLink?.slug || nsp.url,
      docId: firstChildLink?.pathId,
    };

    tree.push(itemTree);
  });

  /**
   * Contruct item sidebars
   */

  const constructSidebarTree = (
    item: NamespacesContentTree
  ): SidebarsConfig => {
    const itemPath = item.path.slice(0, -1);
    /**
     * Create path ids by omitting the root id
     */
    // const pathId = itemPath
    //   .replace(new RegExp(utils.escapeRegExp(rootId + "/") + "?", "g"), "");

    if (item.type === "child") {
      return itemPath; //pathId    /**path with slash**/
    }

    /**
     * If doc has to show content, then add the overvew file path
     */
    const pathId = getFirstChildLink(item)?.pathId || "";
    const hasContent = item.content && item.show_content;

    return {
      type: "category",
      label: transKey(item.id, "name"),
      link: hasContent
        ? {
            type: "doc",
            id: pathId,
          }
        : {
            type: "generated-index",
            title: transKey(item.id, "name"),
            description: transKey(item.id, "description"),
          },
      items: item.children.map((child) => {
        return constructSidebarTree(child);
      }),
    };
  };

  tree.forEach((item) => {
    sidebars[item.id] = item.children.map((child) => {
      return constructSidebarTree(child);
    });
  });

  return content;
}

/**
 * Construct namespaces page tree
 *
 * @param namespaces
 * @param pages
 * @returns
 */
export async function constructNamespacePagesTree(
  namespaces: MDDCNamespace[],
  pages: MDDCPage[]
) {
  const new_pages = pagesById(pages);
  return await map(namespaces, async (namespace) => {
    await forEach(namespace.pages, async (page) => {
      delete new_pages[page.id];
      await constructPagesTree(page, new_pages);
    });
    return namespace;
  });
}

/**
 * THis function takes the namespace list and a new namespace list modified or arranged,
 * Note that first element in the returned array
 * @param namespaces
 * @returns
 */
export function reArrangeNamespace(namespaces: MDDCNamespace[]) {
  const newNamespaces = namespaces.slice();
  let docNsp: MDDCNamespace = namespaces[0];
  /**
   * Find the namespace with / (which is considered as documentation namspace)
   */
  const insp = namespaces.findIndex((n) => n.url === "/");
  if (insp > -1) {
    docNsp = namespaces[insp];
    newNamespaces.splice(insp, 1);
    newNamespaces.unshift(docNsp);
  }
  return [docNsp, newNamespaces] as const;
}
