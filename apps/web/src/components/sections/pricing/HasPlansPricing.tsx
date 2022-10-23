import { MPlansPricing, PlansPricingContent } from '@/cms/items/types';
import { FixedPlans } from './FixedPlans';
import { FlexiblePlans } from './FlexiblePlans';
import { PlansComparisons } from './PlansComparisons';

type Props = {
  plan_pricing: MPlansPricing[] | undefined;
  contents: PlansPricingContent | undefined;
};

export function HasPlansPricing({ contents }: Props) {
  if (!contents) return <></>;

  const {
    plans_comparisons,
    fixed_plans,
    flexible_plans,
    machine_templates,
    platforms,
  } = contents;

  return (
    <>
      {flexible_plans && (
        <div className='mb-5'>
          <FlexiblePlans
            flexible_plans={flexible_plans}
            machine_templates={machine_templates || []}
            platforms={platforms || []}
          />
        </div>
      )}
      {fixed_plans && fixed_plans.length > 0 && (
        <div className='mb-5'>
          <FixedPlans
            fixed_plans={fixed_plans || []}
            machine_templates={machine_templates || []}
          />
        </div>
      )}
      {plans_comparisons && plans_comparisons.length > 0 && (
        <div className='mb-5'>
          <PlansComparisons plans_comparisons={plans_comparisons || []} />
        </div>
      )}
    </>
  );
}
