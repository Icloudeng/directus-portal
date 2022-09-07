import { CMS_MODELS } from '@/constant/cms';
import { directus_fetch } from '../fetch';

type MDLanguages = {
  code: string;
  icon: string;
  name: string;
  direction: string;
};

export async function getMDLanguages() {
  const res = await directus_fetch.getDatas<MDLanguages>(CMS_MODELS.languages);

  return res.data;
}
