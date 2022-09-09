import { CMS_MODELS } from '@/constant/cms';
import { directus_fetch } from '../fetch';

export type MDLanguage = {
  code: string;
  icon_flag: string;
  name: string;
  direction: string;
  link?: string;
};

export async function getMDLanguages(access_token: string | null) {
  const res = await directus_fetch.getDatas<MDLanguage>(CMS_MODELS.languages);

  access_token &&
    directus_fetch.hasFiles(access_token!, res.data!, 'icon_flag', [15, 15]);

  return res;
}
