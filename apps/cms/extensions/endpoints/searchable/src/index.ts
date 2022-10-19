import { defineEndpoint } from "@directus/extensions-sdk";

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

  // Platforms searchable
  const platform_handler: Handler = (req, res, next) => {
    const platformService = new ItemsService("Platforms", {
      schema: req.schema,
      accountability: req.accountability,
    });

    platformService
      .readByQuery({
        sort: ["name"],
        fields: ["id", "name"],
        limit: 15,
        filter: {
          name: {
            _contains: req.query.q,
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
});
