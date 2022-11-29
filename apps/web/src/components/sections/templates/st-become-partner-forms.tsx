import { ST_BecomePartnerForm, STemplates_Props } from '@apps/contracts';

import { BecomePartner } from '../shared/become-partner/BecomePartner';

export function ST_BecomePartnerFormsFC(
  _: STemplates_Props<ST_BecomePartnerForm>
) {
  return <BecomePartner />;
}
