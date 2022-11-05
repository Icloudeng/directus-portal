import { STemplates_Props, ST_GuestQuestion } from '@/cms/page-sections';
import { ReachOut } from '../shared/reach-out/ReachOut';

export function ST_GuestQuestionsFC(_: STemplates_Props<ST_GuestQuestion>) {
  return (
    <div className='flex justify-center'>
      <ReachOut />
    </div>
  );
}
