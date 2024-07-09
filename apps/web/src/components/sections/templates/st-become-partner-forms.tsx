import { ST_BecomePartnerForm, STemplates_Props } from '@packages/contracts';

import { BecomePartner } from '../shared/become-partner/BecomePartner';

export function ST_BecomePartnerFormsFC(
  _: STemplates_Props<ST_BecomePartnerForm>
) {
  return <BecomePartner />;
}
