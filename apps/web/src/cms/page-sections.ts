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
import { getGqlPlansPricingQueries } from './items';
import { MPlansPricing, PlansPricingContent } from './items/types';

const { section_templates, generics } = CMS_MODELS;

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
};

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
          __on: Object.values(q_ST),
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
      // Actually all templates modeles uses image key for assets
      const imgKey = 'image';

      //   switch (st.collection) {
      //     case 'ST_CardCarousels':
      //       imgKey = <keyof ST_CardCarousel['item']>'image';
      //       break;
      //   }

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

export async function pageSectionWithPlansPricing<
  T extends { [x: string]: any; sections: M2APageSection[] }
>(data: T) {
  let memo_content = null as PlansPricingContent | null | undefined;
  for (const section of data.sections) {
    for (const content of section.item.contents) {
      // Select templates with plans_pricing request
      const sts: ST_Vls[] = [
        section_templates['st_page_aside_menus'],
        section_templates['st_plans_pricing'],
      ];
      const has = sts.includes(content.collection);
      if (!has) continue;
      const ncontent = content as ST_PageAsideMenu | ST_PlansPricing;
      const plan_pricing = ncontent.item.plan_pricing;
      if (
        !plan_pricing ||
        plan_pricing.length === 0 ||
        memo_content === undefined
      ) {
        continue;
      }

      memo_content = memo_content
        ? memo_content
        : await getGqlPlansPricingQueries();

      if (!memo_content) continue;

      ncontent.item.plan_pricing_contents = {} as PlansPricingContent;
      plan_pricing.push('machine_templates');
      if (plan_pricing.includes('flexible_plans')) {
        plan_pricing.push('platforms');
      }
      plan_pricing.forEach((key) => {
        ncontent.item.plan_pricing_contents![key] = memo_content![key] as any;
      });
    }
  }
}

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

//------------------- Page Sections --------------------//
type PS_Content =
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
  | ST_PlansPricing;

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
type ST_Vls = ST[keyof ST];

type GE = typeof generics;
type GE_V<K extends keyof GE> = GE[K];
