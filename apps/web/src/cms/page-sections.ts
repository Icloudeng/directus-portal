import { CMS_MODELS } from '@/app/constant/cms';
import { ButtonVariant } from '@/types/buttonTypes';
import {
  DRTStatus,
  MDHasM2A,
  MDWithAsset,
  MDWithTranslation,
  RepeaterBtn,
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
  [k in ST_Vls]: { __typeName: k; [x: string]: unknown } & typeof qWithStatus;
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
    image: qWithQueryAsset(),
    image_svg: true,
    disposition: true,
    ...qWithTranslations({
      title: true,
      description: true,
      buttons: true,
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
    image: qWithQueryAsset({ type: true }),
    ...qWithTranslations({
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_transformed_image_carousels]: {
    __typeName: section_templates.st_transformed_image_carousels,
    image: qWithQueryAsset({ type: true }),
    ...qWithStatus,
  },
  [section_templates.st_testimonials]: {
    __typeName: section_templates.st_testimonials,
    client_name: true,
    client_post: true,
    image: qWithQueryAsset({ type: true }),
    ...qWithTranslations({
      review_text: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_gallery]: {
    __typeName: section_templates.st_gallery,
    image: qWithQueryAsset({ type: true }),
    ...qWithStatus,
  },
  [section_templates.st_grouped_logos]: {
    __typeName: section_templates.st_grouped_logos,
    name: true,
    image: qWithQueryAsset({
      type: true,
      width: true,
      height: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_become_partner_forms]: {
    __typeName: section_templates.st_become_partner_forms,
    ...qWithStatus,
  },
  [section_templates.st_company_details]: {
    __typeName: section_templates.st_company_details,
    ...qWithStatus,
  },
  [section_templates.st_timeline_ranges]: {
    __typeName: section_templates.st_timeline_ranges,
    ...qWithTranslations({
      time_title: true,
      time_description: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_side_text_image]: {
    __typeName: section_templates.st_side_text_image,
    image: qWithQueryAsset(),
    image_svg: true,
    disposition: true,
    ...qWithTranslations({
      title: true,
      description: true,
      buttons: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_cards]: {
    __typeName: section_templates.st_cards,
    image: qWithQueryAsset(),
    flexible_image: true,
    border_card: true,
    background_color: true,
    clickable_card: true,
    ...qWithTranslations({
      title: true,
      description: true,
      buttons: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_guest_questions]: {
    __typeName: section_templates.st_guest_questions,
    ...qWithStatus,
  },
};

type PSQuery = {
  [k in Exclude<GE_Vls, typeof page_sections_categories>]: {
    __typeName: k;
    [x: string]: unknown;
  };
};

const page_section = {
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
};

export const pageSectionItemsQuery: PSQuery = {
  [generics.page_sections]: page_section,
  [generics.reusable_page_sections]: {
    __typeName: CMS_MODELS.generics.reusable_page_sections,
    __args: qWithPublishedStatus(),
    page_section: {
      ...page_section,
      reusable: true,
      __args: qWithPublishedStatus({
        filter: {
          status: {
            _in: ['published', 'archived'],
          },
        },
      }),
    },
    ...qWithStatus,
  },
  [generics.reusable_page_sections_categories]: {
    __typeName: CMS_MODELS.generics.reusable_page_sections_categories,
    section_category: {
      __args: qWithPublishedStatus(),
      name: true,
      page_sections: {
        ...page_section,
        reusable: true,
        __args: qWithPublishedStatus({
          filter: {
            status: {
              _in: ['published', 'archived'],
            },
          },
        }),
      },
      ...qWithStatus,
    },
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
  {
    image?: MDWithAsset;
    image_svg?: string;
    disposition: 'text_left' | 'text_right';
  } & MDWithTranslation<{
    title: string;
    description?: string;
    buttons?: RepeaterBtn[];
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
    variant?: ButtonVariant;
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
  { image: MDWithAsset } & MDWithTranslation<{
    markdown_content?: string;
  }> &
    DRTStatus,
  ST_V<'st_hoverable_media_menus'>
>;

export type ST_TransformedImageCarousel = MDHasM2A<
  { image: MDWithAsset } & DRTStatus,
  ST_V<'st_transformed_image_carousels'>
>;

export type ST_Testimonial = MDHasM2A<
  {
    client_name: string;
    client_post: string;
    image?: MDWithAsset;
  } & MDWithTranslation<{
    review_text: string;
  }> &
    DRTStatus,
  ST_V<'st_testimonials'>
>;

export type ST_Gallery = MDHasM2A<
  { image: MDWithAsset } & DRTStatus,
  ST_V<'st_gallery'>
>;

export type ST_GroupedLogo = MDHasM2A<
  {
    image: MDWithAsset;
    name?: string;
  } & DRTStatus,
  ST_V<'st_grouped_logos'>
>;

export type ST_BecomePartnerForm = MDHasM2A<
  DRTStatus,
  ST_V<'st_become_partner_forms'>
>;

export type ST_CompanyDetail = MDHasM2A<DRTStatus, ST_V<'st_company_details'>>;

export type ST_TimelineRange = MDHasM2A<
  MDWithTranslation<{
    time_title: string;
    time_description: string;
  }> &
    DRTStatus,
  ST_V<'st_timeline_ranges'>
>;

export type ST_SideTextImage = MDHasM2A<
  {
    image: MDWithAsset;
    image_svg?: string;
    disposition: 'text_left' | 'text_right';
  } & MDWithTranslation<{
    title: string;
    description: string;
    buttons?: RepeaterBtn[];
  }> &
    DRTStatus,
  ST_V<'st_side_text_image'>
>;

export type ST_Card = MDHasM2A<
  {
    image: MDWithAsset;
    flexible_image: boolean;
    border_card: boolean;
    background_color: string;
    clickable_card: boolean;
  } & MDWithTranslation<{
    title: string;
    description?: string;
    buttons?: RepeaterBtn[];
  }> &
    DRTStatus,
  ST_V<'st_cards'>
>;

export type ST_GuestQuestion = MDHasM2A<DRTStatus, ST_V<'st_guest_questions'>>;

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
  | ST_HoverableMediaMenu
  | ST_TransformedImageCarousel
  | ST_Testimonial
  | ST_Gallery
  | ST_GroupedLogo
  | ST_BecomePartnerForm
  | ST_CompanyDetail
  | ST_TimelineRange
  | ST_SideTextImage
  | ST_Card
  | ST_GuestQuestion;

export type M2APageSection = MDHasM2A<
  {
    background_image?: MDWithAsset;
    background_color?: string;
    background_svg?: string;
    custom_css?: string;
    container: boolean;
    category?: MDPageSectionsCategory;
    reusable?: boolean;
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
  page_sections: M2APageSection['item'][];
} & DRTStatus;

export type M2AReusablePageSection = MDHasM2A<
  {
    page_section?: M2APageSection['item'];
  } & DRTStatus,
  GE_V<'reusable_page_sections'>
>;

export type M2AReusablePageSectionsCategory = MDHasM2A<
  {
    section_category?: MDPageSectionsCategory;
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
