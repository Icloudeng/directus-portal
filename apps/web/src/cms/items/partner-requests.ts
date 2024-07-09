import type { PartnerRequest } from '@packages/contracts';
import { CMS_MODELS } from '@packages/contracts';

import { getDirectusClient } from '../directus';

type Md = typeof CMS_MODELS.partners_requests;

export async function storePartnerRequest(data: PartnerRequest) {
  const directus = await getDirectusClient();

  return directus
    .items<Md, PartnerRequest>(CMS_MODELS.partners_requests)
    .createOne(data);
}
