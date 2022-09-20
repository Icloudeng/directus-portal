import { CMS_MODELS } from '@/constant/cms';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import { MDHomePageHero } from './types';

const gql_query = jsonToGraphQLQuery({
  query: {
    [CMS_MODELS.home_hero]: {
      disposition: true,
      image: qWithQueryAsset(),
      ...qWithTranslations({
        title: true,
        description: true,
        trailing_titles: true,
      }),
      ...qWithStatus,
    },
  },
});

export type QHomeHeroType = { HomeHero: MDHomePageHero };

export async function getGqlHomeHero(access_token: string | undefined | null) {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<QHomeHeroType>(gql_query);

  if (!res.data || !access_token) return res;
  const { HomeHero } = res.data;

  if (HomeHero) qWithAsset(access_token, HomeHero, 'image');

  return res;
}
