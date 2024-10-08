import { CMS_MODELS } from '@packages/contracts';
import { MDBlog } from '@packages/contracts';
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query';

import { newsQuery } from './news';
import { getDirectusClient } from '../directus';
import {
  qWithAsset,
  qWithAssets,
  qWithPublishedStatus,
  qWithTranslations,
} from '../gql-query';

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

  const res = await directus.graphql.items<{ blogs: MDBlog[] }>(
    listBlog_gql_query(query, offset, limit)
  );

  if (!res.data) return res;

  qWithAssets({
    items: res.data.blogs || [],
    imageKey: 'image',
  });

  return res;
}

const newsBySlugQuery = jsonToGraphQLQuery({
  query: {
    __variables: {
      slug: 'String!',
    },
    blogs: {
      ...newsQuery,
      __aliasFor: CMS_MODELS.blog,
      __args: qWithPublishedStatus<{
        slug: string;
      }>({
        limit: 1,
        filter: { slug: { _eq: new VariableType('slug') } },
      }),
    },
  },
});

export async function getGqlBlogBySlug(slug: string) {
  const directus = await getDirectusClient();

  const res = await directus.graphql.items<{ blogs: MDBlog[] }>(
    newsBySlugQuery,
    { slug }
  );

  if (!res.data) return res;

  const blogs = res.data.blogs || [];

  qWithAssets({
    items: blogs,
    imageKey: 'image',
  });

  blogs.forEach((blog) => {
    if (blog.author) {
      qWithAsset({
        item: blog.author,
        imageKey: 'image',
      });
    }
  });

  return res;
}
