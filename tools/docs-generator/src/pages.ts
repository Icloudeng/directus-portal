import { MDDCNamespace, MDDCPage } from "@apps/contracts";
import { map, forEach } from "modern-async";

type PageById = Record<string, MDDCPage>;
function pagesById(pages: MDDCPage[]) {
  return pages.reduce((acc, page) => {
    acc[page.id] = page;
    return acc;
  }, {} as PageById);
}

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
