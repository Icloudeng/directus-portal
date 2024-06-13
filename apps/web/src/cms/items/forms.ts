import { CMS_MODELS, MDFormOptions, MDForms } from '@apps/contracts';

import { getDirectusClient } from '../directus';

type Md = typeof CMS_MODELS.form_options;

export async function getFormOptions() {
  const directus = await getDirectusClient();

  return directus
    .items<Md, MDFormOptions>(CMS_MODELS.form_options)
    .readByQuery()
    .then((res) => res.data as unknown as MDFormOptions | undefined);
}

export async function storeForm(body: { group: string; data: any }) {
  const directus = await getDirectusClient();

  return directus
    .items<typeof CMS_MODELS.forms, MDForms>(CMS_MODELS.forms)
    .createOne({
      ...body,
      status: 'published',
    });
}
