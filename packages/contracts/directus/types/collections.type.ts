import type { ID } from "@directus/sdk";

import type {
  ButtonVariant,
  DRTStatus,
  MDPointMap,
  MDWithAsset,
  MDWithTranslation,
  RepeaterBtn,
} from "./base.type";
import { CMS_MODELS } from "../constants";
import { M2APageSection, M2APageSectionReusable } from "./m2a.type";

// --------------- Layout -------------

export type MDSiteLayout = {
  primary_color?: string;
} & Omit<DRTStatus, "status">;

// --------------- language model types -------------

export type MDLanguage = {
  code: string;
  icon_flag: MDWithAsset;
  name: string;
  direction: string;
};

// ----------------------- News model type --------------
type NewsTransField = {
  title: string;
  summary: string;
  markdown_content: string;
};

type NewsField = {
  label: string;
  tags: string[];
  slug: string;
  image?: MDWithAsset;
  author?: MDAuthor;
};

type MDNewsBase = MDWithTranslation<NewsTransField> & NewsField & DRTStatus;

export type MDNews = Omit<MDNewsBase, "status"> & {
  status: "published" | "draft" | "archived" | "mailer";
  transfer_initiated?: boolean;
  published_mailer?: boolean;
};

export type MDTopbarNew = Pick<DRTStatus, "id" | "date_created" | "status"> &
  Pick<NewsField, "slug"> &
  MDWithTranslation<Pick<NewsTransField, "title">>;

//   --------------------- Blog ----------------------- //
export type MDBlog = MDNewsBase & { image: MDWithAsset };

// ----------------------- News or Blog authers -----------------------//
export type MDAuthor = {
  name: string;
  email: string;
  image?: MDWithAsset;
  twitter_link?: string;
  github_link?: string;
  facebook_link?: string;
  instagram_link?: string;
} & DRTStatus;

// ----------------------- TopbarLinks model type --------------

export type MDTopbarLink = MDWithTranslation<{ name: string }> & {
  id: ID;
  label: string;
  url: string;
  external: boolean;
} & DRTStatus;

export type MDTopbarLayout = {
  show_topbar: boolean;
} & Omit<DRTStatus, "status">;

// --------------- footer link item model types -------------

export type FooterBottom =
  | "company_name"
  | "terms_services"
  | "privacy"
  | "use_cookies"
  | "payment_modes";

export type MDFooterLayout = {
  show_footer_contacts: boolean;
  show_footer_links: boolean;
  show_footer_mailing_subscription: boolean;
  show_top_footer: boolean;
  show_bottom_footer_payment_modes: boolean;
  show_bottom_footer_company_name: boolean;
  footer_type: "full_footer" | "simple_footer";
  top_footer_translations: MDWithTranslation<{
    titles: { title: string; color: string }[];
    buttons: (Omit<RepeaterBtn, "variant"> & {
      variant?: ButtonVariant | "text";
    })[];
  }>["translations"];
  bottom_footer_translations: MDWithTranslation<{
    links: {
      name: string;
      url: string;
      external?: boolean;
    }[];
  }>["translations"];
} & Omit<DRTStatus, "status">;

type MDFooterLinkItemField = {
  id: ID;
  external: boolean;
  url: string;
};

type MDFooterLinkItemFieldTrans = {
  name: string;
};

type MDFooterLinkItem = MDFooterLinkItemField &
  MDWithTranslation<MDFooterLinkItemFieldTrans> &
  DRTStatus;

// --------------- footer link model types -------------

type MDFooterLinkField = {
  id: ID;
  label: string;
  links: MDFooterLinkItem[];
};

type MDFooterLinkFieldTrans = {
  name: string;
};

export type MDFooterLink = MDFooterLinkField &
  MDWithTranslation<MDFooterLinkFieldTrans> &
  DRTStatus;

//  ------------------ company details types  ---------------------

type MDSocial = {
  social_name: string;
  icon?: MDWithAsset;
  link: string;
} & DRTStatus;

type MDAddress = {
  address_name: string;
  phone?: string;
  working_days?: string;
  working_time?: string;
  localization: MDPointMap;
} & DRTStatus;

type MDCompanyDetailField = {
  company_name?: string;
  website_title?: string;
  support_email?: string;
  email?: string;
  website?: string;
  logo?: MDWithAsset;
  favicon?: MDWithAsset;
  image?: MDWithAsset;
  addresses: MDAddress[];
  socials: MDSocial[];
  currency: "$" | "€" | string;
};

type MDCompanyDetailFieldTrans = {
  slogan?: string;
};

export type MDCompanyDetail = MDWithTranslation<MDCompanyDetailFieldTrans> &
  MDCompanyDetailField &
  Omit<DRTStatus, "id">;

//  ------------------ Navbar Links types  ---------------------

export type MDNavbarLayout = {
  navbar_logo_width: number;
  navbar_logo_height: number;
  navbar_logo_rounded: boolean;
} & Omit<DRTStatus, "status">;

export type NavbarLinkSubmenuItem = MDWithTranslation<{
  name: string;
  description: string;
}> & {
  icon_svg?: string;
  url: string;
  external: boolean;
} & DRTStatus;

export type NavbarLinkSubmenu = MDWithTranslation<{ name?: string }> & {
  featured: boolean;
  items: NavbarLinkSubmenuItem[];
} & DRTStatus;

export type MDNavbarLink = {
  label: string;
  url?: string;
  external: boolean;
  submenus: NavbarLinkSubmenu[];
} & MDWithTranslation<{
  name: string;
}> &
  DRTStatus;

export type MDNavbarButton = {
  label: string;
  url: string;
  variant?: ButtonVariant;
  external: boolean;
} & MDWithTranslation<{
  button_text: string;
}> &
  DRTStatus;

//  ------------------ Page details Links types  ---------------------

export type MDPage<PS = false> = {
  label: string;
  url: string;
  image: MDWithAsset<{
    width: number;
    height: number;
  }>;
  keywords: string[];
  theme_color?: string;
  sections: PS extends false ? M2APageSectionReusable[] : M2APageSection[];
} & MDWithTranslation<{
  title: string;
  description?: string;
}> &
  DRTStatus;

// ---------------- Home Page, Hero section -------------------------
export type MDHomePageHero = {
  image?: MDWithAsset;
  images: { id: ID; directus_files_id: MDWithAsset }[];
  disposition: "text_left" | "text_right";
} & MDWithTranslation<{
  title: string;
  description: string;
  trailing_titles: string[];
  page_title: string;
  buttons?: RepeaterBtn[];
}> &
  Omit<DRTStatus, "id">;

// ---------------- Plans Pricing -------------------------

export type TPlansPricing = typeof CMS_MODELS.plans_pricing;

export type MPlansPricing = keyof TPlansPricing;
export type VPlansPricing = TPlansPricing[keyof TPlansPricing];

export type PlansPricingContent = {
  flexible_plans?: MDFlexiblePlan | null;
  fixed_plans?: MDFixedPlan[];
  plans_comparisons?: MDPlansComparison[];
  machine_templates: MDMachineTemplate[];
};

export type MDFlexiblePlan = {
  ram: number;
  ram_cost_hour: number;
  cpu: number;
  cpu_cost_hour: number;
  ssd: number;
  ssd_cost_hour: number;
  monthly_reduction: number;
} & Omit<DRTStatus, "id">;

export type MDFixedPlan = {
  platforms: { platform: string }[];
  type: "basic" | "extended" | "pro";
  monthly_reduction: number;
  ram: number;
  cpu: number;
  ssd: number;
  cost_hour: number;
} & MDWithTranslation<{
  name: string;
}> &
  DRTStatus;

export type MDPlansComparison = {
  basic: string;
  extended: string;
  pro: string;
} & MDWithTranslation<{
  name: string;
}> &
  DRTStatus;

// ----------------  Platforms -------------------------

export type MDMachineTemplate = {
  name: string;
  icon_svg?: string;
  icon?: MDWithAsset;
  default: boolean;
  cost_hour: number;
} & DRTStatus;

export type MDPlatform = {
  name: string;
  slug: string;
  icon: MDWithAsset;
  icon_svg?: string;
  category?: Partial<Pick<MDPlatformCategory, "id" | "name">> &
    Pick<MDPlatformCategory, "translations">;
  ram: number;
  cpu: number;
  ssd: number;
  link?: string;
  external_link: boolean;
  version?: string;
} & MDWithTranslation<{
  description: string;
  documentation?: string;
}> &
  DRTStatus;

export type MDPlatformCategory = {
  name: string;
  icon_svg?: string;
  icon?: MDWithAsset;
  platforms?: MDPlatform[];
} & MDWithTranslation<{
  name?: string;
  description?: string;
}> &
  DRTStatus;

// ----------------  Partner Requests -------------------------

export type PartnerRequest = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  job_title: string;
  country: string;
  website: string;
  company: string;
  description: string;
  linkedin?: string;
};

export type MDPartnerRequest = PartnerRequest & DRTStatus;

//  ----------------  Guest Questions -------------------------

export type GuestQuestion = {
  name: string;
  email: string;
  message: string;
};

export type MDGuestQuestion = GuestQuestion & DRTStatus;

//  ----------------  Guest Replies -------------------------

export type MDGuestReplie = {
  question: MDGuestQuestion;
  replier?: MDAuthor;
  message: string;
  state: "sent" | "failed" | "sending";
  transfer_initiated: boolean;
} & DRTStatus;

//  ---------------- Forms -------------------------

export type MDForms = {
  group: string;
  data: any;
} & Pick<DRTStatus, "status" | "date_created">;

export type MDFormOptionsWebhook = {
  url: string;
  group?: string;
  action: "create";
};

export type MDFormOptions = {
  web_hooks: MDFormOptionsWebhook[];
} & DRTStatus;

//  ---------------- Newsletters Subscriptions -------------------------

export type NewslettersSubscription = {
  email: string;
  publisher: string;
};

export type MDNewslettersSubscription = NewslettersSubscription & DRTStatus;

// ------------------- Listmonk ------------------------------------------

export type MDListmonk = {
  base_url: string;
  admin_username: string;
  admin_password: string;
  list_id: string;
  template_id: string;
} & Omit<DRTStatus, "id">;

// --------------------- Newsletter Config -------------------------------------
export type MDNewsletter = {
  from_name: string;
  from_email: string;
} & Omit<DRTStatus, "id">;

// ------------------------ Matomo Config ---------------------------------------

export type MDMatomo = {
  base_url: string;
  site_id: number;
} & Omit<DRTStatus, "id">;

// ------------------------ Chatwoot Config ---------------------------------------

export type MDChatwoot = {
  base_url: string;
  website_token: string;
} & Omit<DRTStatus, "id">;

// --------------------------- Campaigns ----------------------------------------------

export type MDCampaign = {
  title: string;
  message: string;
  list_id?: number;
  template_id?: number;
  author?: MDAuthor;
  transfer_initiated: boolean;
} & DRTStatus;

// --------------------------- Kroki ----------------------------------------------

export type MDKroki = {
  kroki_server: string;
} & DRTStatus;

// -------------------------------- DC * collections -----------------------------------------

export type MDDCNamespace = {
  label: string;
  url: string;
  pages?: MDDCPage[];
} & MDWithTranslation<{
  name: string;
}> &
  DRTStatus;

export type MDDCPage = {
  namespace?: MDDCNamespace;
  parent_page?: MDDCPage;
  label: string;
  show_content: boolean;
  pages?: MDDCPage[];
} & MDWithTranslation<{
  name: string;
  description?: string;
  markdown_content: string;
}> &
  DRTStatus;

type MDDCFooterLinkItem = {
  external: boolean;
  url: string;
} & MDWithTranslation<{
  name: string;
}> &
  DRTStatus;

type MDDCFooterLink = {
  label: string;
  items?: MDDCFooterLinkItem[];
} & MDWithTranslation<{
  name: string;
}> &
  DRTStatus;

export type MDDCFooter = {
  copyright?: string;
  links?: MDDCFooterLink[];
} & Omit<DRTStatus, "id" | "status">;

export type MDDCLog = {
  log: string;
  type: "info" | "warning" | "error" | "success";
} & Pick<DRTStatus, "date_created" | "id">;
