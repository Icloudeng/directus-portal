import { CMS_MODELS, GE_Vls, ST_Vls } from '@apps/contracts';

import {
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from './gql-query';

const { section_templates, generics } = CMS_MODELS;
const { page_sections_categories } = generics;

type Query = {
  [k in ST_Vls]: { __typeName: k; [x: string]: unknown } & typeof qWithStatus;
};

const q_ST: Query = {
  [section_templates.st_values]: {
    __typeName: section_templates.st_values,
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
    image: qWithQueryAsset({
      height: true,
      width: true,
      type: true,
    }),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
    plan_pricing: true,
    ...qWithStatus,
  },
  [section_templates.st_platforms]: {
    __typeName: section_templates.st_platforms,
    __args: qWithPublishedStatus(),
    include_platforms: true,
    ...qWithStatus,
  },
  [section_templates.st_media_tabs]: {
    __typeName: section_templates.st_media_tabs,
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
    image: qWithQueryAsset({ type: true }),
    ...qWithTranslations({
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_transformed_image_carousels]: {
    __typeName: section_templates.st_transformed_image_carousels,
    __args: qWithPublishedStatus(),
    image: qWithQueryAsset({ type: true }),
    ...qWithStatus,
  },
  [section_templates.st_testimonials]: {
    __typeName: section_templates.st_testimonials,
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
    image: qWithQueryAsset({ type: true }),
    ...qWithStatus,
  },
  [section_templates.st_grouped_logos]: {
    __typeName: section_templates.st_grouped_logos,
    __args: qWithPublishedStatus(),
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
    __args: qWithPublishedStatus(),
    ...qWithStatus,
  },
  [section_templates.st_company_details]: {
    __typeName: section_templates.st_company_details,
    __args: qWithPublishedStatus(),
    ...qWithStatus,
  },
  [section_templates.st_timeline_ranges]: {
    __typeName: section_templates.st_timeline_ranges,
    __args: qWithPublishedStatus(),
    ...qWithTranslations({
      time_title: true,
      time_description: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_cards]: {
    __typeName: section_templates.st_cards,
    __args: qWithPublishedStatus(),
    image: qWithQueryAsset({
      width: true,
      height: true,
    }),
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
    __args: qWithPublishedStatus(),
    ...qWithStatus,
  },
  [section_templates.st_side_text_medias]: {
    __typeName: section_templates.st_side_text_medias,
    __args: qWithPublishedStatus(),
    media: qWithQueryAsset({ type: true }),
    media_url: true,
    disposition: true,
    sided: true,
    ...qWithTranslations({
      title: true,
      description: true,
      buttons: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_markdown]: {
    __typeName: section_templates.st_markdown,
    __args: qWithPublishedStatus(),
    toc: true,
    ...qWithTranslations({
      markdown_content: true,
      toc_parent: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_charts]: {
    __typeName: section_templates.st_charts,
    __args: qWithPublishedStatus(),
    type: true,
    datasets: true,
    ...qWithTranslations({
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  [section_templates.st_latest_news]: {
    __typeName: section_templates.st_latest_news,
    __args: qWithPublishedStatus(),
    limit: true,
    ...qWithStatus,
  },
  [section_templates.st_latest_blog]: {
    __typeName: section_templates.st_latest_blog,
    __args: qWithPublishedStatus(),
    limit: true,
    ...qWithStatus,
  },
  [section_templates.st_rich_text]: {
    __typeName: section_templates.st_rich_text,
    __args: qWithPublishedStatus(),
    toc: true,
    ...qWithTranslations({
      text: true,
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

const page_section_customz = {
  background_image: qWithQueryAsset(),
  background_color: true,
  background_svg: true,
  custom_css: true,
  container: true,
  ...qWithTranslations({
    title: true,
    description: true,
  }),
};

const page_section = {
  __typeName: CMS_MODELS.generics.page_sections,
  __args: qWithPublishedStatus(),
  ...page_section_customz,
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
    ...page_section_customz,
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
