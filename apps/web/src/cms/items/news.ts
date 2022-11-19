import { CMS_MODELS } from '@/app/constant/cms';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithOption,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import { MDNews } from './types';

export const newsQuery = {
  __aliasFor: CMS_MODELS.news,
  label: true,
  tags: true,
  slug: true,
  image: qWithQueryAsset({
    width: true,
    height: true,
  }),
  author: {
    __on: {
      __typeName: CMS_MODELS.authors,
      __args: qWithPublishedStatus(),
      name: true,
      image: qWithQueryAsset(),
      twitter_link: true,
      github_link: true,
      facebook_link: true,
      instagram_link: true,
      ...qWithStatus,
    },
  },
  ...qWithTranslations({
    title: true,
    summary: true,
    markdown_content: true,
  }),
  ...qWithStatus,
};

const listNews_gql_query = (query?: string) =>
  jsonToGraphQLQuery({
    __variables: {
      search: 'String',
    },
    query: {
      news: {
        ...newsQuery,
        __args: qWithPublishedStatus<{
          label: string;
          date_created: string;
          translations: any;
        }>({
          sort: ['-date_created'],
          filter: query?.trim()
            ? {
                translations: {
                  title: {
                    _contains: query.trim(),
                  },
                },
              }
            : {},
        }),
        author: false,
        ...qWithTranslations({
          title: true,
          summary: true,
        }),
      },
    },
  });

export async function getGqlListNewsQuery(query?: string) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{ news: MDNews[] }>(
    listNews_gql_query(query)
  );

  if (!res.data || !access_token) return res;

  return res;
}
