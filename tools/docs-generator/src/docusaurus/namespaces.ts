import slug from "limax";
import { forEach, map } from "modern-async";
import type { MDDCNamespace, MDDCPage } from "@packages/contracts";
import type { MDLang } from "../cms/type";
import { constructPagesTree, pagesById } from "./pages";
import { getTranslation, transKey, Translations } from "./translations";
import utils from "../utils";

export type NamespaceBaseLink = {
  [id: string]: {
    type: "category" | "doc";
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
  path: `${string}/`; // parent path tree
  slug: string;
  rootSlug: string;
  root: boolean;
  label?: string;
  id: string;
  position?: number;
  show_content: boolean;
  pageEntryPoint?: boolean;
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
): { slug: string; pathId: string; type: "doc" | "category" } | undefined {
  if (
    contentTree.type === "parent" &&
    contentTree.content &&
    contentTree.show_content
  ) {
    return {
      type: "category",
      slug: contentTree.slug,
      pathId: contentTree.path + `${contentTree.id}-overview`,
    };
  }

  if (contentTree.type !== "parent" || contentTree.children.length === 0) {
    return {
      type: "doc",
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
    /**
     * If page doen't have label field
     * then consider was not constructed
     */
    if (!page.label) return;

    const parent = mutableParent;
    const itype = (page.pages || []).length > 0 ? "parent" : "child";
    const nodeId = utils.strToBase64(page.id);

    // Slugs
    const introSlug =
      itype === "child" && page.label.toLowerCase() === "intro"
        ? "/"
        : "/" + slug(page.label);

    const parentSlug = parent.slug.endsWith("/")
      ? parent.slug.slice(0, -1)
      : parent.slug;

    const rootSlug = mutableParent.rootSlug;
    const hasContent = itype === "parent" && page.show_content;

    /**
     * slug tree (if the page label is intro then consider it as root page)
     */
    const finalSlug = `${
      /**
       * if the current page has parent type and it has show to content,
       * then place the page slug at  root of the namespace url, and lead it with g
       */
      hasContent ? (rootSlug === "/" ? "" : rootSlug) + "/g" : parentSlug
    }${introSlug}`;

    // Put page content
    const itemTree: NamespacesContentTree = {
      type: itype, // if page has children set it as parent
      root: false,
      path: `${parent.path + nodeId}/`, // this should end with /
      id: nodeId,
      label: page.label,
      rootSlug,
      slug: finalSlug,
      show_content: page.show_content,
      pageEntryPoint: itype === "child" && finalSlug === "/",
      position,
      content: langs.reduce((acc, lang) => {
        const data = getTranslation(page.translations, lang);
        const rootId = parent.path.split("/")[0];

        /**
         * Translate link category label
         */
        if (itype === "parent") {
          const name_key = transKey(nodeId, "name");
          translations[lang][`sidebar.${rootId}.category.${name_key}`] = {
            message: data.name || "",
            description: `The sidebar category ${nodeId} in sidebar docs`,
          };
        }

        /**
         * Add translations for link generated-index
         */
        if (itype === "parent" && !page.show_content) {
          // link.generated-index.title
          translations[lang][`sidebar.${rootId}.category.${page.label}`] = {
            message: data.name || "",
            description: `The sidebar category ${nodeId} in sidebar docs`,
          };
          /**
           * Use page label as translation key for generated-index
           */
          translations[lang][
            `sidebar.${rootId}.category.${page.label}.link.generated-index.title`
          ] = {
            message: data.name || "",
            description: `The sidebar generated-index title ${nodeId} in sidebar docs`,
          };

          // link.generated-index.description
          translations[lang][
            `sidebar.${rootId}.category.${page.label}.link.generated-index.description`
          ] = {
            message: data.description || "",
            description: `The sidebar generated-index description ${nodeId} in sidebar docs`,
          };
        }

        acc[lang] = {
          name: data.name,
          description: data.description,
          markdown: data.markdown_content || "",
        };
        return acc;
      }, {} as ContentTreeTrans),
      children: [],
    };

    /**
     * Contruct page pages tree
     */
    (page.pages || []).forEach((npage, index) => {
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
    const nodeId = utils.strToBase64(nsp.id);

    const itemTree: NamespacesContentTree = {
      type: "parent",
      root: true,
      path: `${nodeId}/`, // this should end with / (slash)
      slug: `${nsp.url}`,
      rootSlug: `${nsp.url}`,
      id: nodeId,
      show_content: false,
      children: [],
    };

    /**
     * Contruct namespace pages tree
     */
    (nsp.pages || []).forEach((page, index) => {
      constructPageContentTree(page, itemTree, index + 1);
    });

    // get first child link of the tree
    const firstChildLink = getFirstChildLink(itemTree)!;

    // Set namespace link meta
    links[nodeId] = {
      activeBasePath: nsp.url,
      to: firstChildLink?.slug || nsp.url,
      docId: firstChildLink?.pathId,
      type: firstChildLink.type,
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
      // we'are using page label as translation key for generated-index
      label: hasContent || !item.label ? transKey(item.id, "name") : item.label,
      link: hasContent
        ? {
            type: "doc",
            id: pathId,
          }
        : {
            type: "generated-index",
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
    namespace.pages = namespace.pages || [];
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
