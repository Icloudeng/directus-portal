import { CompanyDetail } from "src/cms/type";

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

  return content;
}
