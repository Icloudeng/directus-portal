import "./src/env";
import { Logger } from "./src/logger";
import { createLogQuery, getItemsQuery } from "./src/cms/queries";
import {
  generateNamespacesContent,
  generateNavbarContent,
  initDocsFiles,
  storeNamespacesContent,
  storeNavbarContent,
  generateFooterContent,
  generateI18nContent,
  storeI18nContent,
  storeFooterContent,
  storeSidebarsContent,
  generateDetailContent,
  storeDetailContent,
} from "./src/docusaurus";

const generator = async () => {
  Logger.info("=============== Start Generating =================");

  /**
   * Query all data items from cms
   */
  const data = await getItemsQuery().catch(console.error);
  if (!data) {
    return Logger.warn("Cannot find any data from query");
  }

  /**
   * If company_details not exits then no need to go further
   */
  if (!data.company_details) {
    const log = "Company details must be set from cms to complete the process";
    await createLogQuery({ type: "warning", log });

    Logger.warn(log);
    return;
  }

  /**
   * Init docs app files
   */
  const languages = data.languages;

  await initDocsFiles(languages);
  Logger.info("=== Initialized docs app files ===");

  // ============================ Generate content and store them ===========================

  /**
   * Generate detail content and store it
   */
  const detailContent = await generateDetailContent(data.company_details);

  await storeDetailContent(detailContent);
  Logger.info("=== detail content generated and stored ===");

  /**
   * Generate i18n content and store it
   */
  const i18nContent = await generateI18nContent(languages);

  await storeI18nContent(i18nContent);
  Logger.info("=== I18n content generated and stored ===");

  /**
   * Generate footer content and store it
   */
  if (data.footer) {
    const footerContent = await generateFooterContent(data.footer, languages);

    await storeFooterContent(footerContent);
    Logger.info("=== Footer content generated and stored ===");
  }

  /**
   * Generate namespaces content
   */
  const namespacesContent = await generateNamespacesContent(
    data.namespaces,
    data.pages,
    languages
  );

  /**
   * Generate navbar content and store it
   */

  const navbarContent = await generateNavbarContent({
    namespaces: data.namespaces,
    languages,
    companyDetails: data.company_details,
    namespaceLinks: namespacesContent.links,
  });

  await storeNavbarContent(navbarContent);
  Logger.info("=== Navbar content generated and stored ===");

  /**
   * Store sidebars contents
   */
  await storeSidebarsContent(namespacesContent.sidebars);

  /**
   * Generate navbar content and store it
   */
  await storeNamespacesContent(namespacesContent, languages);
  Logger.info("=== Namespaces content generated and stored ===");
};

/**
 * Since the function generator will be used with other files,
 * we need to limit the autocall of the function generator when importing this file
 */
if (process.argv[2] === "--exec") {
  generator();
}

export default generator;
