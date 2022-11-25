import { CMS_MODELS } from '@apps/contracts';
import { getDirectusClient } from '../directus';
import { GuestQuestion } from '@apps/contracts';

type Md = typeof CMS_MODELS.guest_questions;
export async function storeGuestQuestion(data: GuestQuestion) {
  const directus = await getDirectusClient();

  return directus
    .items<Md, GuestQuestion>(CMS_MODELS.guest_questions)
    .createOne(data);
}
