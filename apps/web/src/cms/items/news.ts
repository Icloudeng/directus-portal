import { CMS_MODELS } from '@/constant/cms';
import { DRTStatus, MDWithTranslation } from '@/types/directus';
import { directus_fetch } from '../fetch';

type TransFields = {
  title: string;
  languages_code: string;
  summary: string;
  content: string;
};

type Fields = {
  label: string;
  tags: string[];
};

export type MDNews = MDWithTranslation<TransFields> & Fields & DRTStatus;

export type MDTopbarNews = Pick<DRTStatus, 'id' | 'date_created' | 'status'> &
  MDWithTranslation<Pick<TransFields, 'title' | 'languages_code'>>;

export function getMDTopbarNews() {
  return directus_fetch.getPublishedDatas<MDTopbarNews>(CMS_MODELS.news, {
    limit: 1,
    sort: ['-date_created'],
    fields: [
      'id',
      'translations',
      'translations.id',
      'translations.title',
      'translations.languages_code',
    ],
  });
}

export function getMDNews() {}
