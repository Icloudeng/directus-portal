import { CMS_MODELS } from '@packages/contracts';
import { GuestQuestion } from '@packages/contracts';

import { getDirectusClient } from '../directus';

type Md = typeof CMS_MODELS.guest_questions;
export async function storeGuestQuestion(data: GuestQuestion) {
  const directus = await getDirectusClient();

  return directus
    .items<Md, GuestQuestion>(CMS_MODELS.guest_questions)
    .createOne(data);
}
