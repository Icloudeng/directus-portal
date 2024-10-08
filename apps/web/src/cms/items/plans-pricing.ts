import { CMS_MODELS } from '@packages/contracts';
import {
  MPlansPricing,
  PlansPricingContent,
  TPlansPricing,
} from '@packages/contracts';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';

const plans_pricing = CMS_MODELS.plans_pricing;
type TQuery = {
  [k in MPlansPricing]: {
    __aliasFor: TPlansPricing[k];
    [x: string]: any;
  };
};

const queries = jsonToGraphQLQuery({
  query: <TQuery>{
    flexible_plans: {
      __aliasFor: plans_pricing.flexible_plans,
      ...qWithStatus,
      id: false, // single object|collection
      ram: true,
      ram_cost_hour: true,
      cpu: true,
      cpu_cost_hour: true,
      ssd: true,
      ssd_cost_hour: true,
      monthly_reduction: true,
    },
    fixed_plans: {
      __aliasFor: plans_pricing.fixed_plans,
      __args: qWithPublishedStatus(),
      ...qWithTranslations({
        name: true,
      }),
      platforms: true,
      type: true,
      monthly_reduction: true,
      ram: true,
      cpu: true,
      ssd: true,
      cost_hour: true,
      ...qWithStatus,
    },
    plans_comparisons: {
      __aliasFor: plans_pricing.plans_comparisons,
      __args: qWithPublishedStatus(),
      ...qWithTranslations({
        name: true,
      }),
      basic: true,
      extended: true,
      pro: true,
      ...qWithStatus,
    },
    machine_templates: {
      __aliasFor: plans_pricing.machine_templates,
      __args: qWithPublishedStatus(),
      name: true,
      icon_svg: true,
      icon: qWithQueryAsset(),
      cost_hour: true,
      default: true,
      ...qWithStatus,
    },
  },
});

export async function getGqlPlansPricingQueries() {
  const directus = await getDirectusClient();

  const res = await directus.graphql
    .items<PlansPricingContent>(queries)
    .catch(console.error);

  if (res?.data) {
    const { machine_templates } = res.data;

    machine_templates.forEach((item) => {
      qWithAsset({
        item,
        imageKey: 'icon',
      });
    });
  }

  return res?.data;
}
