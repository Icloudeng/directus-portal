import { CMS_MODELS } from '@/constant/cms';
import { DRTStatus } from '@/types/directus';
import { directus_fetch } from '../fetch';

export type MDTopbarLinks = {
  id: string;
} & DRTStatus;

export async function getMDTopbarLinks() {
  const res = await directus_fetch.getDatas<MDTopbarLinks>(
    CMS_MODELS.topbar_links
  );

  return res;
}
