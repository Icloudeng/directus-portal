import { CMS_MODELS } from '@/app/constant/cms';
import { getDirectusClient } from '../directus';
import { GuestQuestion } from './types';

type Md = typeof CMS_MODELS.guest_questions;
export async function storeGuestQuestion(data: GuestQuestion) {
  const directus = await getDirectusClient();

  return directus
    .items<Md, GuestQuestion>(CMS_MODELS.guest_questions)
    .createOne(data);
}
