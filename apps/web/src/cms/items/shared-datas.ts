import {
  CMS_MODELS,
  MDChatwoot,
  MDLayout,
  MDMatomo,
  MDNavbarButton,
} from '@apps/contracts';
import {
  MDCompanyDetail,
  MDFooterLink,
  MDLanguage,
  MDNavbarLink,
  MDTopbarLink,
  MDTopbarNew,
  NavbarLinkSubmenu,
} from '@apps/contracts';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

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
    [CMS_MODELS.layout]: {
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      site_background_color: true,
      show_topbar: true,
      show_footer_contacts: true,
      show_footer_links: true,
      show_footer_mailing_subscription: true,
      bottom_footer: true,
      show_top_footer: true,
      footer_type: true,
      ...qWithTranslations({
        titles: true,
        buttons: true,
      }),
    },
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
      slug: true,
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
      ...qWithStatus,
      id: false, // single object|collection
      logo_sm: {
        __aliasFor: 'logo',
        ...qWithQueryAsset(),
      },
      logo: qWithQueryAsset(), // should come after logo_sm
      image: qWithQueryAsset(),
      company_name: true,
      website_title: true,
      support_email: true,
      email: true,
      website: true,
      currency: true,
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
        __args: qWithPublishedStatus<NavbarLinkSubmenu>({}),
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
    [CMS_MODELS.navbar_buttons]: {
      __args: qWithPublishedStatus(),
      label: true,
      url: true,
      variant: true,
      external: true,
      ...qWithTranslations({
        button_text: true,
      }),
      ...qWithStatus,
    },
    [CMS_MODELS.matomo]: {
      ...qWithStatus,
      id: false, // single object|collection
      base_url: true,
      site_id: true,
    },
    [CMS_MODELS.chatwoot]: {
      ...qWithStatus,
      id: false, // single object|collection
      base_url: true,
      website_token: true,
    },
  },
});

export type QShareDataType = {
  [CMS_MODELS.languages]: MDLanguage[];
  [CMS_MODELS.topbar_links]: MDTopbarLink[];
  [CMS_MODELS.navbar_buttons]: MDNavbarButton[];
  [CMS_MODELS.news]: MDTopbarNew[];
  [CMS_MODELS.footer_links]: MDFooterLink[];
  [CMS_MODELS.navbar_links]: MDNavbarLink[];
  [CMS_MODELS.company_details]?: MDCompanyDetail;
  [CMS_MODELS.matomo]?: MDMatomo;
  [CMS_MODELS.layout]?: MDLayout;
  [CMS_MODELS.chatwoot]?: MDChatwoot;
};

/**
 * This must be called at getInitialProps function
 */
export async function getGqlSharedData() {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<QShareDataType>(gql_query);

  if (!res.data || !access_token) return res;

  const { languages, CompanyDetails } = res.data;

  languages?.forEach((lang) => qWithAsset(access_token, lang, 'icon_flag'));

  if (CompanyDetails) {
    qWithAsset(access_token, CompanyDetails, 'logo');
    qWithAsset(access_token, CompanyDetails, 'logo_sm', [128, 128]);
    qWithAsset(access_token, CompanyDetails, 'image');
    CompanyDetails?.socials?.forEach((social) =>
      qWithAsset(access_token, social, 'icon', [50, 50])
    );
  }

  return res;
}
