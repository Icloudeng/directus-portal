/** @type {import('docs-generator').MetaContent} */
let meta = {};

try {
  meta = require("./meta.json");
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
    localeConfigs: meta.i18n?.localeConfigs || {
      en: { label: "English" },
    },
  },
  navbar: {
    title: meta.navbar?.title || "Icloudeng",
    logo: {
      src: "img/logo.svg",
      width: 32,
      height: 32,
      ...(meta.navbar?.logo || {}),
    },
    items:
      meta.navbar?.items && meta.navbar?.items.length > 0
        ? meta.navbar.items
        : [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
            },
          ],
  },
  footer: {
    links: meta.footer?.links || [],
    copyright:
      meta.footer?.copyright ||
      `Copyright © ${new Date().getFullYear()} Icloudeng, Inc. Built with Docusaurus.`,
  },
  sidebars:
    Object.keys(meta.sidebars || {}).length > 0 ? meta.sidebars : undefined,
};

module.exports = config;
