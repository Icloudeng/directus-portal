/** @type {import('@docusaurus/types').Config} */
let meta = {};

try {
  //   meta = require("./meta.json");
} catch (error) {
  console.error(error);
}

const locales = meta.i18n?.locales || [];

const config = {
  title: meta.title || "Icloudeng",
  tagline: meta.tagline || "",
  url: meta.url || "https://icloudeng.com",
  favicon: meta.favicon || "img/favicon.ico",
  organizationName: meta.organizationName || "icloudeng",
  projectName: "icloudeng-portal",
  i18n: {
    defaultLocale: "en",
    locales: locales.length > 0 && locales.includes("en") ? locales : ["en"],
    localeConfigs: {
      en: {
        label: "English",
      },
      fr: {
        label: "Français",
      },
    },
  },
  navbar: {
    title: "Icloudeng",
    logo: {
      alt: "My Site Logo",
      src: "img/logo.svg",
    },
    items: [
      {
        type: "doc",
        docId: "intro",
        position: "left",
        label: "Docs",
      },
      // {
      //   href: "https://www.coding.icloudeng.xyz",
      //   label: "Site",
      //   position: "right",
      // },
    ],
  },
};

module.exports = config;
