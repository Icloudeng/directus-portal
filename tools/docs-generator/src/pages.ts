import { MDDCNamespace, MDDCPage } from "@apps/contracts";
import { map, forEach } from "modern-async";

type PageById = Record<string, MDDCPage>;

type LinkTree =
  | (
      | string
      | {
          [page: string]: LinkTree;
        }
    )[]
  | {
      [page: string]: LinkTree;
    };

export type PageLinkTree = {
  [namespace: string]: LinkTree;
};

export type NamespaceBaseLink = {
  [id: string]: {
    to: string;
    activeBasePath: string;
  };
};

/**
 * Returned pages like key value object
 *
 * @param pages
 * @returns
 */
function pagesById(pages: MDDCPage[]) {
  return pages.reduce((acc, page) => {
    acc[page.id] = page;
    return acc;
  }, {} as PageById);
}

/**
 * THis function takes the namespace list and a new namespace list modified or arranged, Note that first element in the returned array
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

/**
 * Contruct the every page chrildren tree
 *
 * @param parent The inital page where to start constructing children tree
 * @param pages
 * @returns
 */
async function constructPagesTree(parent: MDDCPage, pages: PageById) {
  await forEach(parent.pages, async (page, i) => {
    const $page = pages[page.id];
    delete pages[page.id];
    if ($page) {
      parent.pages[i] = $page;
      await constructPagesTree($page, pages);
    } else {
      parent.pages.splice(i, 1);
    }
  });
  return parent;
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
