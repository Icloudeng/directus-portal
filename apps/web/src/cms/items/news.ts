import { CMS_MODELS } from '@packages/contracts';
import { MDNews } from '@packages/contracts';
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

  const res = await directus.graphql.items<{ news: MDNews[] }>(
    listNews_gql_query(query, offset, limit)
  );

  if (!res.data) return res;

  qWithAssets({
    items: res.data.news || [],
    imageKey: 'image',
  });

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

  const res = await directus.graphql.items<{ news: MDNews[] }>(
    newsBySlugQuery,
    { slug }
  );

  if (!res.data) return res;

  const news = res.data.news || [];

  qWithAssets({
    items: news,
    imageKey: 'image',
  });

  news.forEach((_new) => {
    if (_new.author) {
      qWithAsset({
        item: _new.author,
        imageKey: 'image',
      });
    }
  });

  return res;
}
