import { ST_GuestQuestion, STemplates_Props } from '@packages/contracts';

import { ReachOut } from '../shared/reach-out/ReachOut';

export function ST_GuestQuestionsFC(_: STemplates_Props<ST_GuestQuestion>) {
  return (
    <div className='flex justify-center'>
      <ReachOut />
    </div>
  );
}
