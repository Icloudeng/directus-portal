import { ST_PlansPricing, STemplates_Props } from '@packages/contracts';

import { HasPlansPricing } from '../shared/pricing/HasPlansPricing';

export function ST_PlansPricingFC({
  items,
}: STemplates_Props<ST_PlansPricing>) {
  const { item } = items[0];
  return (
    <HasPlansPricing
      plan_pricing={item.plan_pricing}
      contents={item.plan_pricing_contents}
    />
  );
}
