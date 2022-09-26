import { CMS_MODELS } from '@/constant/cms';
import {
  DRTStatus,
  MDHasM2A,
  MDWithAsset,
  MDWithTranslation,
} from '@/types/directus';
import {
  qWithAsset,
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
    initial_index: true,
    ...qWithTranslations({
      title: true,
      description: true,
    }),
    ...qWithStatus,
  },
  {
    __typeName: section_templates.st_sided_contents,
    image: qWithQueryAsset(),
    disposition: true,
    ...qWithTranslations({
      title: true,
      markdown_content: true,
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

export function pageSectionsWithAssets(
  access_token: string,
  sections: M2APageSection[]
) {
  const $sections = [...sections];
  const psAssets = (sections: M2APageSection[]) => {
    const section = sections.pop();
    if (!section) return;

    qWithAsset(access_token, section.item, 'background_image');

    const stAssets = (s_templates: PS_Content[]) => {
      const st = s_templates.pop();
      if (!st) return;
      let imgKey = 'image';

      switch (st.collection) {
        case 'ST_CardCarousels':
          imgKey = <keyof ST_CardCarousel['item']>'image';
          break;
        case 'ST_CardImageCarousels':
          imgKey = <keyof ST_CardImageCarousel['item']>'image';
          break;
        case 'ST_SidedContents':
          imgKey = <keyof ST_SidedContent['item']>'image';
          break;
      }

      qWithAsset(access_token, st.item, imgKey as any);
      stAssets(s_templates);
    };

    stAssets([...section.item.contents]);
    psAssets(sections);
  };

  psAssets($sections);
}

export function pageSectionPublished<
  T extends { [x: string]: any; sections: M2APageSection[] }
>(data: T) {
  data.sections = data.sections.filter(
    ({ item }) => item.status === 'published'
  );

  data.sections.forEach(({ item }) => {
    item.contents = item.contents.filter(
      (citem) => citem.item.status === 'published'
    );
  });
}

// --------------------------------------------------------------------//
// ----------------------------  Types ------------------//
// --------------------------------------------------------------------//

//------------------- Section templates --------------------//

export type ST_Value = MDHasM2A<
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

export type ST_NavTab = MDHasM2A<
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
    image: MDWithAsset;
    disposition: boolean;
  } & MDWithTranslation<{
    title: string;
    markdown_content: string;
  }> &
    DRTStatus,
  ST_V<'st_sided_contents'>
>;

//------------------- Page Sections --------------------//
type PS_Content =
  | ST_Value
  | ST_NavTab
  | ST_CardCarousel
  | ST_CardImageCarousel
  | ST_SidedContent;

export type M2APageSection = MDHasM2A<
  {
    background_image?: MDWithAsset;
    background_color?: string;
    background_svg?: string;
    custom_css?: string;
    container: boolean;
    contents: PS_Content[];
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
