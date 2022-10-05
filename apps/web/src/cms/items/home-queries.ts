import { CMS_MODELS } from '@/constant/cms';
import { ID } from '@directus/sdk';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import { qWithAsset, qWithQueryAsset, qWithStatus, qWithTranslations } from '../gql-query';
import { M2APageSection, pageSectionPublished, pageSectionQuery, pageSectionsWithAssets } from '../page-sections';
import { MDHomePageHero } from './types';

const gql_query = jsonToGraphQLQuery({
    query: {
        [CMS_MODELS.home_hero]: {
            disposition: true,
            image: qWithQueryAsset(),
            images: {
                id: true,
                directus_files_id: qWithQueryAsset()
            },
            ...qWithTranslations({
                title: true,
                description: true,
                trailing_titles: true,
            }),
            ...qWithStatus,
        },
        [CMS_MODELS.home_sections]: {
            id: true,
            sections: pageSectionQuery,
        },
    },
});

export type QHomeHeroQueriesType = {
    [CMS_MODELS.home_hero]: MDHomePageHero;
    [CMS_MODELS.home_sections]: {
        id: ID;
        sections: M2APageSection[];
    };
};

export async function getGqlHomeQueries(
    access_token: string | undefined | null
) {
    const directus = await getDirectusClient();

    const res = await directus.graphql.items<QHomeHeroQueriesType>(gql_query);

    if (!res.data || !access_token) return res;
    const { HomeHero, HomeSections } = res.data;

    if (HomeHero) {
        qWithAsset(access_token, HomeHero, 'image')
        HomeHero.images.forEach((image) => qWithAsset(access_token, image, 'directus_files_id'))
    };

    if (HomeSections) {
        pageSectionPublished(HomeSections);
        pageSectionsWithAssets(access_token, HomeSections.sections);
    }

    return res;
}
