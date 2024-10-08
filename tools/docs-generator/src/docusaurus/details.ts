import { CompanyDetail } from "../cms/type";
import { DIRECTUS_PUBLIC_URL, WEBSITE_URL } from "../constants";

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
    meta.title = `${companyDetails.website_title} Documentation`;
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
    meta.favicon = `${DIRECTUS_PUBLIC_URL}/assets/${
      companyDetails.logo.id
    }?width=${50}&height=${50}`;
  }

  /**
   * Set base website url
   */
  if (WEBSITE_URL) {
    meta.url = WEBSITE_URL;
  }

  return content;
}
