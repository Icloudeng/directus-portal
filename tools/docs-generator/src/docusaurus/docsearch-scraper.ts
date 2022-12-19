import { NamespacesContent, NamespacesContentTree } from "./namespaces";
import slug from "limax";

export type StartUrls = {
  url: string;
};

/**
 * Generate doc search scraper urls content
 *
 * @param namespaces
 * @returns
 */
export function generateDocSearchScraperContent(namespaces: NamespacesContent) {
  const urls: StartUrls[] = [];

  function urlTree(node: NamespacesContentTree) {
    if (node.type === "child") {
      return urls.push({ url: node.slug });
    }

    const hasContent = node.content && node.show_content;

    if (!node.root) {
      urls.push(
        hasContent
          ? { url: node.slug }
          : { url: "/category/" + slug(node.label || "") }
      );
    }

    node.children.forEach((newNode) => urlTree(newNode));
  }

  namespaces.tree.forEach((node) => urlTree(node));

  return urls;
}
