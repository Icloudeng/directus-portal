import type { MDDCFooter, MDLanguage } from "@apps/contracts";
import type { ThemeConfig } from "@docusaurus/preset-classic";
import { cmsTransTransformer, transKey, Translations } from "../translations";

type FooterLinks = NonNullable<NonNullable<ThemeConfig["footer"]>["links"]>;
type FooterContent = {
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
  languanges: Pick<MDLanguage, "code" | "name">[]
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
    const metaLink: FooterLinks[number] = {
      label: transKey(link.id, "name"), // the translation key (id + field name)
      items: [],
    };
    // Get link name translation
    cmsTransTransformer(
      link.id,
      langs,
      link.translations,
      ["name"],
      translations
    );

    link.items.forEach((item) => {
      // Get link item name translation
      cmsTransTransformer(
        item.id,
        langs,
        item.translations,
        ["name"],
        translations
      );

      (metaLink.items as any[]).push({
        label: transKey(link.id, "name"), // the translation key (id + field name)
        ...(item.url.startsWith("/") ? { to: item.url } : { href: item.url }),
      });
    });

    meta.footer["links"].push(metaLink);
  });

  return content;
}
