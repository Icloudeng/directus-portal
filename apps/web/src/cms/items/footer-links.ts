import { CMS_MODELS } from '@/constant/cms';
import { DRTStatus, MDWithTranslation } from '@/types/directus';
import { ID } from '@directus/sdk';
import { directus_fetch } from '../fetch';

type MDFooterLink = {};

export async function getMDFooterLinks() {
  const res = directus_fetch.getDatas(CMS_MODELS.footer_links);

  return res;
}
