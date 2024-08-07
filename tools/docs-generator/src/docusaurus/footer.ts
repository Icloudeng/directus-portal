import type { MDDCFooter } from "@packages/contracts";
// import type { ThemeConfig } from "@docusaurus/preset-classic";
import type { MDLang } from "../cms/type";
import { cmsTransTransformer, transKey, Translations } from "./translations";

type FooterLinks = NonNullable<NonNullable<any["footer"]>["links"]>;
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
  const links = footer.links || [];

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
    link.items = link.items || [];

    let metaLink: FooterLinks[number] = {
      title: transKey(link.id, "name"), // the translation key (id + field name)
      items: [],
    };
    // Get link name translation
    cmsTransTransformer({
      key: link.id,
      datakeys: ["name"],
      description: "The label of footer link",
      langs,
      mutable: translations,
      prefixKey: "link.title", // Docusaurus footer links prefix translation path
      datas: link.translations,
    });

    /**
     * Generate footer link items if the link has more than one item,
     * to prevent docusaurus error type (The footer must be either simple or multi-column, and not a mix of the two)
     */
    if (link.items.length > 1) {
      link.items.forEach((item) => {
        // Get link item name translation
        cmsTransTransformer({
          key: item.id,
          datakeys: ["name"],
          description: "The label of footer link item",
          langs,
          mutable: translations,
          prefixKey: "link.item.label", // Docusaurus footer links items prefix translation path
          datas: item.translations,
        });

        (metaLink.items as any[]).push({
          label: transKey(item.id, "name"),
          ...(item.url.startsWith("/") ? { to: item.url } : { href: item.url }),
        });
      });
    } else if (link.items.length === 1) {
      /**
       * If the list has only one items then move first the item data to the parent link (the current link)
       */
      const firstItem = link.items[0];

      // Get item (link) translations
      cmsTransTransformer({
        key: firstItem.id,
        datakeys: ["name"],
        description: "The label of footer link",
        langs,
        mutable: translations,
        prefixKey: "link.label", // Docusaurus footer links prefix translation path
        datas: firstItem.translations,
      });

      // Overwride footer link by writing the first child
      metaLink = {
        label: transKey(firstItem.id, "name"),
        ...(firstItem.url.startsWith("/")
          ? { to: firstItem.url }
          : { href: firstItem.url }),
      };
    }

    /**
     * Push new footer link
     */
    meta.footer["links"].push(metaLink);
  });

  return content;
}
