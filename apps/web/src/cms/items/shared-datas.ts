import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';

import { CMS_MODELS } from '@/constant/cms';

import {
  MDCompanyDetail,
  MDFooterLink,
  MDLanguage,
  MDNavbarLink,
  MDPageDetail,
  MDTopbarLink,
  MDTopbarNew,
  NavbarLinkSubmenu,
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
    [CMS_MODELS.navbar_links]: {
      __args: qWithPublishedStatus(),
      label: true,
      url: true,
      external: true,
      submenus: {
        __args: qWithPublishedStatus<NavbarLinkSubmenu>({
          sort: ['-featured', 'date_created'],
        }),
        featured: true,
        items: {
          __args: qWithPublishedStatus(),
          url: true,
          external: true,
          icon_svg: true,
          ...qWithTranslations({
            name: true,
            description: true,
          }),
          ...qWithStatus,
        },
        ...qWithTranslations({
          name: true,
        }),
        ...qWithStatus,
      },
      ...qWithTranslations({
        name: true,
      }),
      ...qWithStatus,
    },
    __variables: {
      request_pathname: 'String = "/"',
    },
    [CMS_MODELS.page_details]: {
      __args: qWithPublishedStatus<MDPageDetail>({
        limit: 1,
        filter: {
          url: {
            _eq: new VariableType('request_pathname'),
          },
        },
      }),
      label: true,
      url: true,
      keywords: true,
      theme_color: true,
      image: qWithQueryAsset({
        width: true,
        height: true,
      }),
      ...qWithTranslations({
        title: true,
        description: true,
      }),
      ...qWithStatus,
    },
  },
});

export type QShareDataType = {
  languages: MDLanguage[];
  TopbarLinks: MDTopbarLink[];
  News: MDTopbarNew[];
  FooterLinks: MDFooterLink[];
  CompanyDetails: MDCompanyDetail;
  NavbarLinks: MDNavbarLink[];
  Page_Details: MDPageDetail;
};

/**
 * This must be called at getInitialProps function
 */
export async function getGqlSharedData(
  access_token: string | undefined | null,
  request_pathname: string
) {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<QShareDataType>(gql_query, {
    request_pathname,
  });

  if (!res.data || !access_token) return res;

  const { languages, CompanyDetails, Page_Details } = res.data;

  languages?.forEach((lang) => qWithAsset(access_token, lang, 'icon_flag'));

  if (CompanyDetails) {
    qWithAsset(access_token, CompanyDetails, 'logo');
    CompanyDetails?.socials?.forEach((social) =>
      qWithAsset(access_token, social, 'icon', [50, 50])
    );
  }

  if (Page_Details) {
    res.data.Page_Details = (Page_Details as unknown as MDPageDetail[])[0];
    if (res.data.Page_Details) {
      qWithAsset(access_token, res.data.Page_Details, 'image');
    }
  }

  return res;
}
