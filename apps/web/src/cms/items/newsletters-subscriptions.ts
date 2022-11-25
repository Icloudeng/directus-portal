import { CMS_MODELS } from '@/app/constant/cms';
import { getDirectusClient } from '../directus';
import { NewslettersSubscription } from './types';

type Md = typeof CMS_MODELS.newsletters_subscriptions;
export async function storeNewslettersSubscription(
  data: NewslettersSubscription
) {
  const directus = await getDirectusClient();
  return directus
    .items<Md, NewslettersSubscription>(CMS_MODELS.newsletters_subscriptions)
    .createOne(data);
}
