import {
  CMS_MODELS,
  DRTQueryT,
  DRTStatus,
  MDDCFooter,
  MDDCNamespace,
  MDDCPage,
  QueryWithTranslation,
  MDQueryFields,
  MDDCLog,
} from "@apps/contracts";
import { Filter, Sort } from "@directus/sdk";
import { jsonToGraphQLQuery } from "json-to-graphql-query";
import { getDirectusClient } from "./directus";
import type { CompanyDetail, MDLang } from "./type";

type Query<T> = {
  fields?: MDQueryFields<T>;
  limit?: number;
  sort?: Sort<T>;
  filter?: Filter<T>;
};

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

function qWithPublishedStatus<T>(option: Query<T> & { offset?: number } = {}) {
  return {
    ...option,
    filter: {
      status: {
        _in: ["published"],
      },
      ...(option.filter || {}),
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

const allItemsQueryObject = {
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
      __args: qWithPublishedStatus(),
      ...qWithStatus,
      label: true,
      url: true,
      ...qWithTranslations({
        name: true,
      }),
      pages: {
        __args: qWithPublishedStatus(),
        ...pageQuery,
      },
    },
    pages: {
      __aliasFor: CMS_MODELS.dc_pages,
      __args: qWithPublishedStatus(),
      ...pageQuery,
    },
    footer: {
      __aliasFor: CMS_MODELS.dc_footer,
      ...qWithStatus,
      id: false, // single object|collection
      status: false,
      copyright: true,
      links: {
        __args: qWithPublishedStatus(),
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
};

const allItemsQuery = jsonToGraphQLQuery(allItemsQueryObject);

type QueryItems = {
  languages: MDLang[];
  company_details?: CompanyDetail;
  namespaces: MDDCNamespace[];
  pages: MDDCPage[];
  footer?: MDDCFooter;
};

/**
 * Query all items at one with graphql
 *
 * @returns
 */
export async function getItemsQuery() {
  const directus = await getDirectusClient();
  const res = await directus.graphql.items<QueryItems>(allItemsQuery);

  if (res.data) {
    res.data.namespaces = res.data.namespaces.filter(
      (nsp) => nsp.pages.length > 0
    );
  }
  return res.data;
}

/**
 * Create new cms log query
 *
 * @param data
 */
export async function createLogQuery(data: Pick<MDDCLog, "log" | "type">) {
  const directus = await getDirectusClient();

  await directus
    .items<typeof CMS_MODELS.dc_logs, MDDCLog>("DC_Logs")
    .createOne(data);
}

// ---------------------------- Company details ----------------------- //

const companyDetailsQuery = jsonToGraphQLQuery({
  query: {
    company_details: allItemsQueryObject.query["company_details"],
    languages: allItemsQueryObject.query["languages"],
  },
});

/**
 * Get company details query
 */
export async function getCompanyDetailsQuery() {
  const directus = await getDirectusClient();
  const res = await directus.graphql.items<
    Pick<QueryItems, "company_details" | "languages">
  >(companyDetailsQuery);

  return res.data;
}

// ---------------------------- Footer ----------------------- //

const footerQuery = jsonToGraphQLQuery({
  query: {
    footer: allItemsQueryObject.query["footer"],
    languages: allItemsQueryObject.query["languages"],
  },
});

/**
 * Get dc footer query
 */
export async function getFooterQuery() {
  const directus = await getDirectusClient();
  const res = await directus.graphql.items<
    Pick<QueryItems, "footer" | "languages">
  >(footerQuery);

  return res.data;
}
