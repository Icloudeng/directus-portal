// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const meta = require("./meta");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: meta.title,
  tagline: meta.tagline,
  url: meta.url,
  baseUrl: "/documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: meta.favicon,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: meta.organizationName, // Usually your GitHub org/user name.
  projectName: meta.projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: meta.i18n,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Icloudeng",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          // {
          //   href: "https://www.coding.icloudeng.xyz",
          //   label: "Site",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Icloudeng, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
