import Button from '@/components/ui/buttons/Button';
import { DynamicInput } from '@/components/ui/DynamicInput';
import { HasSvgOrImage, ReactSelector } from '@/components/ui/ReactSelector';
import { useTranslation } from 'next-i18next';
import {
  FlexiblePlansProps,
  getMachineTemplateOptions,
  getPlatformOptions,
  useFlexiblePlans,
} from './hooks';

export const FlexiblePlans = ({
  flexible_plans,
  machine_templates,
  platforms,
}: FlexiblePlansProps) => {
  const { t } = useTranslation();

  const { defaultValueMT, cpus, rams, ssds } = useFlexiblePlans({
    flexible_plans,
    machine_templates,
    platforms,
  });

  const { options: template_options } =
    getMachineTemplateOptions(machine_templates);

  const platforms_options = getPlatformOptions(platforms);

  return (
    <div className='section__bock max-w-[90vw] mx-auto'>
      <div className='border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-5 xs:p-10'>
        <h4 className='mb-7 ss:mb-0'>{t('Flexible plan')}</h4>
        <div className='block-calculator h-full'>
          <div className='calculator_wrapper h-full flex flex-col-reverse ss:flex-row items-stretch gap-12 ss:gap-0'>
            <div className='calculator__left h-full ss:flex-[1.9] sm:flex-[1.5] flex flex-col gap-7 xs:mr-3 xs:pr-2'>
              <div className='calculator__form-field flex items-center'>
                <label
                  className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'
                  htmlFor=''
                >
                  {t('Templates')}
                </label>
                <ReactSelector
                  initialValue={template_options[defaultValueMT] || null}
                  options={template_options}
                />
              </div>
              <div className='calculator__form-field flex items-center'>
                <label
                  className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'
                  htmlFor=''
                >
                  {t('Platforms')}
                </label>
                <ReactSelector
                  isSearchable
                  isMulti
                  options={platforms_options}
                />
              </div>
              <div className='calculator__form-field flex items-center'>
                <label
                  className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'
                  htmlFor=''
                >
                  {t('RAM')}
                </label>
                <div className='custom-select w-full'>
                  <DynamicInput
                    initValue={rams}
                    unit='GB'
                    textCenter={false}
                    textSize='text-xs ss:text-sm'
                    withRange
                    stepValue={1}
                    minValue={1}
                    maxValue={48}
                  />
                </div>
              </div>
              <div className='calculator__form-field flex items-center'>
                <label
                  className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'
                  htmlFor=''
                >
                  {t('CPU')}
                </label>
                <div className='custom-select w-full'>
                  <DynamicInput
                    initValue={cpus}
                    unit='Core'
                    textCenter={false}
                    textSize='text-xs ss:text-sm'
                    withRange
                    stepValue={2}
                    minValue={1}
                    maxValue={16}
                  />
                </div>
              </div>
              <div className='calculator__form-field flex items-center'>
                <label
                  className='text-xs xs:text-sm min-w-[5rem] xs:min-w-[7rem] sd:min-w-[10rem]'
                  htmlFor=''
                >
                  {t('SSD')}
                </label>
                <div className='custom-select w-full'>
                  <DynamicInput
                    initValue={ssds}
                    unit='GB'
                    textCenter={false}
                    textSize='text-xs ss:text-sm'
                    minValue={25}
                    stepValue={25}
                    maxValue={1000}
                  />
                </div>
              </div>
            </div>
            <div className='calculator__right ss:flex-1 flex flex-row ss:flex-col items-start ss:items-center justify-between'>
              <div className='calc-price flex flex-col gap-3'>
                <h2>
                  $ 10.1 <span className='text-sm font-normal'>/mo</span>
                </h2>
                <span className='price-hr'>$ 0.012/hr</span>
              </div>
              <div className='ss:mt-auto'>
                <Button
                  className='rounded-sm text-sm font-normal xs:px-10 flex items-center justify-center'
                  variant='outline'
                >
                  Deploy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
