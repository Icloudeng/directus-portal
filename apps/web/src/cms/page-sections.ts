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

const { section_templates, generics } = CMS_MODELS;

const q_ST = [
  {
    __typeName: section_templates.st_values,
    icon_svg: true,
    icon_bg_color: true,
    flexible: true,
    ...qWithTranslations({
      name: true,
      description: true,
    }),
    ...qWithStatus,
  },
  {
    __typeName: section_templates.st_navtabs,
    type: true,
    pagination_buttons: true,
    ...qWithTranslations({
      name: true,
      markdown_content: true,
    }),
    ...qWithStatus,
  },
  {
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
  {
    __typeName: section_templates.st_card_image_carousels,
    image: qWithQueryAsset(),
    pagination_buttons: true,
    prev_next_buttons: true,
    readmore_url: true,
    ...qWithTranslations({
      title: true,
      description: true,
    }),
    ...qWithStatus,
  },
];

export const pageSectionQuery = {
  id: true,
  collection: true,
  item: {
    __on: {
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
          __on: q_ST,
        },
      },
    },
  },
};

// --------------------------------------------------------------------//
// ----------------------------  Types ------------------//
// --------------------------------------------------------------------//

//------------------- Section templates --------------------//

type ST_Value = MDHasM2A<
  {
    icon_svg: string;
    icon_bg_color?: string;
    flexible: boolean;
  } & MDWithTranslation<{
    name: string;
    description: string;
  }> &
    DRTStatus,
  ST_V<'st_values'>
>;

type ST_NavTab = MDHasM2A<
  {
    type: 'horizontal' | 'vertical';
    pagination_buttons: boolean;
  } & MDWithTranslation<{
    name: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<'st_navtabs'>
>;

type ST_CardCarousel = MDHasM2A<
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

type ST_CardImageCarousel = MDHasM2A<
  {
    image: MDWithAsset;
    pagination_buttons: boolean;
    prev_next_buttons: boolean;
    readmore_url?: string;
  } & MDWithTranslation<{
    title: string;
    description: string;
  }> &
    DRTStatus,
  ST_V<'st_card_image_carousels'>
>;

//------------------- Page Sections --------------------//

export type M2APageSection = MDHasM2A<
  {
    background_image?: MDWithAsset;
    background_color?: string;
    background_svg?: string;
    custom_css?: string;
    container: boolean;
    contents: (ST_Value | ST_NavTab | ST_CardCarousel | ST_CardImageCarousel)[];
  } & MDWithTranslation<{
    title: string;
    description: string;
  }> &
    DRTStatus,
  GE_V<'page_sections'>
>;

// ---------------- Generics ---------------
type ST = typeof section_templates;
type ST_V<K extends keyof ST> = ST[K];

type GE = typeof generics;
type GE_V<K extends keyof GE> = GE[K];
