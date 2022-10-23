import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { CMS_MODELS } from '@/constant/cms';
import { getDirectusClient } from '../directus';
import { qWithPublishedStatus } from '../gql-query';
import { M2APageSection, pageSectionItemsQuery } from '../page-sections';

const { generics } = CMS_MODELS;

const gql_query = jsonToGraphQLQuery({
  query: {
    __variables: {
      reusable_sections: '[String]!',
      reusable_section_categories: '[String]!',
    },
    [generics.page_sections]: {
      ...pageSectionItemsQuery.PageSections,
      __typeName: undefined,
      category: true,
      __args: qWithPublishedStatus<{
        id: string;
        category: string;
        [x: string]: any;
      }>({
        filter: {
          status: {
            _in: ['published', 'archived'],
          },
          _or: [
            {
              id: {
                _in: new VariableType('reusable_sections') as any,
              },
            },
            {
              category: {
                _in: new VariableType('reusable_section_categories') as any,
              },
            },
          ],
        },
      }),
    },
  },
});

type PageSectionType = {
  [generics.page_sections]: M2APageSection['item'][];
};
/**
 * This must be called at getInitialProps function
 */
export async function getGqlPageSections(
  reusable_sections: string[],
  reusable_section_categories: string[]
) {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<PageSectionType>(gql_query, {
    reusable_sections,
    reusable_section_categories,
  });

  return res.data;
}
