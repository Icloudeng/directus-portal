import {
  MDFlexiblePlan,
  MDMachineTemplate,
  MDPlatform,
} from '@/cms/items/types';
import { HasSvgOrImage } from '@/components/ui/ReactSelector';
import { useState } from 'react';

export type FlexiblePlansProps = {
  flexible_plans: MDFlexiblePlan;
  machine_templates: MDMachineTemplate[];
  platforms: MDPlatform[];
};

export const useFlexiblePlans = ({
  machine_templates,
  platforms,
  flexible_plans,
}: FlexiblePlansProps) => {
  let defaultValueMT = machine_templates.findIndex((t) => t.default);
  defaultValueMT = defaultValueMT === -1 ? 0 : defaultValueMT;

  const [cpus, setCpus] = useState(flexible_plans.cpu);
  const [rams, setRams] = useState(flexible_plans.ram);
  const [ssds, setSsds] = useState(flexible_plans.ssd);

  return {
    defaultValueMT,
    cpus,
    rams,
    ssds,
  };
};

export function getMachineTemplateOptions(
  machine_templates: MDMachineTemplate[]
) {
  const options = machine_templates.map((tm) => {
    return {
      label: (
        <>
          <HasSvgOrImage icon={tm.icon} icon_svg={tm.icon_svg} />
          <span>{tm.name}</span>
        </>
      ),
      value: tm,
    };
  });

  const defaultValueMT = machine_templates.findIndex((t) => t.default);

  return {
    options,
    default: defaultValueMT === -1 ? 0 : defaultValueMT,
  };
}

export function getPlatformOptions(platforms: MDPlatform[]) {
  const options = platforms.map((tm) => {
    return {
      label: (
        <>
          <HasSvgOrImage icon={tm.icon} icon_svg={tm.icon_svg} />
          <span>{tm.name}</span>
        </>
      ),
      value: tm,
    };
  });

  return options;
}
