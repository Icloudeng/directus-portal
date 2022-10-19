import { CMS_MODELS } from '@/constant/cms';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import {
  pageSectionPublished,
  pageSectionQuery,
  pageSectionsWithAssets,
  pageSectionWithPlansPricing,
} from '../page-sections';
import { MDPage } from './types';

const gql_query = jsonToGraphQLQuery({
  query: {
    __variables: {
      request_pathname: 'String!',
    },
    [CMS_MODELS.pages]: {
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
    },
  },
});

export type QDynamicPagesType = {
  [CMS_MODELS.pages]: [MDPage | undefined];
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

  if (page) {
    qWithAsset(access_token, page, 'image');
    pageSectionPublished(page);
    pageSectionsWithAssets(access_token, page.sections);
    await pageSectionWithPlansPricing(page);
  }

  return res;
}
