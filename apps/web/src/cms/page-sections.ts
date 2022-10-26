import { CMS_MODELS } from '@/constant/cms';
import {
  DRTStatus,
  MDHasM2A,
  MDWithAsset,
  MDWithTranslation,
} from '@/types/directus';
import {
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from './gql-query';
import {
  MDPlatform,
  MDPlatformCategory,
  MPlansPricing,
  PlansPricingContent,
} from './items/types';

const { section_templates, generics } = CMS_MODELS;
const { page_sections_categories } = generics;

type Query = {
  [k in ST_Vls]: { __typeName: k; [x: string]: unknown };
};

const q_ST: Query = {
  [section_templates.st_values]: {
    __typeName: section_templates.st_values,
    icon_svg: true,
    icon_bg_color: true,
    flexible: true,
    rows: true,
    ...qWithTranslations({
      name: true,
      description: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_navtabs]: {
    __typeName: section_templates.st_navtabs,
    image: qWithQueryAsset(),
    disposition: true,
    ...qWithTranslations({
      name: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_card_carousels]: {
    __typeName: section_templates.st_card_carousels,
    image: qWithQueryAsset(),
    pagination_buttons: true,
    prev_next_buttons: true,
    readmore_url: true,
    disposition: true,
    ...qWithTranslations({
      title: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_card_image_carousels]: {
    __typeName: section_templates.st_card_image_carousels,
    image: qWithQueryAsset(),
    pagination_buttons: true,
    prev_next_buttons: true,
    readmore_url: true,
    initial_index: true,
    ...qWithTranslations({
      title: true,
      description: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_sided_contents]: {
    __typeName: section_templates.st_sided_contents,
    image: qWithQueryAsset(),
    disposition: true,
    ...qWithTranslations({
      title: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_nav_accordions]: {
    __typeName: section_templates.st_nav_accordions,
    image: qWithQueryAsset(),
    prev_next_buttons: true,
    ...qWithTranslations({
      title: true,
      description: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_clean_heros]: {
    __typeName: section_templates.st_clean_heros,
    ...qWithTranslations({
      title: true,
      description: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_page_aside_menus]: {
    __typeName: section_templates.st_page_aside_menus,
    plan_pricing: true,
    ...qWithTranslations({
      title: true,
      menu_name: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_simple_card_links]: {
    __typeName: section_templates.st_simple_card_links,
    url: true,
    external: true,
    ...qWithTranslations({
      title: true,
      description: true,
      button_text: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_buttons]: {
    __typeName: section_templates.st_buttons,
    url: true,
    external: true,
    variant: true,
    ...qWithTranslations({
      button_text: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_plans_pricing]: {
    __typeName: section_templates.st_plans_pricing,
    plan_pricing: true,
    ...qWithStatus,
  },
  [section_templates.st_platforms]: {
    __typeName: section_templates.st_platforms,
    include_platforms: true,
    ...qWithStatus,
  },
  [section_templates.st_media_tabs]: {
    __typeName: section_templates.st_media_tabs,
    disposition: true,
    ...qWithTranslations({
      tab_name: true,
      title: true,
      description: true,
      media: qWithQueryAsset({ type: true }),
      media_url: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_streamable_cards]: {
    __typeName: section_templates.st_streamable_cards,
    stream_direction: true,
    image: qWithQueryAsset(),
    image_svg: true,
    ...qWithTranslations({
      name: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_hoverable_media_menus]: {
    __typeName: section_templates.st_hoverable_media_menus,
    ...qWithTranslations({
      media: qWithQueryAsset({ type: true }),
      media_url: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
};

type PSQuery = {
  [k in Exclude<GE_Vls, typeof page_sections_categories>]: {
    __typeName: k;
    [x: string]: unknown;
  };
};

export const pageSectionItemsQuery: PSQuery = {
  [generics.page_sections]: {
    __typeName: CMS_MODELS.generics.page_sections,
    __args: qWithPublishedStatus(),
    background_image: qWithQueryAsset(),
    background_color: true,
    background_svg: true,
    custom_css: true,
    container: true,
    ...qWithTranslations({
      title: true,
      description: true,
    }),
    ...qWithStatus,
    contents: {
      id: true,
      collection: true,
      item: {
        __on: Object.values(q_ST),
      },
    },
  },
  [generics.reusable_page_sections]: {
    __typeName: CMS_MODELS.generics.reusable_page_sections,
    __args: qWithPublishedStatus(),
    page_section: true,
    ...qWithStatus,
  },
  [generics.reusable_page_sections_categories]: {
    __typeName: CMS_MODELS.generics.reusable_page_sections_categories,
    section_category: true,
    __args: qWithPublishedStatus(),
    ...qWithStatus,
  },
};

export const pageSectionQuery = {
  id: true,
  collection: true,
  item: {
    __on: Object.values(pageSectionItemsQuery),
  },
};

// --------------------------------------------------------------------//
// ----------------------------  Types ------------------//
// --------------------------------------------------------------------//
export type ISharedObject = { [x: string]: any };
export type STemplates_Props<T> = {
  items: T[];
  sectionClass: string;
  sharedObject: ISharedObject;
};

//------------------- Section templates --------------------//

export type ST_Value = MDHasM2A<
  {
    icon_svg: string;
    icon_bg_color?: string;
    flexible: boolean;
    rows: 'dynamic' | '2';
  } & MDWithTranslation<{
    name: string;
    description: string;
  }> &
    DRTStatus,
  ST_V<'st_values'>
>;

export type ST_NavTab = MDHasM2A<
  {
    image?: MDWithAsset;
    disposition: 'text_left' | 'text_right';
  } & MDWithTranslation<{
    name: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<'st_navtabs'>
>;

export type ST_CardCarousel = MDHasM2A<
  {
    image?: MDWithAsset;
    pagination_buttons: boolean;
    prev_next_buttons: boolean;
    readmore_url?: string;
    disposition: 'text_left' | 'text_right';
  } & MDWithTranslation<{
    title: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<'st_card_carousels'>
>;

export type ST_CardImageCarousel = MDHasM2A<
  {
    image: MDWithAsset;
    pagination_buttons: boolean;
    prev_next_buttons: boolean;
    readmore_url?: string;
    initial_index: number;
  } & MDWithTranslation<{
    title: string;
    description: string;
  }> &
    DRTStatus,
  ST_V<'st_card_image_carousels'>
>;

export type ST_SidedContent = MDHasM2A<
  {
    image?: MDWithAsset;
    disposition: 'text_top' | 'text_bottom';
  } & MDWithTranslation<{
    title: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<'st_sided_contents'>
>;

export type ST_NavAccordion = MDHasM2A<
  {
    image?: MDWithAsset;
    prev_next_buttons: boolean;
  } & MDWithTranslation<{
    title: string;
    description?: string;
    markdown_content?: string;
  }> &
    DRTStatus,
  ST_V<'st_nav_accordions'>
>;

export type ST_CleanHero = MDHasM2A<
  MDWithTranslation<{
    title: string;
    description?: string;
  }> &
    DRTStatus,
  ST_V<'st_clean_heros'>
>;

export type ST_PageAsideMenu = MDHasM2A<
  {
    plan_pricing?: MPlansPricing[];
    plan_pricing_contents?: PlansPricingContent;
  } & MDWithTranslation<{
    menu_name: string;
    title: string;
    markdown_content?: string;
  }> &
    DRTStatus,
  ST_V<'st_page_aside_menus'>
>;

export type ST_SimpleCardLink = MDHasM2A<
  {
    url: string;
    external: boolean;
  } & MDWithTranslation<{
    title: string;
    description: string;
    button_text: string;
  }> &
    DRTStatus,
  ST_V<'st_simple_card_links'>
>;

export type ST_Button = MDHasM2A<
  {
    url: string;
    external: boolean;
    variant?: 'primary' | 'outline' | 'ghost' | 'light' | 'dark';
  } & MDWithTranslation<{
    button_text: string;
  }> &
    DRTStatus,
  ST_V<'st_buttons'>
>;

export type ST_PlansPricing = MDHasM2A<
  {
    plan_pricing?: MPlansPricing[];
    plan_pricing_contents?: PlansPricingContent;
  } & DRTStatus,
  ST_V<'st_plans_pricing'>
>;

export type ST_Platform = MDHasM2A<
  {
    include_platforms: true;
    platforms?: MDPlatform[];
    categories?: MDPlatformCategory[];
  } & DRTStatus,
  ST_V<'st_platforms'>
>;

export type ST_MediaTab = MDHasM2A<
  {
    disposition: 'text_top' | 'text_bottom';
  } & MDWithTranslation<{
    tab_name: string;
    title?: string;
    description?: string;
    media?: MDWithAsset;
    media_url?: string;
  }> &
    DRTStatus,
  ST_V<'st_media_tabs'>
>;

export type ST_StreamableCard = MDHasM2A<
  {
    stream_direction: 'stream_left' | 'stream_right';
    image?: MDWithAsset;
    image_svg?: string;
  } & MDWithTranslation<{
    name: string;
  }> &
    DRTStatus,
  ST_V<'st_streamable_cards'>
>;

export type ST_HoverableMediaMenu = MDHasM2A<
  MDWithTranslation<{
    media?: MDWithAsset;
    media_url?: string;
    markdown_content?: string;
  }> &
    DRTStatus,
  ST_V<'st_hoverable_media_menus'>
>;

// strean_direction
//------------------- Page Sections --------------------//
export type PS_Content =
  | ST_Value
  | ST_NavTab
  | ST_CardCarousel
  | ST_CardImageCarousel
  | ST_SidedContent
  | ST_NavAccordion
  | ST_PageAsideMenu
  | ST_Button
  | ST_SimpleCardLink
  | ST_CleanHero
  | ST_PlansPricing
  | ST_Platform
  | ST_MediaTab
  | ST_StreamableCard
  | ST_HoverableMediaMenu;

export type M2APageSection = MDHasM2A<
  {
    background_image?: MDWithAsset;
    background_color?: string;
    background_svg?: string;
    custom_css?: string;
    container: boolean;
    category?: string;
    contents: PS_Content[];
  } & MDWithTranslation<{
    title: string;
    description: string;
  }> &
    DRTStatus,
  GE_V<'page_sections'>
>;

export type M2APageSectionReusable =
  | M2AReusablePageSection
  | M2AReusablePageSectionsCategory
  | M2APageSection;

export type MDPageSectionsCategory = {
  name: boolean;
} & DRTStatus;

export type M2AReusablePageSection = MDHasM2A<
  {
    page_section: string;
    section?: M2APageSection;
  } & DRTStatus,
  GE_V<'reusable_page_sections'>
>;

export type M2AReusablePageSectionsCategory = MDHasM2A<
  {
    section_category: string;
    sections?: M2APageSection[];
  } & DRTStatus,
  GE_V<'reusable_page_sections_categories'>
>;

// ---------------- Generics ---------------
type ST = typeof section_templates;
type ST_V<K extends keyof ST> = ST[K];
export type ST_Vls = ST[keyof ST];

type GE = typeof generics;
type GE_V<K extends keyof GE> = GE[K];
export type GE_Vls = GE[keyof GE];
