import { STemplates_Props, ST_BecomePartnerForm } from '@/cms/page-sections';
import { BecomePartner } from '../become-partner/BecomePartner';

export function ST_BecomePartnerFormsFC(
  _: STemplates_Props<ST_BecomePartnerForm>
) {
  return <BecomePartner />;
}
