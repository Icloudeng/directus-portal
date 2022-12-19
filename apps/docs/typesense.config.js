module.exports = {
  typesenseCollectionName: "icloudeng",

  typesenseServerConfig: {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: parseInt(process.env.TYPESENSE_PORT, 10),
        protocol: process.env.TYPESENSE_PROTOCOL || "http",
      },
    ],
    apiKey: "typesense-docsearch-scraper", // must be the same as the port set on docker-compose.yml
  },

  typesenseSearchParameters: {},

  contextualSearch: true,
};
