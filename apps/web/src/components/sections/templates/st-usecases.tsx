import { ST_Usecase, STemplates_Props } from '@apps/contracts';
import dynamic from 'next/dynamic';

const TreeGrid = dynamic(() => import('@/components/ui/syncfusion/usecases'), {
  ssr: false,
});

export function ST_UsecasesFC({ items }: STemplates_Props<ST_Usecase>) {
  return (
    <div className='flex flex-wrap'>
      <TreeGrid />
    </div>
  );
}
