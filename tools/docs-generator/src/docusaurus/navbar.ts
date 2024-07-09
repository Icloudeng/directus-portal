import type { MDDCNamespace } from "@packages/contracts";
// import type { ThemeConfig } from "@docusaurus/preset-classic";
import type { CompanyDetail, MDLang } from "../cms/type";
import { NamespaceBaseLink, reArrangeNamespace } from "./namespaces";
import { DIRECTUS_STATIC_TOKEN, DIRECTUS_URL, WEBSITE_URL } from "../constants";
import { cmsTransTransformer, transKey, Translations } from "./translations";
import utils from "../utils";

type NavbarItems = NonNullable<NonNullable<any["navbar"]>["items"]>;
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
      src: `${DIRECTUS_URL}/assets/${
        companyDetails.logo.id
      }?access_token=${DIRECTUS_STATIC_TOKEN}&width=${50}&height=${50}`,
      alt: companyDetails.website_title || "",
      // ...(WEBSITE_URL ? { href: WEBSITE_URL } : {}),
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
  const [detaultDocNamespace, new_namespaces] = reArrangeNamespace(namespaces);

  /**
   * We need to reverse the new_namespaces array, this well be unshilft element on the next logic
   */
  new_namespaces.reverse();

  new_namespaces.forEach((nsp) => {
    // Get namespace name translation
    cmsTransTransformer({
      key: nsp.id,
      prefixKey: "item.label", // Docusaurus navbar link prefix translation path
      datakeys: ["name"],
      description: "The label of navbar link",
      langs,
      mutable: translations,
      datas: nsp.translations,
    });

    const { type, ...link } = namespaceLinks[utils.strToBase64(nsp.id)]; // get link by page id in base64 (ref: "./namespaces.ts");

    /**
     * Insert the at the start of an array,
     * since we've reversed the array on above logic
     */
    /**
     * Insert the at the start of an array,
     * since we've reversed the array on above logic
     */
    /** Create the navbar links as doc namespamce */
    meta.navbar.items!.unshift({
      type: "doc",
      position: "left",
      label: transKey(nsp.id, "name"),
      docId: link.docId,
      ...link,
    });
  });

  return content;
}
