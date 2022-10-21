import {
  M2APageSection,
  PS_Content,
  ST_MediaTab,
  ST_PageAsideMenu,
  ST_PlansPricing,
  ST_Vls,
} from './page-sections';
import { qWithAsset } from './gql-query';
import { CMS_MODELS } from '@/constant/cms';
import { PlansPricingContent } from './items/types';
import { getGqlPlansPricingQueries } from './items';

const { section_templates } = CMS_MODELS;

export async function pageSectionsAdapters<
  T extends { [x: string]: any; sections: M2APageSection[] }
>(data: T | undefined, access_token: string) {
  if (data) {
    pageSectionPublished(data);
    pageSectionsWithAssets(access_token, data.sections);
    await pageSectionWithPlansPricing(data);
  }
}

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
      let assetKey = 'image';

      switch (st.collection) {
        case 'ST_MediaTabs':
          assetKey = <keyof ST_MediaTab['item']>'media';
          break;
      }

      qWithAsset(access_token, st.item, assetKey as any);
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
