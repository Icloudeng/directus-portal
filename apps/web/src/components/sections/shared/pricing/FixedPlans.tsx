import { useTranslation } from 'next-i18next';

import { ReactSelector } from '@/components/ui/ReactSelector';

import { MDFixedPlan, MDMachineTemplate } from '@/cms/items/types';
import { getMachineTemplateOptions } from './hooks';
import { useSharedData } from '@/app/store';
import { useMut } from '@/cms/mut';
import { useCallback, useState } from 'react';

type Props = {
  fixed_plans: MDFixedPlan[];
  machine_templates: MDMachineTemplate[];
};

export const FixedPlans = ({ fixed_plans, machine_templates }: Props) => {
  const { t } = useTranslation();
  const { CompanyDetails } = useSharedData();
  const currency = CompanyDetails?.currency;

  const { options: template_options, default: defaultValueMT } =
    getMachineTemplateOptions(machine_templates);

  const defaultM = template_options[defaultValueMT] || null;

  const [machine, setMachine] = useState<MDMachineTemplate | null>(
    defaultM?.mt || null
  );

  const onChangeSelect = useCallback((value: typeof template_options[0]) => {
    setMachine(value.mt);
  }, []);

  return (
    <div className='section__bock max-w-[90vw] mx-auto'>
      <div className='w-full border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-5 xs:p-10'>
        <h4>{t('Fixed plan')}</h4>
        <div className='block-calculator h-full'>
          <div className='calculator_wrapper h-full flex items-stretch'>
            <div className='calculator__left w-full h-full'>
              <div className='headerForm flex max-w-sm'>
                <div className='left flex-1 space-y-1'>
                  <span className='text-sm'>{t('Template')}</span>
                  <ReactSelector
                    onChange={onChangeSelect}
                    initialValue={defaultM}
                    options={template_options}
                  />
                </div>
              </div>

              <div className='overflow-x-auto py-4'>
                <table className='w-full text-left border-collapse'>
                  <thead>
                    <tr className='border-b-2 border-slate-100'>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{t('Plan')}</div>
                      </th>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{t('Type')}</div>
                      </th>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{t('RAM')}</div>
                      </th>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{t('CPU')}</div>
                      </th>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{t('SSD')}</div>
                      </th>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{currency}/hr</div>
                      </th>
                      <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                        <div className='py-3 pr-2'>{currency}/mo</div>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixed_plans.map((item) => {
                      return (
                        <Plan
                          key={item.id}
                          item={item}
                          machine={machine}
                          currency={currency}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Plan({
  item,
  currency,
  machine,
}: {
  item: MDFixedPlan;
  currency: string | undefined;
  machine: MDMachineTemplate | null;
}) {
  const { t } = useTranslation();
  const { translations, platforms, type, monthly_reduction } = useMut(item);
  const cost_hour = item.cost_hour + (machine?.cost_hour || 0);
  const true_cost_month = cost_hour * 730;

  const cost_month = true_cost_month * (((100 - monthly_reduction) * 1) / 100);

  return (
    <tr>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        {translations?.name && (
          <span className='mr-2 font-medium capitalize text-sm'>
            {translations.name}:
          </span>
        )}
        {platforms.map(({ platform }, i) => {
          return (
            <span key={i} className='p-1 bg-slate-100 mr-1'>
              {platform}
            </span>
          );
        })}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        <span
          className={`p-1 ${
            {
              basic: 'bg-slate-400',
              extended: 'bg-blue-400',
              pro: 'bg-green-400',
            }[type]
          } text-white rounded-md capitalize`}
        >
          {type}
        </span>
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        {item.ram} {t('GB')}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        {item.cpu} {t('Core')}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        {item.ssd} {t('GB')}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        {currency} {cost_hour}/hr
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-normal border-b border-slate-100'>
        {currency} {cost_month}/mo{' '}
        {cost_month !== true_cost_month && (
          <span className='opacity-60 line-through'>
            ({currency} {true_cost_month})
          </span>
        )}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-normal border-b border-slate-100 cursor-pointer'>
        {t('Deploy')}
      </td>
    </tr>
  );
}
