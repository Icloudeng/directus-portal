import {
  CMS_MODELS,
  DRTQueryT,
  DRTStatus,
  MDDCFooter,
  MDDCNamespace,
  MDDCPage,
  QueryWithTranslation,
} from "@apps/contracts";
import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { getDirectusClient } from "./directus";
import type { CompanyDetail, MDLang } from "./type";

const qWithStatus: DRTQueryT<DRTStatus> = {
  id: true,
  status: true,
  date_created: true,
  date_updated: true,
};

function qWithQueryAsset(moreFields: { [x: string]: boolean } = {}) {
  return {
    id: true,
    ...moreFields,
  };
}

function qWithTranslations<
  T extends { [x: string]: boolean | { [x: string]: boolean } }
>(fields: T): QueryWithTranslation<T> {
  return {
    translations: {
      id: true,
      languages_code: {
        code: true,
        name: true,
      },
      ...fields,
    },
  };
}

// ------------------------------ queries page --------------------------------- //

const pageQuery = {
  ...qWithStatus,
  parent_page: {
    id: true,
  },
  label: true,
  show_content: true,
  pages: { id: true },
  ...qWithTranslations({
    name: true,
    description: true,
    markdown_content: true,
  }),
};

const query = jsonToGraphQLQuery({
  query: {
    languages: {
      __aliasFor: CMS_MODELS.languages,
      code: true,
      name: true,
    },
    company_details: {
      __aliasFor: CMS_MODELS.company_details,
      ...qWithStatus,
      id: false, // single object|collection
      logo: qWithQueryAsset(),
      company_name: true,
      website_title: true,
      website: true,
    },
    namespaces: {
      __aliasFor: CMS_MODELS.dc_namespaces,
      ...qWithStatus,
      label: true,
      url: true,
      ...qWithTranslations({
        name: true,
      }),
      pages: pageQuery,
    },
    pages: {
      __aliasFor: CMS_MODELS.dc_pages,
      ...pageQuery,
    },
    footer: {
      __aliasFor: CMS_MODELS.dc_footer,
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      copyright: true,
      links: {
        ...qWithStatus,
        label: true,
        ...qWithTranslations({
          name: true,
        }),
        items: {
          ...qWithStatus,
          url: true,
          external: true,
          ...qWithTranslations({
            name: true,
          }),
        },
      },
    },
  },
});

type QueryItems = {
  languages: MDLang[];
  company_details?: CompanyDetail;
  namespaces: MDDCNamespace[];
  pages: MDDCPage[];
  footer?: MDDCFooter;
};

export async function getItemsQuery() {
  const directus = await getDirectusClient();
  const res = await directus.graphql.items<QueryItems>(query);

  if (res.data) {
    res.data.namespaces = res.data.namespaces.filter(
      (nsp) => nsp.pages.length > 0
    );
  }
  return res.data;
}
