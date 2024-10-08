import {
  CMS_MODELS,
  MDChatwoot,
  MDFooterLayout,
  MDKroki,
  MDMatomo,
  MDNavbarButton,
  MDNavbarLayout,
  MDSiteLayout,
  MDTopbarLayout,
} from '@packages/contracts';
import {
  MDCompanyDetail,
  MDFooterLink,
  MDLanguage,
  MDNavbarLink,
  MDTopbarLink,
  MDTopbarNew,
  NavbarLinkSubmenu,
} from '@packages/contracts';
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
    [CMS_MODELS.site_layout]: {
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      primary_color: true,
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
    [CMS_MODELS.topbar_layout]: {
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      show_topbar: true,
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
    [CMS_MODELS.footer_layout]: {
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      show_footer_contacts: true,
      show_footer_links: true,
      show_footer_mailing_subscription: true,
      show_bottom_footer_payment_modes: true,
      show_bottom_footer_company_name: true,
      show_top_footer: true,
      footer_type: true,
      top_footer_translations: qWithTranslations({
        titles: true,
        buttons: true,
      }).translations,
      bottom_footer_translations: qWithTranslations({
        links: true,
      }).translations,
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
      favicon: qWithQueryAsset(),
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
    [CMS_MODELS.navbar_layout]: {
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      navbar_logo_width: true,
      navbar_logo_height: true,
      navbar_logo_rounded: true,
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
    [CMS_MODELS.kroki]: {
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      kroki_server: true,
    },
  },
});

export type QShareDataType = {
  [CMS_MODELS.languages]: MDLanguage[];
  [CMS_MODELS.topbar_links]: MDTopbarLink[];
  [CMS_MODELS.topbar_layout]?: MDTopbarLayout;
  [CMS_MODELS.news]: MDTopbarNew[];
  [CMS_MODELS.footer_links]: MDFooterLink[];
  [CMS_MODELS.footer_layout]?: MDFooterLayout;
  [CMS_MODELS.navbar_buttons]: MDNavbarButton[];
  [CMS_MODELS.navbar_links]: MDNavbarLink[];
  [CMS_MODELS.navbar_layout]?: MDNavbarLayout;
  [CMS_MODELS.company_details]?: MDCompanyDetail;
  [CMS_MODELS.matomo]?: MDMatomo;
  [CMS_MODELS.site_layout]?: MDSiteLayout;
  [CMS_MODELS.chatwoot]?: MDChatwoot;
  [CMS_MODELS.kroki]?: MDKroki;
};

/**
 * This must be called at getInitialProps function
 */
export async function getGqlSharedData() {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<QShareDataType>(gql_query);

  if (!res.data) return res;

  const { languages, CompanyDetails } = res.data;

  languages?.forEach((lang) => {
    qWithAsset({
      item: lang,
      imageKey: 'icon_flag',
    });
  });

  if (CompanyDetails) {
    qWithAsset({
      item: CompanyDetails,
      imageKey: 'logo',
    });

    qWithAsset({
      item: CompanyDetails,
      imageKey: 'favicon',
    });

    qWithAsset({
      item: CompanyDetails,
      imageKey: 'image',
    });

    CompanyDetails?.socials?.forEach((social) =>
      qWithAsset({
        item: social,
        imageKey: 'icon',
        preset: [50, 50],
      })
    );
  }

  return res;
}
