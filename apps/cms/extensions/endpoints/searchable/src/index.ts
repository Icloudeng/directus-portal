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
  const common = {
    sort: ["name"],
    fields: ["id", "name"],
    limit: 15,
  };
  // Platforms searchable
  const platform_handler: Handler = (req, res, next) => {
    const platformService = new ItemsService("Platforms", {
      schema: req.schema,
      accountability: req.accountability,
    });

    platformService
      .readByQuery({
        ...common,
        filter: <Filter<{ [x: string]: any }>>{
          name: {
            _contains: req.query.q,
          },
          status: {
            _in: ["published"],
          },
        },
      })
      .then((results: Array<any>) => {
        results.forEach((item) => {
          item.ref = `${item.name} -- ${item.id}`;
        });
        res.json(results);
      })
      .catch((error: { message: any }) => {
        return next(new ServiceUnavailableException(error.message));
      });
  };

  const platform_categories_handler: Handler = (req, res, next) => {
    const platformCategoryService = new ItemsService("PlatformCategories", {
      schema: req.schema,
      accountability: req.accountability,
    });

    platformCategoryService
      .readByQuery({
        ...common,
        filter: <Filter<{ [x: string]: any }>>{
          name: {
            _contains: req.query.q,
          },
          status: {
            _in: ["published"],
          },
        },
      })
      .then((results: Array<any>) => {
        results.forEach((item) => {
          item.ref = `${item.name} -- ${item.id}`;
        });
        res.json(results);
      })
      .catch((error: { message: any }) => {
        return next(new ServiceUnavailableException(error.message));
      });
  };

  router.get("/platforms", platform_handler);
  router.get("/platform-categories", platform_categories_handler);
});
