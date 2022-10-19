import { MDFixedPlan, MDMachineTemplate } from '@/cms/items/types';
import { ReactSelector } from '@/components/ui/ReactSelector';

type Props = {
  fixed_plans: MDFixedPlan[];
  machine_templates: MDMachineTemplate[];
};

export const FixedPlans = ({ fixed_plans, machine_templates }: Props) => {
  return (
    <div className='section__bock border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-10'>
      <h4>Fixed plan</h4>
      <div className='block-calculator h-full'>
        <div className='calculator_wrapper h-full flex items-stretch'>
          <div className='calculator__left w-full h-full flex-[1.5] flex flex-col gap-7 mr-3 pr-2'>
            <div className='headerForm flex max-w-xl  space-x-5'>
              <div className='left flex-1 space-y-1'>
                <span className='text-sm'>Template</span>
                <ReactSelector />
              </div>
            </div>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='border-b-2 border-slate-200'>
                  <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                    <div className='py-3 pr-2'>RAM</div>
                  </th>
                  <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                    <div className='py-3 pr-2'>CPU</div>
                  </th>
                  <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                    <div className='py-3 pr-2'>SSD</div>
                  </th>
                  <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                    <div className='py-3 pr-2'>Bandwidth*</div>
                  </th>
                  <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                    <div className='py-3 pr-2'>$/hr</div>
                  </th>
                  <th className='sticky top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0'>
                    <div className='py-3 pr-2'>$/mo</div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
                <tr>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    1 Core
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    25 GB
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    50 Mbps
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $ 0.006/hr
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 text-xs leading-6 whitespace-nowrap border-b border-slate-200'
                  >
                    $4.1/mo
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 font-mono font-bold text-xs text-center leading-6 text-primary-500 whitespace-nowrap border-b border-slate-200 cursor-pointer'
                  >
                    Deploy
                  </td>
                </tr>
              </tbody>
            </table>
            <span className='text-sm'>
              *Data transfer is free and unlimited.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
