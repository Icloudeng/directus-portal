import { useTranslation } from 'next-i18next';

import { DynamicInput } from '@/components/ui/DynamicInput';

import { MDPlansComparison } from '@/cms/items/types';

import { CheckCircle } from '../../ui/CheckCircle';

export const PlansComparisons = ({
  plans_comparisons,
}: {
  plans_comparisons: MDPlansComparison[];
}) => {
  const { t } = useTranslation()
  return (
    <div className="section__bock max-w-[90vw] ss:max-w-[80vw] sm:max-w-[90vw] mx-auto">
      <div className='w-full border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-5 xs:p-10 overflow-x-auto'>
        <div className='block-calculator'>
          <div className='calculator_wrapper'>
            <div className='calculator__left w-full'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='border-b-2 border-slate-200'>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='flex items-center py-3 pr-2 gap-5'>
                        <div className=' dark:border-slate-400/20'>
                          <span>Number of servers</span>
                        </div>
                        <div className='max-w-[7rem] '>
                          <DynamicInput
                            initValue={1}
                            unit=''
                            inputHeight='h-[2.3rem]'
                            minValue={1}
                            maxValue={12}
                          />
                        </div>
                      </div>
                    </th>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='py-3 text-center pr-2'>{t("Basic")}</div>
                    </th>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='py-3 text-center pr-2'>{t("Extended")}</div>
                    </th>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='py-3 text-center pr-2'>{t("Pro")}</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Price
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      $ 40/mo
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      $ 100/mo
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      $ 170/mo
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Subscription activation cost
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      $ 20/mo
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      $ 50/mo
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      $ 85/mo
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Reaction time
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      30 min
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      30 min
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      30 min
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Software installation and setup
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Updates installation within one major release
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Backup setup
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      24/7 incident management
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Dedicated account manager
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Periodical proactive audit of security perimeter
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Security logs monitoring
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      Proactive and reactive management of security
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                  <tr>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      infrastructure improvements
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle />
                    </td>
                    <td
                      translate='no'
                      className='py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'
                    >
                      <CheckCircle isChecked />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
