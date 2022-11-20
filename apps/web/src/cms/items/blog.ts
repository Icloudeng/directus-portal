import { CMS_MODELS } from '@/app/constant/cms';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';
import { getDirectusClient } from '../directus';
import {
  qWithAssets,
  qWithPublishedStatus,
  qWithTranslations,
} from '../gql-query';
import { newsQuery } from './news';
import { MDBlog } from './types';

const listBlog_gql_query = (query?: string, offset = 0, limit = 9) =>
  jsonToGraphQLQuery({
    __variables: {
      search: 'String',
    },
    query: {
      blogs: {
        ...newsQuery,
        __aliasFor: CMS_MODELS.blog,
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

export async function getGqlListBlogQuery(
  query?: string,
  offset = 0,
  limit = 9
) {
  const directus = await getDirectusClient();
  const access_token = await directus.auth.token;

  const res = await directus.graphql.items<{ blogs: MDBlog[] }>(
    listBlog_gql_query(query, offset, limit)
  );

  if (!res.data || !access_token) return res;

  qWithAssets(access_token, res.data.blogs || [], 'image');

  return res;
}
