import { CompanyDetail } from "../cms/type";
import { DIRECTUS_STATIC_TOKEN, DIRECTUS_URL, WEBSITE_URL } from "../constants";

export type DetailContent = {
  meta: {
    title?: string;
    tagline?: string;
    url?: string;
    favicon?: string;
    organizationName?: string;
  };
};

export function generateDetailContent(companyDetails: CompanyDetail) {
  const content: DetailContent = {
    meta: {},
  };

  const meta = content.meta;

  /**
   * Set navbar title (use website title from cms)
   */
  if (companyDetails && companyDetails.website_title) {
    meta.title = companyDetails.website_title;
  }

  /**
   * Set organizationName
   */
  if (companyDetails.company_name) {
    meta.organizationName = companyDetails.company_name;
  }

  /**
   * Set favicon (use website title from cms)
   */
  if (companyDetails && companyDetails.logo) {
    meta.favicon = `${DIRECTUS_URL}/assets/${
      companyDetails.logo.id
    }?access_token=${DIRECTUS_STATIC_TOKEN}&width=${50}&height=${50}`;
  }

  /**
   * Set base website url
   */
  if (WEBSITE_URL) {
    meta.url = WEBSITE_URL;
  }

  return content;
}
