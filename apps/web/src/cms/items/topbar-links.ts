import { CMS_MODELS } from '@/constant/cms';
import { DRTStatus, MDWithTranslation } from '@/types/directus';
import { directus_fetch } from '../fetch';

export type MDTopbarLinks = MDWithTranslation<{ name: string }> & {
  id: string;
  url: string;
  external: boolean;
} & DRTStatus;

export function getMDTopbarLinks() {
  return directus_fetch.getPublishedDatas<MDTopbarLinks>(
    CMS_MODELS.topbar_links
  );
}
