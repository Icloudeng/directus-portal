import {
  MDFlexiblePlan,
  MDMachineTemplate,
  MDPlatform,
} from '@/cms/items/types';
import Button from '@/components/ui/buttons/Button';
import { DynamicInput } from '@/components/ui/DynamicInput';
import { HasSvgOrImage, ReactSelector } from '@/components/ui/ReactSelector';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

type Props = {
  flexible_plans: MDFlexiblePlan;
  machine_templates: MDMachineTemplate[];
  platforms: MDPlatform[];
};

const useFlexiblePlans = ({
  machine_templates,
  platforms,
  flexible_plans,
}: Props) => {
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

export const FlexiblePlans = ({
  flexible_plans,
  machine_templates,
  platforms,
}: Props) => {
  const { t } = useTranslation();

  const { defaultValueMT, cpus, rams, ssds } = useFlexiblePlans({
    flexible_plans,
    machine_templates,
    platforms,
  });

  const template_options = machine_templates.map((tm) => {
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

  const platforms_options = platforms.map((tm) => {
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

  return (
    <div className='section__bock border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-10'>
      <h4>{t('Flexible plan')}</h4>
      <div className='block-calculator h-full'>
        <div className='calculator_wrapper h-full flex items-stretch'>
          <div className='calculator__left h-full flex-[1.5] flex flex-col gap-7 mr-3 pr-2'>
            <div className='calculator__form-field flex items-center'>
              <label className='text-sm min-w-[10rem]' htmlFor=''>
                {t('Templates')}
              </label>
              <ReactSelector
                initialValue={template_options[defaultValueMT] || null}
                options={template_options}
              />
            </div>
            <div className='calculator__form-field flex items-center'>
              <label className='text-sm min-w-[10rem]' htmlFor=''>
                {t('Platforms')}
              </label>
              <ReactSelector isSearchable isMulti options={platforms_options} />
            </div>
            <div className='calculator__form-field flex items-center'>
              <label className='text-sm min-w-[10rem]' htmlFor=''>
                {t('RAM')}
              </label>
              <div className='custom-select w-full'>
                <DynamicInput
                  initValue={rams}
                  unit='GB'
                  textCenter={false}
                  textSize='text-normal'
                  withRange
                  stepValue={1}
                  minValue={1}
                  maxValue={48}
                />
              </div>
            </div>
            <div className='calculator__form-field flex items-center'>
              <label className='text-sm min-w-[10rem]' htmlFor=''>
                {t('CPU')}
              </label>
              <div className='custom-select w-full'>
                <DynamicInput
                  initValue={cpus}
                  unit='Core'
                  textCenter={false}
                  textSize='text-normal'
                  withRange
                  stepValue={2}
                  minValue={1}
                  maxValue={16}
                />
              </div>
            </div>
            <div className='calculator__form-field flex items-center'>
              <label className='text-sm min-w-[10rem]' htmlFor=''>
                {t('SSD')}
              </label>
              <div className='custom-select w-full'>
                <DynamicInput
                  initValue={ssds}
                  unit='GB'
                  textCenter={false}
                  textSize='text-normal'
                  minValue={25}
                  stepValue={25}
                  maxValue={1000}
                />
              </div>
            </div>
          </div>
          <div className='calculator__right flex-1 flex flex-col items-center justify-between'>
            <div className='calc-price flex flex-col gap-3'>
              <h2>
                $ 10.1 <span className='text-sm font-normal'>/mo</span>
              </h2>
              <span className='price-hr'>$ 0.012/hr</span>
            </div>
            <div className='mt-auto'>
              <Button
                className='rounded-sm text-sm font-normal px-10 flex items-center justify-center'
                variant='outline'
              >
                Deploy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
