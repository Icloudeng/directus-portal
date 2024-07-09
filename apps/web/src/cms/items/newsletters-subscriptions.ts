import { CMS_MODELS } from '@packages/contracts';
import { NewslettersSubscription } from '@packages/contracts';

import { getDirectusClient } from '../directus';

type Md = typeof CMS_MODELS.newsletters_subscriptions;
export async function storeNewslettersSubscription(
  data: NewslettersSubscription
) {
  const directus = await getDirectusClient();
  return directus
    .items<Md, NewslettersSubscription>(CMS_MODELS.newsletters_subscriptions)
    .createOne(data);
}
