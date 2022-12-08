import type { MDDCFooter } from "@apps/contracts";
import type { ThemeConfig } from "@docusaurus/preset-classic";
import type { MDLang } from "../cms/type";
import { cmsTransTransformer, transKey, Translations } from "./translations";

type FooterLinks = NonNullable<NonNullable<ThemeConfig["footer"]>["links"]>;
export type FooterContent = {
  translations: Translations;
  meta: {
    footer: {
      links: FooterLinks;
      copyright?: "copyright";
    };
  };
};

/**
 *
 * Generate footer docusaurus content from cms datas
 *
 * @param footer
 * @param languanges
 * @returns
 */
export async function generateFooterContent(
  footer: MDDCFooter,
  languanges: MDLang[]
): Promise<FooterContent> {
  const content: FooterContent = {
    translations: {},
    meta: {
      footer: {
        links: [],
      },
    },
  };

  const translations = content.translations;
  const meta = content.meta;

  const langs = languanges.map((l) => l.code);
  const links = footer.links;

  langs.forEach((lang) => {
    translations[lang] = {};
  });

  /**
   * format the copyright if exits by replacing the {{ year }} by the date year
   */
  const copyright = footer.copyright?.replace(
    /\{\{(\s+)?year(\s+)?\}\}/g,
    new Date().getFullYear().toString()
  );

  /**
   * Put the copyright content
   */
  if (copyright) {
    meta.footer["copyright"] = "copyright";
    langs.forEach((lang) => {
      translations[lang]["copyright"] = {
        message: copyright,
        description: "The footer copyright",
      };
    });
  }

  /**
   * Generate the footer links content
   */
  links.forEach((link) => {
    let metaLink: FooterLinks[number] = {
      label: transKey(link.id, "name"), // the translation key (id + field name)
      items: [],
    };
    // Get link name translation
    cmsTransTransformer(
      link.id,
      langs,
      link.translations,
      ["name"],
      translations,
      "The label of footer link"
    );

    /**
     * Generate footer link items if the link has more than one item,
     * to prevent docusaurus error type (The footer must be either simple or multi-column, and not a mix of the two)
     */
    if (link.items.length > 1) {
      link.items.forEach((item) => {
        // Get link item name translation
        cmsTransTransformer(
          item.id,
          langs,
          item.translations,
          ["name"],
          translations,
          "The label of footer link item"
        );

        (metaLink.items as any[]).push({
          label: transKey(link.id, "name"), // the translation key (id + field name)
          ...(item.url.startsWith("/") ? { to: item.url } : { href: item.url }),
          // href: item.url,
        });
      });
    } else if (link.items.length === 1) {
      /**
       * If the list has only one items then move first the item data to the parent link (the current link)
       */
      const firstItem = link.items[0];
      metaLink = {
        label: transKey(link.id, "name"), // the translation key (id + field name)
        ...(firstItem.url.startsWith("/")
          ? { to: firstItem.url }
          : { href: firstItem.url }),
      };
    }

    meta.footer["links"].push(metaLink);
  });

  return content;
}
