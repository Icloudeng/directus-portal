import type { MDLanguage, MDCompanyDetail } from "@packages/contracts";

export type MDLang = Pick<MDLanguage, "code" | "name">;

export type CompanyDetail = Pick<
  MDCompanyDetail,
  "logo" | "company_name" | "website" | "website_title"
>;
