import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { CMS_MODELS } from '@/app/constant/cms';
import { getDirectusClient } from '../directus';
import { qWithPublishedStatus } from '../gql-query';
import { M2APageSection, pageSectionItemsQuery } from '../page-sections';

const { generics } = CMS_MODELS;

const gql_query = (rs: string[], rsc: string[]) => {
  const or = [];
  rs.length > 0 && or.push({ id: { _in: rs } });
  rsc.length > 0 && or.push({ category: { _in: rsc } });

  return jsonToGraphQLQuery({
    query: {
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
            _or: or,
          },
        }),
      },
    },
  });
};
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

  const res = await directus.graphql.items<PageSectionType>(
    gql_query(reusable_sections, reusable_section_categories),
    {
      reusable_sections,
      reusable_section_categories,
    }
  );

  return res.data;
}
