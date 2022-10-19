import { CMS_MODELS } from '@/constant/cms';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import { MPlansPricing, PlansPricingContent, TPlansPricing } from './types';

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
    },
    fixed_plans: {
      __aliasFor: plans_pricing.fixed_plans,
      __args: qWithPublishedStatus(),
      ...qWithStatus,
    },
    plans_comparisons: {
      __aliasFor: plans_pricing.plans_comparisons,
      __args: qWithPublishedStatus(),
      ...qWithStatus,
    },
    machine_templates: {
      __aliasFor: plans_pricing.machine_templates,
      __args: qWithPublishedStatus(),
      ...qWithStatus,
    },
    platforms: {
      __aliasFor: plans_pricing.platforms,
      __args: qWithPublishedStatus(),
      name: true,
      icon_svg: true,
      icon: qWithQueryAsset(),
      ram: true,
      cpu: true,
      ssd: true,
      ...qWithStatus,
    },
  },
});

export async function getGqlPlansPricingQueries() {
  const directus = await getDirectusClient();
  const res = await directus.graphql
    .items<PlansPricingContent>(queries)
    .catch(console.error);

  return res?.data;
}
