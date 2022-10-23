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

const {
  section_templates,
  generics: {
    reusable_page_sections,
    reusable_page_sections_categories,
    page_sections,
  },
} = CMS_MODELS;

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
    .filter((item) => item.collection === reusable_page_sections)
    .map((item) => {
      return (item as M2AReusablePageSection).item.page_section;
    })
    .map((ps) => ps.split('--')[1].trim());

  const reusable_section_categories = sections
    .filter((item) => item.collection === reusable_page_sections_categories)
    .map((item) => {
      return (item as M2AReusablePageSectionsCategory).item.section_category;
    });

  data.sections = data.sections.filter(
    (item) => item.collection === page_sections
  );

  if (reusable_section_categories.length > 0 || reusable_sections.length > 0) {
    const sections = await getGqlPageSections(
      reusable_sections,
      reusable_section_categories
    );

    if (!sections || sections.PageSections.length === 0) return;

    const new_sections = sections.PageSections.map((item, i) => {
      return { item: item, id: `${item.id}_${i}`, collection: page_sections };
    });

    data.sections.push(...new_sections);
  }
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
        case 'ST_MediaTabs':
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
