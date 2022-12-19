module.exports = {
  typesenseCollectionName: "icloudeng",

  typesenseServerConfig: {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: 8108,
        protocol: "http",
      },
    ],
    apiKey: "typesense-docsearch-scraper", // must be the same as the port set on docker-compose.yml
  },

  typesenseSearchParameters: {},

  contextualSearch: true,
};
