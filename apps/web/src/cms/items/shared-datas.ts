import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { CMS_MODELS } from '@/constant/cms';

import {
  MDCompanyDetail,
  MDFooterLink,
  MDLanguage,
  MDTopbarLink,
  MDTopbarNew,
} from './types';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';

const gql_query = jsonToGraphQLQuery({
  query: {
    [CMS_MODELS.languages]: {
      code: true,
      name: true,
      direction: true,
      icon_flag: qWithQueryAsset(),
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
    [CMS_MODELS.company_details]: {
      logo: qWithQueryAsset(),
      company_name: true,
      support_email: true,
      email: true,
      website: true,
      socials: {
        __args: qWithPublishedStatus(),
        social_name: true,
        icon: qWithQueryAsset(),
        link: true,
        ...qWithStatus,
      },
      addresses: {
        __args: qWithPublishedStatus(),
        address_name: true,
        phone: true,
        working_days: true,
        working_time: true,
        localization: true,
        ...qWithStatus,
      },
      ...qWithStatus,
      ...qWithTranslations({
        slogan: true,
      }),
    },
  },
});

export type QShareDataType = {
  languages: MDLanguage[];
  TopbarLinks: MDTopbarLink[];
  News: MDTopbarNew[];
  FooterLinks: MDFooterLink[];
  CompanyDetails: MDCompanyDetail;
};

export async function getGqlSharedData(
  access_token: string | undefined | null
) {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<QShareDataType>(gql_query);

  if (!res.data || !access_token) return res;

  const { languages, CompanyDetails } = res.data;

  languages?.forEach((lang) => qWithAsset(access_token, lang, 'icon_flag'));

  if (CompanyDetails) {
    qWithAsset(access_token, CompanyDetails, 'logo');
    CompanyDetails?.socials?.forEach((social) =>
      qWithAsset(access_token, social, 'icon', [50, 50])
    );
  }

  return res;
}
