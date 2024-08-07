import { defineEndpoint } from "@directus/extensions-sdk";
import type { Filter } from "@directus/sdk";
import { CMS_MODELS } from "@packages/contracts";

export default defineEndpoint((router, { services, exceptions }) => {
  const { ItemsService } = services;
  const { ServiceUnavailableException } = exceptions;
  const $common = (options = {}) => ({
    sort: ["name"],
    fields: ["id", "name"],
    limit: 15,
    filter: {
      status: {
        _in: ["published"],
      },
    },
    ...options,
  });

  const searchable_handler = (
    service_name: string,
    common: any = {},
    searchable = "name"
  ) => {
    return function handler(req: any, res: any, next: any) {
      const service = new ItemsService(service_name, {
        schema: req.schema,
        accountability: req.accountability,
      });

      service
        .readByQuery({
          ...common,
          filter: <Filter<{ [x: string]: any }>>{
            [searchable]: {
              _contains: req.query.q,
            },
            ...(common?.filter || {}),
          },
        })
        .then((results: Array<any>) => {
          results.forEach((item) => {
            item.ref = `${item[searchable]} -- ${item.id}`;
          });
          res.json(results);
        })
        .catch((error: { message: any }) => {
          return next(new ServiceUnavailableException(error.message));
        });
    };
  };

  router.get(
    "/platforms",
    searchable_handler(CMS_MODELS.platforms, $common({ filter: {} }))
  );
  router.get(
    "/platform-categories",
    searchable_handler(CMS_MODELS.platform_categories, $common({ filter: {} }))
  );
  router.get(
    "/page-sections-categories",
    searchable_handler(
      CMS_MODELS.generics.page_sections_categories,
      $common({ filter: {} })
    )
  );
  router.get(
    "/page-sections",
    searchable_handler(
      CMS_MODELS.generics.page_sections,
      $common({ sort: ["label"], fields: ["id", "label"], filter: {} }),
      "label"
    )
  );
});
