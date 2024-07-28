import { CMS_MODELS } from '@packages/contracts';
import { MDPage } from '@packages/contracts';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';

import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import { pageSectionQuery } from '../page-sections';
import { pageSectionsAdapters } from '../page-sections-adapters';

const pagesQuery = {
  __args: qWithPublishedStatus<MDPage>({
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
  sections: pageSectionQuery,
  image: qWithQueryAsset({
    width: true,
    height: true,
    type: true,
  }),
  ...qWithTranslations({
    title: true,
    description: true,
  }),
  ...qWithStatus,
};

const gql_query = jsonToGraphQLQuery({
  query: {
    __variables: {
      request_pathname: 'String!',
    },
    [CMS_MODELS.pages]: pagesQuery,
  },
});

const gql_all_pages = jsonToGraphQLQuery({
  query: {
    [CMS_MODELS.pages]: {
      ...pagesQuery,
      __args: qWithPublishedStatus(),
    },
  },
});

export type QDynamicPagesType<PS = false> = {
  [CMS_MODELS.pages]: [MDPage<PS> | undefined];
};

export async function getGqlDynamicPages(request_pathname: string) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<QDynamicPagesType>(gql_query, {
    request_pathname: request_pathname.trim(),
  });

  if (!res.data || !access_token) {
    return res;
  }
  const { Pages } = res.data;

  const page = Pages[0];

  if (page) qWithAsset(access_token, page, 'image');
  await pageSectionsAdapters(page, access_token);

  return res;
}

export async function getGqlAllPages() {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<QDynamicPagesType>(gql_all_pages);

  if (!res.data || !access_token) {
    return res;
  }
  const { Pages } = res.data;

  Pages.map((page) => {
    if (page) qWithAsset(access_token, page, 'image');
    return page;
  });

  return res;
}
