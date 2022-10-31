import { CMS_MODELS } from '@/app/constant/cms';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAssets,
  qWithPublishedStatus,
  qWithQueryAsset,
  qWithStatus,
} from '../gql-query';
import { MDPlatform } from './types';

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
    icon_svg: true,
    icon: qWithQueryAsset(),
    ram: true,
    cpu: true,
    ssd: true,
    link: true,
    external_link: true,
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
