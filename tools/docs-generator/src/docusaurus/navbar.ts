import type { MDDCNamespace } from "@apps/contracts";
import type { ThemeConfig } from "@docusaurus/preset-classic";
import type { CompanyDetail, MDLang } from "../cms/type";
import { NamespaceBaseLink, reArrangeNamespace } from "./namespaces";
import { DIRECTUS_STATIC_TOKEN, DIRECTUS_URL } from "../constants";
import { cmsTransTransformer, transKey, Translations } from "../translations";

type NavbarItems = NonNullable<NonNullable<ThemeConfig["navbar"]>["items"]>;
export type NavbarContent = {
  translations: Translations;
  meta: {
    navbar: {
      title?: string;
      logo?: {
        alt: string;
        src: string;
        href?: string;
      };
      items?: NavbarItems;
    };
  };
};

export type Params = {
  namespaces: MDDCNamespace[];
  languages: MDLang[];
  companyDetails?: CompanyDetail;
  namespaceLinks: NamespaceBaseLink;
};

/**
 * Generate Navbar content based on namespace list
 *
 * @param namespaces
 * @param languages
 * @param companyDetails
 * @param namespaceLinks
 */
export function generateNavbarContent({
  namespaces,
  languages,
  companyDetails,
  namespaceLinks,
}: Params) {
  const content: NavbarContent = {
    translations: {},
    meta: {
      navbar: {
        // localeDropdown language dropdown
        items: [
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
    },
  };

  const langs = languages.map((l) => l.code);
  const meta = content.meta;
  const translations = content.translations;

  langs.forEach((lang) => {
    translations[lang] = {};
  });

  /**
   * Set navbar title (use website title from cms)
   */
  if (companyDetails && companyDetails.website_title) {
    meta.navbar.title = companyDetails.website_title;
  }

  /**
   * Set navbar logo (use website title from cms)
   */
  if (companyDetails && companyDetails.logo) {
    meta.navbar.logo = {
      src: `${DIRECTUS_URL}/assets/${companyDetails.logo.id}?access_token=${DIRECTUS_STATIC_TOKEN}`,
      alt: companyDetails.website_title || "",
      href: companyDetails?.website || "",
    };
  }

  /**
   * Set navbar website link (use website url from cms)
   */
  if (companyDetails && companyDetails.website) {
    // Insert the website url at end of array
    meta.navbar.items!.push({
      href: companyDetails.website,
      label: "Site",
      position: "right",
    });
  }

  /**
   * Generate navbar links content from namespaces
   */
  const [docNamespace, new_namespaces] = reArrangeNamespace(namespaces);
  /**
   * We need to reverse the new_namespaces array, this well be unshilft element on the next logic
   */
  new_namespaces.reverse();

  new_namespaces.forEach((nsp) => {
    // Get namespace name translation
    cmsTransTransformer(
      nsp.id,
      langs,
      nsp.translations,
      ["name"],
      translations
    );

    const link = namespaceLinks[nsp.id];

    /**
     * Insert the at the start of an array,
     * since we've reversed the array on above logic
     */
    if (docNamespace.id === nsp.id) {
      /** Create the navbar links as doc namespamce */
      meta.navbar.items!.unshift({
        type: "doc",
        position: "left",
        label: transKey(nsp.id, "name"),
        ...link,
      });
    } else {
      /** Create the navbar links */
      meta.navbar.items!.unshift({
        type: "docSidebar",
        position: "left",
        label: transKey(nsp.id, "name"),
        ...link,
      });
    }
  });

  return content;
}
