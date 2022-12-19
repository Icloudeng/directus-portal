// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");
const meta = require("./meta");
const math = require("remark-math");
const katex = require("rehype-katex");
const typesense = require("./typesense.config");

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
          remarkPlugins: [
            // @ts-ignore
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
            math,
          ],
          rehypePlugins: [katex],
        },

        pages: {
          // @ts-ignore
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-live-codeblock",
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-search-typesense",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: meta.navbar,
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: "dark",
        ...meta.footer,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense,
    }),
};

module.exports = config;
