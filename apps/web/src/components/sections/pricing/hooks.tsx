import {
  MDFlexiblePlan,
  MDMachineTemplate,
  MDPlatform,
} from '@/cms/items/types';
import { HasSvgOrImage } from '@/components/ui/ReactSelector';
import { useCallback, useState } from 'react';
import round from 'lodash/round';

export type FlexiblePlansProps = {
  flexible_plans: MDFlexiblePlan;
  machine_templates: MDMachineTemplate[];
  platforms: MDPlatform[];
};

const g_options = {
  ram: {
    unit: 'GB',
    stepValue: 1,
    minValue: 1,
    maxValue: 48,
  },
  cpu: {
    unit: 'Core',
    stepValue: 2,
    minValue: 1,
    maxValue: 16,
  },
  ssd: {
    unit: 'GB',
    minValue: 25,
    stepValue: 15,
    maxValue: 1000,
  },
};

type Params = {
  defaultMT: MDMachineTemplate | null;
  flexible_plans: MDFlexiblePlan;
};

export const useFlexiblePlans = ({ defaultMT, flexible_plans }: Params) => {
  const {
    cpu,
    cpu_cost_hour,
    ram,
    ram_cost_hour,
    ssd,
    ssd_cost_hour,
    monthly_reduction,
  } = flexible_plans;

  const [options, setOptions] = useState({
    ram: {
      ...g_options.ram,
      minValue: ram,
    },
    cpu: {
      ...g_options.cpu,
      minValue: cpu,
    },
    ssd: {
      ...g_options.ssd,
      minValue: ssd,
    },
  });

  const [mt, setMt] = useState(defaultMT);

  const [cpus, setCpus] = useState(cpu);
  const [rams, setRams] = useState(ram);
  const [ssds, setSsds] = useState(ssd);

  const onCpusChange = useCallback((value: number) => setCpus(value), []);
  const onRamsChange = useCallback((value: number) => setRams(value), []);
  const onSsdsChange = useCallback((value: number) => setSsds(value), []);

  const onMtChange = useCallback(
    (value: MDMachineTemplate) => setMt(value),
    []
  );

  const $cpu_cost = cpu_cost_hour * cpus;
  const $ram_cost = ram_cost_hour * rams;
  const $ssd_cost = ssd_cost_hour * ssds;
  const $hourly_cost = $cpu_cost + $ram_cost + $ssd_cost + (mt?.cost_hour || 0);

  const $true_monthly_cost = $hourly_cost * 730;
  const reduct = ((100 - monthly_reduction) * 1) / 100;
  const $monthly_cost = $true_monthly_cost * reduct;
  const precision = 3;

  return {
    options,
    cpus,
    rams,
    ssds,
    onCpusChange,
    onRamsChange,
    onSsdsChange,
    onMtChange,
    hourly_cost: round($hourly_cost, precision),
    true_monthly_cost: round($true_monthly_cost, precision - 1),
    monthly_cost: round($monthly_cost, precision - 1),
  };
};

export function getMachineTemplateOptions(
  machine_templates: MDMachineTemplate[]
) {
  const options = machine_templates.map((tm) => {
    return {
      label: (
        <>
          {(tm.icon || tm.icon_svg) && (
            <HasSvgOrImage icon={tm.icon} icon_svg={tm.icon_svg} />
          )}
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
          {(tm.icon || tm.icon_svg) && (
            <HasSvgOrImage icon={tm.icon} icon_svg={tm.icon_svg} />
          )}
          <span>{tm.name}</span>
        </>
      ),
      value: tm,
    };
  });

  return options;
}
