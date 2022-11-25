import { ID } from "@directus/sdk";
import {
  ButtonVariant,
  DRTStatus,
  MDHasM2A,
  MDWithAsset,
  MDWithTranslation,
  RepeaterBtn,
} from "./base";
import {
  MDBlog,
  MDNews,
  MDPlatformCategory,
  MPlansPricing,
  PlansPricingContent,
} from "./collections";
import { CMS_MODELS } from "./constants";

export type ISharedObject = { [x: string]: any };
export type STemplates_Props<T> = {
  items: T[];
  sectionClass: string;
  sectionId?: ID;
  sharedObject: ISharedObject;
};

//------------------- Section templates --------------------//

export type ST_Value = MDHasM2A<
  {
    icon_svg: string;
    icon_bg_color?: string;
    flexible: boolean;
    rows: "dynamic" | "2";
  } & MDWithTranslation<{
    name: string;
    description: string;
  }> &
    DRTStatus,
  ST_V<"st_values">
>;

export type ST_NavTab = MDHasM2A<
  {
    image?: MDWithAsset;
    disposition: "text_left" | "text_right";
  } & MDWithTranslation<{
    name: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<"st_navtabs">
>;

export type ST_CardCarousel = MDHasM2A<
  {
    image?: MDWithAsset;
    pagination_buttons: boolean;
    prev_next_buttons: boolean;
    readmore_url?: string;
    disposition: "text_left" | "text_right";
  } & MDWithTranslation<{
    title: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<"st_card_carousels">
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
  ST_V<"st_card_image_carousels">
>;

export type ST_SidedContent = MDHasM2A<
  {
    image?: MDWithAsset;
    disposition: "text_top" | "text_bottom";
  } & MDWithTranslation<{
    title: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<"st_sided_contents">
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
  ST_V<"st_nav_accordions">
>;

export type ST_CleanHero = MDHasM2A<
  {
    image?: MDWithAsset;
    image_svg?: string;
    disposition: "text_left" | "text_right";
  } & MDWithTranslation<{
    title: string;
    description?: string;
    buttons?: RepeaterBtn[];
  }> &
    DRTStatus,
  ST_V<"st_clean_heros">
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
  ST_V<"st_page_aside_menus">
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
  ST_V<"st_simple_card_links">
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
  ST_V<"st_buttons">
>;

export type ST_PlansPricing = MDHasM2A<
  {
    plan_pricing?: MPlansPricing[];
    plan_pricing_contents?: PlansPricingContent;
  } & DRTStatus,
  ST_V<"st_plans_pricing">
>;

export type ST_Platform = MDHasM2A<
  {
    include_platforms: true;
    categories?: MDPlatformCategory[];
  } & DRTStatus,
  ST_V<"st_platforms">
>;

export type ST_MediaTab = MDHasM2A<
  {
    disposition: "text_top" | "text_bottom";
  } & MDWithTranslation<{
    tab_name: string;
    title?: string;
    description?: string;
    media?: MDWithAsset;
    media_url?: string;
  }> &
    DRTStatus,
  ST_V<"st_media_tabs">
>;

export type ST_StreamableCard = MDHasM2A<
  {
    stream_direction: "stream_left" | "stream_right";
    image?: MDWithAsset;
    image_svg?: string;
  } & MDWithTranslation<{
    name: string;
  }> &
    DRTStatus,
  ST_V<"st_streamable_cards">
>;

export type ST_HoverableMediaMenu = MDHasM2A<
  { image: MDWithAsset } & MDWithTranslation<{
    markdown_content?: string;
  }> &
    DRTStatus,
  ST_V<"st_hoverable_media_menus">
>;

export type ST_TransformedImageCarousel = MDHasM2A<
  { image: MDWithAsset } & DRTStatus,
  ST_V<"st_transformed_image_carousels">
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
  ST_V<"st_testimonials">
>;

export type ST_Gallery = MDHasM2A<
  { image: MDWithAsset } & DRTStatus,
  ST_V<"st_gallery">
>;

export type ST_GroupedLogo = MDHasM2A<
  {
    image: MDWithAsset;
    name?: string;
  } & DRTStatus,
  ST_V<"st_grouped_logos">
>;

export type ST_BecomePartnerForm = MDHasM2A<
  DRTStatus,
  ST_V<"st_become_partner_forms">
>;

export type ST_CompanyDetail = MDHasM2A<DRTStatus, ST_V<"st_company_details">>;

export type ST_TimelineRange = MDHasM2A<
  MDWithTranslation<{
    time_title: string;
    time_description: string;
  }> &
    DRTStatus,
  ST_V<"st_timeline_ranges">
>;

export type ST_SideTextMedia = MDHasM2A<
  {
    media?: MDWithAsset;
    media_url?: string;
    disposition: "text_left" | "text_right";
    sided: boolean;
  } & MDWithTranslation<{
    title: string;
    description: string;
    buttons?: RepeaterBtn[];
  }> &
    DRTStatus,
  ST_V<"st_side_text_medias">
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
  ST_V<"st_cards">
>;

export type ST_Markdown = MDHasM2A<
  MDWithTranslation<{
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<"st_markdown">
>;

export type ST_GuestQuestion = MDHasM2A<DRTStatus, ST_V<"st_guest_questions">>;

export type ChartDataSetData = {
  label: string;
  value: number;
};
export type ST_Chart = MDHasM2A<
  {
    type:
      | "line"
      | "bar"
      | "bar_horizontal"
      | "bar_stacked"
      | "bar_horizontal_stacked"
      | "area"
      | "bubble"
      | "steam"
      | "spark_chart"
      | "band";
    datasets: {
      dataset_name: string;
      border_color: string;
      data?: ChartDataSetData[];
    }[];
  } & MDWithTranslation<{
    markdown_content?: string;
  }> &
    DRTStatus,
  ST_V<"st_charts">
>;

export type ST_LatestNew = MDHasM2A<
  {
    limit: number;
    news?: MDNews[];
  } & DRTStatus,
  ST_V<"st_latest_news">
>;

export type ST_LatestBlog = MDHasM2A<
  {
    limit: number;
    blogs?: MDBlog[];
  } & DRTStatus,
  ST_V<"st_latest_blog">
>;

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
  | ST_SideTextMedia
  | ST_Card
  | ST_GuestQuestion
  | ST_Markdown
  | ST_Chart
  | ST_LatestNew
  | ST_LatestBlog;

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
  GE_V<"page_sections">
>;

export type M2APageSectionReusable =
  | M2AReusablePageSection
  | M2AReusablePageSectionsCategory
  | M2APageSection;

export type MDPageSectionsCategory = {
  name: boolean;
  page_sections: M2APageSection["item"][];
} & DRTStatus;

export type M2AReusablePageSection = MDHasM2A<
  {
    page_section?: M2APageSection["item"];
  } & Pick<
    M2APageSection["item"],
    | "translations"
    | "background_image"
    | "background_svg"
    | "background_color"
    | "custom_css"
    | "container"
  > &
    DRTStatus,
  GE_V<"reusable_page_sections">
>;

export type M2AReusablePageSectionsCategory = MDHasM2A<
  {
    section_category?: MDPageSectionsCategory;
  } & DRTStatus,
  GE_V<"reusable_page_sections_categories">
>;

// ---------------- Generics ---------------
type ST = typeof CMS_MODELS.section_templates;
type ST_V<K extends keyof ST> = ST[K];
export type ST_Vls = ST[keyof ST];

type GE = typeof CMS_MODELS.generics;
type GE_V<K extends keyof GE> = GE[K];
export type GE_Vls = GE[keyof GE];
