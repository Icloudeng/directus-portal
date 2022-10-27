import { useTranslation } from 'next-i18next';

import { MDPlansComparison } from '@/cms/items/types';

import { CheckCircle } from '../../ui/CheckCircle';
import { useMut } from '@/cms/mut';

export const PlansComparisons = ({
  plans_comparisons,
}: {
  plans_comparisons: MDPlansComparison[];
}) => {
  const { t } = useTranslation();
  return (
    <div className='section__bock max-w-[90vw] ss:max-w-[80vw] sm:max-w-[90vw] mx-auto'>
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
                          <span>{t('Plans Comparison')}</span>
                        </div>
                      </div>
                    </th>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='py-3 text-center pr-2'>{t('Basic')}</div>
                    </th>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='py-3 text-center pr-2'>
                        {t('Extended')}
                      </div>
                    </th>
                    <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                      <div className='py-3 text-center pr-2'>{t('Pro')}</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plans_comparisons.map((item) => {
                    return <Comparison key={item.id} item={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const hasCheck = (type: string) => type === 'checked' || type === 'unchecked';
function Comparison({ item }: { item: MDPlansComparison }) {
  const { translations, basic, extended, pro } = useMut(item);
  return (
    <tr>
      <td className='min-w-[5rem] py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'>
        {translations?.name}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'>
        {hasCheck(basic) && <CheckCircle isChecked={basic === 'checked'} />}
        {!hasCheck(basic) && <span>{basic}</span>}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'>
        {hasCheck(extended) && (
          <CheckCircle isChecked={extended === 'checked'} />
        )}
        {!hasCheck(extended) && <span>{extended}</span>}
      </td>
      <td className='min-w-[5rem] py-2 pr-2 text-xs text-center leading-6 whitespace-nowrap border-b border-slate-200'>
        {hasCheck(pro) && <CheckCircle isChecked={pro === 'checked'} />}
        {!hasCheck(pro) && <span>{pro}</span>}
      </td>
    </tr>
  );
}
