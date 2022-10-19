import type { ID } from '@directus/sdk';

import {
  DRTStatus,
  MDWithAsset,
  MDWithPoint,
  MDWithTranslation,
} from '@/types/directus';
import { M2APageSection } from '../page-sections';
import type { CMS_MODELS } from '@/constant/cms';

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
  languages_code: string;
  summary: string;
  markdown_content: string;
};

type NewsField = {
  label: string;
  tags: string[];
  slug: string;
  image: MDWithAsset;
};

export type MDNews = MDWithTranslation<NewsTransField> & NewsField & DRTStatus;

export type MDTopbarNew = Pick<DRTStatus, 'id' | 'date_created' | 'status'> &
  Pick<NewsField, 'slug'> &
  MDWithTranslation<Pick<NewsTransField, 'title' | 'languages_code'>>;

// ----------------------- TopbarLinks model type --------------

export type MDTopbarLink = MDWithTranslation<{ name: string }> & {
  id: ID;
  label: string;
  url: string;
  external: boolean;
} & DRTStatus;

// --------------- footer link item model types -------------
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
  localization: MDWithPoint;
} & DRTStatus;

type MDCompanyDetailField = {
  company_name?: string;
  support_email?: string;
  email?: string;
  website?: string;
  logo?: MDWithAsset;
  addresses: MDAddress[];
  socials: MDSocial[];
  currency: '$' | '€' | string;
};

type MDCompanyDetailFieldTrans = {
  slogan?: string;
};

export type MDCompanyDetail = MDWithTranslation<MDCompanyDetailFieldTrans> &
  MDCompanyDetailField &
  DRTStatus;

//  ------------------ Navbar Links types  ---------------------

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

//  ------------------ Page details Links types  ---------------------

export type MDPage = {
  label: string;
  url: string;
  image: MDWithAsset<{
    width: number;
    height: number;
  }>;
  keywords: string[];
  theme_color?: string;
  sections: M2APageSection[];
} & MDWithTranslation<{
  title: string;
  description?: string;
}> &
  DRTStatus;

// ---------------- Home Page, Hero section -------------------------
export type MDHomePageHero = {
  image: MDWithAsset;
  images: { id: ID; directus_files_id: MDWithAsset }[];
  disposition: 'text_left' | 'text_right';
} & MDWithTranslation<{
  title: string;
  description: string;
  trailing_titles: string[];
}> &
  DRTStatus;

// ---------------- Plans Pricing -------------------------

export type TPlansPricing = typeof CMS_MODELS.plans_pricing;

export type MPlansPricing = keyof TPlansPricing;
export type VPlansPricing = TPlansPricing[keyof TPlansPricing];

export type PlansPricingContent = {
  flexible_plans?: MDFlexiblePlan | null;
  fixed_plans?: MDFixedPlan[];
  plans_comparisons?: MDPlansComparison[];
  platforms?: MDPlatform[];
  machine_templates: MDMachineTemplate[];
};

export type MDFlexiblePlan = {
  ram: number;
  ram_cost_hour: number;
  cpu: number;
  cpu_cost_hour: number;
  ssd: number;
  ssd_cost_hour: number;
} & DRTStatus;

export type MDFixedPlan = {
  platforms: string[];
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

export type MDMachineTemplate = {
  name: string;
  icon_svg?: string;
  icon?: MDWithAsset;
  cost_hour: number;
} & DRTStatus;

export type MDPlatform = {
  name: string;
  icon_svg?: string;
  icon?: MDWithAsset;
  category?: string;
  ram: number;
  cpu: number;
  ssd: number;
} & MDWithTranslation<{
  description?: string;
}> &
  DRTStatus;

export type MDPlatformCategory = {
  name: string;
  icon_svg?: string;
  icon?: MDWithAsset;
} & MDWithTranslation<{
  name?: string;
  description?: string;
}> &
  DRTStatus;
