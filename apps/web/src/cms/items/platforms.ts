import { CMS_MODELS } from '@packages/contracts';
import { MDPlatform, MDPlatformCategory } from '@packages/contracts';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';

import { getDirectusClient } from '../directus';
import {
  qWithAssets,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';

const platformQuery = {
  __variables: {
    query: 'String!',
  },
  platforms: {
    __aliasFor: CMS_MODELS.platforms,
    __args: qWithPublishedStatus<{ name: string }>({
      filter: {
        name: {
          _contains: new VariableType('query'),
        },
      },
      limit: 15,
    }),
    name: true,
    slug: true,
    icon: qWithQueryAsset({
      width: true,
      height: true,
    }),
    category: {
      id: true,
    },
    icon_svg: true,
    ram: true,
    cpu: true,
    ssd: true,
    link: true,
    external_link: true,
    ...qWithTranslations({
      description: true,
    }),
    version: true,
    ...qWithStatus,
  },
};

const gql_query = jsonToGraphQLQuery({
  query: platformQuery,
});

export async function searchGqlPlatforms(query: string) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{ platforms: MDPlatform[] }>(
    gql_query,
    { query }
  );
  if (!res.data) return res;

  if (access_token) {
    const { platforms } = res.data;
    qWithAssets(access_token, platforms, 'icon');
  }

  return res;
}

// Get Platform by slug url

const gql_query_slug = jsonToGraphQLQuery({
  query: {
    __variables: {
      slug: 'String!',
    },
    platforms: {
      ...platformQuery.platforms,
      __args: qWithPublishedStatus<{ slug: string }>({
        filter: { slug: { _eq: new VariableType('slug') } },
        limit: 1,
      }),
      category: {
        id: true,
        name: true,
        ...qWithTranslations({
          name: true,
          description: true,
        }),
      },
      ...qWithTranslations({
        description: true,
        documentation: true,
      }),
    },
  },
});

export async function getGqlPlatformsBySlug(slug: string) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{ platforms: MDPlatform[] }>(
    gql_query_slug,
    { slug }
  );
  if (!res.data) return res;

  if (access_token) {
    const { platforms } = res.data;
    qWithAssets(access_token, platforms, 'icon');
  }

  return res;
}

// Get Platform by categories

const pg_gql_query = jsonToGraphQLQuery({
  query: {
    categories: {
      __aliasFor: CMS_MODELS.platform_categories,
      __args: qWithPublishedStatus(),
      name: true,
      ...qWithTranslations({
        name: true,
        description: true,
      }),
      icon: qWithQueryAsset(),
      icon_svg: true,
      platforms: {
        ...platformQuery.platforms,
        __args: qWithPublishedStatus(),
        __aliasFor: undefined,
      },
      ...qWithStatus,
    },
  },
});

export async function getGqlPlatformsByCategories() {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{
    categories: MDPlatformCategory[];
  }>(pg_gql_query);

  if (!res.data) {
    return undefined;
  }

  if (access_token) {
    const { categories } = res.data;
    qWithAssets(access_token, categories, 'icon');
    categories.forEach((cat) => {
      cat.platforms && qWithAssets(access_token, cat.platforms, 'icon');
    });
  }

  return res?.data;
}
