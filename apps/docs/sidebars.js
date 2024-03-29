const meta = require("./meta");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars =
  Object.keys(meta.sidebars || {}).length > 0
    ? meta.sidebars
    : {
        // By default, Docusaurus generates a sidebar from the docs folder structure
        docs: ["intro", "dc-modules"],
      };

module.exports = sidebars;
