import { CMS_MODELS } from '@/app/constant/cms';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithAssets,
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
    id: true,
    collection: true,
    item: {
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
  },
  ...qWithTranslations({
    title: true,
    summary: true,
    markdown_content: true,
  }),
  ...qWithStatus,
};

const listNews_gql_query = (query?: string, offset = 0, limit = 9) =>
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
          limit,
          offset,
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

export async function getGqlListNewsQuery(
  query?: string,
  offset = 0,
  limit = 9
) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{ news: MDNews[] }>(
    listNews_gql_query(query, offset, limit)
  );

  if (!res.data || !access_token) return res;

  qWithAssets(access_token, res.data.news || [], 'image');

  return res;
}

const newsBySlugQuery = jsonToGraphQLQuery({
  query: {
    __variables: {
      slug: 'String!',
    },
    news: {
      __args: qWithPublishedStatus<{
        slug: string;
      }>({
        limit: 1,
        filter: { slug: { _eq: new VariableType('slug') } },
      }),
      ...newsQuery,
    },
  },
});

export async function getGqlNewsBySlug(slug: string) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{ news: MDNews[] }>(
    newsBySlugQuery,
    { slug }
  );

  if (!res.data || !access_token) return res;
  const news = res.data.news || [];
  qWithAssets(access_token, news, 'image');
  news.forEach(($new) => {
    const author = $new.author ? $new.author[0].item : undefined;
    author && qWithAsset(access_token, author, 'image');
  });

  return res;
}
