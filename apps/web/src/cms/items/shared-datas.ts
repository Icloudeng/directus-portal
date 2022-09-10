import { CMS_MODELS } from '@/constant/cms';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithPublishedStatus,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import { MDFooterLink, MDLanguage, MDTopbarLink, MDTopbarNew } from './types';

const gql_query = jsonToGraphQLQuery({
  query: {
    [CMS_MODELS.languages]: {
      code: true,
      name: true,
      direction: true,
      icon_flag: {
        id: true,
      },
    },
    [CMS_MODELS.topbar_links]: {
      __args: qWithPublishedStatus(),
      label: true,
      url: true,
      external: true,
      ...qWithStatus,
      ...qWithTranslations({
        name: true,
      }),
    },
    [CMS_MODELS.news]: {
      __args: qWithPublishedStatus({
        limit: 1,
        sort: ['-date_created'],
      }),
      ...qWithStatus,
      ...qWithTranslations({
        title: true,
      }),
    },
    [CMS_MODELS.footer_links]: {
      __args: qWithPublishedStatus(),
      label: true,
      ...qWithStatus,
      ...qWithTranslations({
        name: true,
      }),
      links: {
        __args: qWithPublishedStatus(),
        url: true,
        external: true,
        ...qWithStatus,
        date_updated: false,
        ...qWithTranslations({
          name: true,
        }),
      },
    },
  },
});

export type QShareDataType = {
  languages: MDLanguage[];
  TopbarLinks: MDTopbarLink[];
  News: MDTopbarNew[];
  FooterLinks: MDFooterLink[];
};

export async function getGqlSharedData(
  access_token: string | undefined | null
) {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<QShareDataType>(gql_query);
  if (res.data && access_token) {
    const { languages } = res.data;
    languages.forEach((lang) => qWithAsset(access_token, lang, 'icon_flag'));
  }

  return res;
}
