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
import { CMS_MODELS } from '@/constant/cms';
import { PlansPricingContent } from './items/types';
import { getGqlPageSections, getGqlPlansPricingQueries } from './items';
import cloneDeep from 'lodash/cloneDeep';

const {
  section_templates,
  generics: {
    reusable_page_sections,
    reusable_page_sections_categories,
    page_sections,
  },
} = CMS_MODELS;

const { st_media_tabs, st_hoverable_media_menus } = section_templates;

export async function pageSectionsAdapters<
  T extends { [x: string]: any; sections: M2APageSection[] }
>(data: T | undefined, access_token: string) {
  if (data) {
    await pageSectionExtractReusableM2A(data); // this must be called at top of any others functions
    pageSectionPublished(data);
    pageSectionsWithAssets(access_token, data.sections);
    await pageSectionWithPlansPricing(data);
  }
}

async function pageSectionExtractReusableM2A<
  T extends { [x: string]: any; sections: M2APageSection[] }
>(data: T) {
  const sections = data.sections as M2APageSectionReusable[];

  const reusable_sections = sections
    .filter(({ item, collection }) => {
      return (
        item.status === 'published' && collection === reusable_page_sections
      );
    })
    .map((item) => {
      return (item as M2AReusablePageSection).item.page_section;
    })
    .map((ps) => ps.split('--')[1].trim());

  const reusable_section_categories = sections
    .filter(({ item, collection }) => {
      return (
        collection === reusable_page_sections_categories &&
        item.status === 'published'
      );
    })
    .map((item) => {
      return (item as M2AReusablePageSectionsCategory).item.section_category;
    });

  if (reusable_section_categories.length > 0 || reusable_sections.length > 0) {
    const rs_sections = await getGqlPageSections(
      reusable_sections,
      reusable_section_categories
    );

    if (!rs_sections || rs_sections.PageSections.length === 0) return;

    rs_sections.PageSections.forEach((rs_section, rs_i) => {
      sections.forEach((section, i) => {
        switch (section.collection) {
          case reusable_page_sections:
            if (section.item.page_section.includes(rs_section.id.toString())) {
              section.item.section = cloneDeep({
                item: rs_section,
                id: `${section.id}_${rs_i}_${i}`,
                collection: page_sections,
              });
            }
            break;
          case reusable_page_sections_categories:
            if (
              rs_section.category &&
              section.item.section_category.includes(rs_section.category)
            ) {
              if (!section.item.sections) {
                section.item.sections = [];
              }
              section.item.sections.push(
                cloneDeep({
                  item: rs_section,
                  id: `${section.id}_${rs_i}_${i}`,
                  collection: page_sections,
                })
              );
            }
            break;
        }
      });
    });
  }

  data.sections = sections.reduce((acc, item) => {
    switch (item.collection) {
      case page_sections:
        acc.push(item);
        break;
      case reusable_page_sections:
        item.item.section && acc.push(item.item.section);
        break;
      case reusable_page_sections_categories:
        item.item.sections && acc.push(...item.item.sections);
        break;
    }
    return acc;
  }, [] as M2APageSection[]);
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
    const reusable = item.category !== undefined;
    if (reusable && item.status !== 'draft') {
      return true;
    }
    return item.status === 'published';
  });

  data.sections.forEach(({ item }) => {
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
      if (plan_pricing.includes('flexible_plans')) {
        plan_pricing.push('platforms');
      }
      plan_pricing.forEach((key) => {
        ncontent.item.plan_pricing_contents![key] = memo_content![key] as any;
      });
    }
  }
}
