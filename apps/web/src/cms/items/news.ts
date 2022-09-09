import { CMS_MODELS } from '@/constant/cms';
import { DRTStatus, MDWithTranslation } from '@/types/directus';
import { directus_fetch } from '../fetch';

type TransField = {
  title: string;
  languages_code: string;
  summary: string;
  content: string;
};

type Field = {
  label: string;
  tags: string[];
  image: string;
};

export type MDNews = MDWithTranslation<TransField> & Field & DRTStatus;

export type MDTopbarNew = Pick<DRTStatus, 'id' | 'date_created' | 'status'> &
  MDWithTranslation<Pick<TransField, 'title' | 'languages_code'>>;

export function getMDTopbarNews() {
  return directus_fetch.getPublishedDatas<MDTopbarNew>(CMS_MODELS.news, {
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

export function getMDNews() {
  console.log('get news');
}
