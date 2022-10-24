import { defineEndpoint } from "@directus/extensions-sdk";
import type { Filter } from "@directus/sdk";

type Handler = (
  req: {
    query: any;
    schema: any;
    accountability: any;
  },
  res: { json: (arg0: any) => any },
  next: (arg0: any) => any
) => any;

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
    return function handler(req, res, next) {
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
    } as Handler;
  };

  router.get(
    "/platforms",
    searchable_handler("Platforms", $common({ filter: {} }))
  );
  router.get(
    "/platform-categories",
    searchable_handler("PlatformCategories", $common({ filter: {} }))
  );
  router.get(
    "/page-sections-categories",
    searchable_handler("PageSectionsCategories", $common({ filter: {} }))
  );
  router.get(
    "/page-sections",
    searchable_handler(
      "PageSections",
      $common({ sort: ["label"], fields: ["id", "label"], filter: {} }),
      "label"
    )
  );
});
