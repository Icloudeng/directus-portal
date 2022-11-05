import {
  M2APageSection,
  M2APageSectionReusable,
  M2AReusablePageSection,
  M2AReusablePageSectionsCategory,
  PS_Content,
  ST_PageAsideMenu,
  ST_PlansPricing,
  ST_Vls,
} from './page-sections';
import { qWithAsset, qWithAssets } from './gql-query';
import { CMS_MODELS } from '@/app/constant/cms';
import { PlansPricingContent } from './items/types';
import { getGqlPageSections, getGqlPlansPricingQueries } from './items';

const {
  section_templates,
  generics: {
    reusable_page_sections,
    reusable_page_sections_categories,
    page_sections,
  },
} = CMS_MODELS;

const { st_media_tabs, st_testimonials } = section_templates;

type ParamPageSectionReusable = {
  [x: string]: any;
  sections: M2APageSectionReusable[];
};

type ParamPageSection = {
  [x: string]: any;
  sections: M2APageSection[];
};

export async function pageSectionsAdapters<T extends ParamPageSectionReusable>(
  data: T | undefined,
  access_token: string
) {
  if (!data) return;

  const ps = pageSectionExtractReusableM2A(data); // this must be called at top of any others functions
  pageSectionPublished(ps);
  pageSectionsWithAssets(access_token, ps.sections);
  await pageSectionWithPlansPricing(ps);
}

function pageSectionExtractReusableM2A<T extends ParamPageSectionReusable>(
  data: T
): ParamPageSection {
  const sections = data.sections.filter(
    (m2a) => m2a.item.status === 'published'
  );

  data.sections = sections.reduce((acc, value, i) => {
    switch (value.collection) {
      case page_sections:
        acc.push(value);
        break;
      case reusable_page_sections:
        if (value.item.page_section) {
          acc.push({
            id: `${value.id}_${i}`,
            collection: page_sections,
            item: value.item.page_section,
          });
        }
        break;
      case reusable_page_sections_categories:
        if (value?.item?.section_category) {
          acc.push(
            ...value.item.section_category.page_sections.map((ps, rs_i) => {
              return {
                id: `${value.id}_${i}_${rs_i}`,
                collection: page_sections,
                item: ps,
              };
            })
          );
        }
        break;
    }
    return acc;
  }, <M2APageSection[]>[]);

  return data as ParamPageSection;
}

function pageSectionsWithAssets(
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

      switch (st.collection) {
        case st_media_tabs:
          qWithAssets(access_token, st.item.translations, 'media');
          break;
        case st_testimonials:
          qWithAsset(access_token, st.item, 'image', [71, 71]);
          break;
        default:
          // Actually all templates modeles uses image as default key for assets
          qWithAsset(access_token, st.item, 'image' as any);
          break;
      }

      stAssets(s_templates);
    };

    stAssets([...section.item.contents]);
    psAssets(sections);
  };

  psAssets($sections);
}

function pageSectionPublished<
  T extends { [x: string]: any; sections: M2APageSection[] }
>(data: T) {
  data.sections = data.sections.filter(({ item }) => {
    const reusable = item.reusable !== undefined;
    if (reusable && item.status !== 'draft') {
      return true;
    }
    return item.status === 'published';
  });

  data.sections.forEach(({ item }) => {
    if (!item.contents) {
      item.contents = [];
    }
    item.contents = item.contents.filter(
      (citem) => citem.item.status === 'published'
    );
  });
}

async function pageSectionWithPlansPricing<
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
      plan_pricing.forEach((key) => {
        ncontent.item.plan_pricing_contents![key] = memo_content![key] as any;
      });
    }
  }
}
