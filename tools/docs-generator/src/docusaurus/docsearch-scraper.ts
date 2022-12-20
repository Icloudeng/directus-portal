import { NamespacesContent, NamespacesContentTree } from "./namespaces";
import slug from "limax";
import { MDLang } from "src/cms/type";
import { DEFAULT_LANG } from "../constants";

export type StartUrls = {
  url: string;
  variables?: {
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
  const langs = languages.map((l) => l.code);

  function urlTree(node: NamespacesContentTree) {
    const appendUrl = (lang: string | undefined) => {
      const ilang = lang ? `/${lang}` : "";
      if (node.type === "child") {
        return urls.push({ url: ilang + node.slug });
      }

      const hasContent = node.content && node.show_content;

      if (!node.root) {
        urls.push({
          url:
            ilang +
            (hasContent ? node.slug : "/category/" + slug(node.label || "")),
        });
      }
    };

    langs.forEach((lang) => {
      appendUrl(lang === DEFAULT_LANG ? undefined : lang);
    });

    node.children.forEach((newNode) => urlTree(newNode));
  }

  namespaces.tree.forEach((node) => urlTree(node));

  return urls;
}
