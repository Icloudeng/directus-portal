import { MDMachineTemplate, MDPlatform } from '@packages/contracts';
import throttle from 'lodash/throttle';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import Button from '@/components/ui/buttons/Button';
import { DynamicInput } from '@/components/ui/DynamicInput';
import { ReactAsyncSelect, ReactSelector } from '@/components/ui/ReactSelector';

import { useSharedData } from '@/app/store';

import {
  FlexiblePlansProps,
  getMachineTemplateOptions,
  getPlatformOptions,
  useFlexiblePlans,
} from './hooks';

export const FlexiblePlans = ({
  flexible_plans,
  machine_templates,
}: FlexiblePlansProps) => {
  const { t } = useTranslation();
  const { CompanyDetails } = useSharedData();
  const currency = CompanyDetails?.currency;

  const { options: template_options, default: defaultM } =
    getMachineTemplateOptions(machine_templates);

  const defaultMT = template_options[defaultM] || null;

  const {
    cpus,
    rams,
    ssds,
    options,
    onCpusChange,
    onRamsChange,
    onSsdsChange,
    onMtChange,
    onPlatformsSelectChange,
    hourly_cost,
    true_monthly_cost,
    monthly_cost,
  } = useFlexiblePlans({
    flexible_plans,
    defaultMT: defaultMT?.mt || null,
  });

  const onMtChangeV = useCallback(
    ({ mt }: { mt: MDMachineTemplate }) => {
      onMtChange(mt);
    },
    [onMtChange]
  );

  return (
    <div className='section__bock max-w-[90vw] mx-auto'>
      <div className='border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-5 xs:p-10'>
        <h4 className='mb-7 ss:mb-0'>{t('Flexible plan')}</h4>
        <div className='block-calculator h-full'>
          <div className='calculator_wrapper h-full flex flex-col-reverse ss:flex-row items-stretch gap-12 ss:gap-0'>
            <div className='calculator__left h-full ss:flex-[1.9] sm:flex-[1.5] flex flex-col gap-7 xs:mr-3 xs:pr-2'>
              <div className='calculator__form-field flex items-center'>
                <label className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'>
                  {t('Templates')}
                </label>
                <ReactSelector
                  initialValue={defaultMT}
                  onChange={onMtChangeV}
                  options={template_options}
                />
              </div>

              <div className='calculator__form-field custom-select flex items-center'>
                <Link
                  href='/-/platforms/apps'
                  target='_blank'
                  className='text-xs xs:text-sm inline-flex items-center min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'
                >
                  {t('App')} {t('Platforms')}
                  <span className='ml-1'>
                    <FiExternalLink />
                  </span>
                </Link>
                <PlatformsSelect onChange={onPlatformsSelectChange} />
              </div>
              <div className='calculator__form-field flex items-center'>
                <label className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'>
                  {t('RAM')}
                </label>
                <div className='custom-select w-full'>
                  <DynamicInput
                    initValue={rams}
                    unit={options.ram.unit}
                    textCenter={false}
                    textSize='text-xs ss:text-sm'
                    withRange
                    stepValue={options.ram.stepValue}
                    minValue={options.ram.minValue}
                    maxValue={options.ram.maxValue}
                    onChange={onRamsChange}
                  />
                </div>
              </div>
              <div className='calculator__form-field flex items-center'>
                <label className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'>
                  {t('CPU')}
                </label>
                <div className='custom-select w-full'>
                  <DynamicInput
                    initValue={cpus}
                    unit={options.cpu.unit}
                    textCenter={false}
                    textSize='text-xs ss:text-sm'
                    withRange
                    stepValue={options.cpu.stepValue}
                    minValue={options.cpu.minValue}
                    maxValue={options.cpu.maxValue}
                    onChange={onCpusChange}
                  />
                </div>
              </div>
              <div className='calculator__form-field flex items-center'>
                <label className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'>
                  {t('SSD')}
                </label>
                <div className='custom-select w-full'>
                  <DynamicInput
                    initValue={ssds}
                    unit={options.ssd.unit}
                    textCenter={false}
                    withRange
                    textSize='text-xs ss:text-sm'
                    stepValue={options.ssd.stepValue}
                    minValue={options.ssd.minValue}
                    maxValue={options.ssd.maxValue}
                    onChange={onSsdsChange}
                  />
                </div>
              </div>
            </div>
            <div className='calculator__right ss:flex-1 flex flex-row ss:flex-col items-start ss:items-center justify-between'>
              <div className='calc-price flex flex-col gap-3'>
                <h3 className='h2'>
                  {currency} {monthly_cost}{' '}
                  <span className='text-sm font-normal'>/{t('mo')}</span>
                </h3>
                {monthly_cost !== true_monthly_cost && (
                  <span className='opacity-60 line-through text-sm'>
                    {currency} {true_monthly_cost} /{t('mo')}
                  </span>
                )}
                <span className='price-hr'>
                  {currency} {hourly_cost}/{t('hr')}
                </span>
              </div>
              <div className='ss:mt-auto'>
                <Button
                  className='rounded-sm text-sm font-normal xs:px-10 flex items-center justify-center'
                  variant='outline'
                >
                  {t('Deploy')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function PlatformsSelect({
  onChange,
}: {
  onChange?: (platforms: MDPlatform[]) => any;
}) {
  const loadDatas = useCallback(async (inputValue: string) => {
    const platforms = await fetch(`/api/platforms?q=${inputValue}`).then(
      (res) => res.json()
    );

    if (!platforms) return [];

    return getPlatformOptions(platforms);
  }, []);

  const usePlatformChangeV = useCallback(
    (values: any) => {
      const $values = values as { platform: MDPlatform }[];
      onChange && onChange($values.map((v) => v.platform));
    },
    [onChange]
  );

  return (
    <ReactAsyncSelect
      cacheOptions
      isMulti
      onChange={usePlatformChangeV}
      loadOptions={throttle(loadDatas, 200)}
      defaultOptions
    />
  );
}
