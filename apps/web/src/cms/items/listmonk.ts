import { CMS_MODELS } from '@apps/contracts';
import { MDListmonk } from '@apps/contracts';

import { getDirectusClient } from '../directus';

type Md = typeof CMS_MODELS.listmonk;

export async function getListmonkConfig() {
  const directus = await getDirectusClient();
  const res = await directus
    .items<Md, MDListmonk>(CMS_MODELS.listmonk)
    .readByQuery({ limit: 1 });

  if (!res.data) return;

  return Array.isArray(res.data) ? res.data[0] : res.data;
}
