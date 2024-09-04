import { ID } from '@directus/sdk';
import { CMS_MODELS } from '@packages/contracts';
import { M2APageSection, M2APageSectionReusable } from '@packages/contracts';
import { MDHomePageHero } from '@packages/contracts';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithQueryAsset,
  qWithStatus,
  qWithTranslations,
} from '../gql-query';
import { pageSectionQuery } from '../page-sections';
import { pageSectionsAdapters } from '../page-sections-adapters';

const gql_query = jsonToGraphQLQuery({
  query: {
    [CMS_MODELS.home_hero]: {
      ...qWithStatus,
      id: false, // single object|collection
      disposition: true,
      image: qWithQueryAsset(),
      images: {
        id: true,
        directus_files_id: qWithQueryAsset(),
      },
      ...qWithTranslations({
        title: true,
        description: true,
        trailing_titles: true,
        page_title: true,
        buttons: true,
      }),
    },
    [CMS_MODELS.home_sections]: {
      id: false,
      sections: pageSectionQuery,
    },
  },
});

export type QHomeHeroQueriesType<PS = false> = {
  [CMS_MODELS.home_hero]: MDHomePageHero;
  [CMS_MODELS.home_sections]: {
    id: ID;
    sections: PS extends false ? M2APageSectionReusable[] : M2APageSection[];
  };
};

export async function getGqlHomeQueries() {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<QHomeHeroQueriesType>(gql_query);

  if (!res.data) {
    return res;
  }

  const { HomeHero, HomeSections } = res.data;

  if (HomeHero) {
    qWithAsset({
      item: HomeHero,
      imageKey: 'image',
    });

    (HomeHero.images || []).forEach((image) =>
      qWithAsset({
        item: image,
        imageKey: 'directus_files_id',
      })
    );
  }

  await pageSectionsAdapters(HomeSections);

  return res;
}
