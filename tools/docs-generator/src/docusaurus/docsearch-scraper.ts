import { NamespacesContent, NamespacesContentTree } from "./namespaces";
import slug from "limax";
import { MDLang } from "src/cms/type";
import { DEFAULT_LANG } from "../constants";

export type StartUrls = {
  url: string;
  variables: {
    lang: string[];
  };
};

/**
 * Generate doc search scraper urls content
 *
 * @param namespaces
 * @returns
 */
export function generateDocSearchScraperContent(
  namespaces: NamespacesContent,
  languages: MDLang[]
) {
  const urls: StartUrls[] = [];
  const langs = languages.map((l) => (l.code === DEFAULT_LANG ? "" : l.code));

  function urlTree(node: NamespacesContentTree) {
    if (node.type === "child") {
      return urls.push({ url: node.slug, variables: { lang: langs } });
    }

    const hasContent = node.content && node.show_content;

    if (!node.root) {
      urls.push({
        url: hasContent ? node.slug : "/category/" + slug(node.label || ""),
        variables: { lang: langs },
      });
    }

    node.children.forEach((newNode) => urlTree(newNode));
  }

  namespaces.tree.forEach((node) => urlTree(node));

  return urls;
}
