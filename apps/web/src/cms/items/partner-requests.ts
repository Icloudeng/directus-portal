import { CMS_MODELS } from '@apps/contracts';
import { getDirectusClient } from '../directus';
import type { PartnerRequest } from '@apps/contracts';

type Md = typeof CMS_MODELS.partners_requests;
export async function storePartnerRequest(data: PartnerRequest) {
  const directus = await getDirectusClient();

  return directus
    .items<Md, PartnerRequest>(CMS_MODELS.partners_requests)
    .createOne(data);
}
