import "../src/env";
import { Logger } from "../src/logger";
import { getItemsQuery } from "../src/cms/queries";
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
} from "../src/docusaurus";

(async () => {
  Logger.info("=============== Started =================");
  const data = await getItemsQuery();
  if (!data) {
    return Logger.warn("Cannot find any data from query");
  }
  /** Init docs app files */
  const languages = data.languages;
  await initDocsFiles(languages);

  Logger.info("=== Initialized docs app files ===");

  /** Generate i18n content and store it  */
  const i18nContent = await generateI18nContent(languages);
  await storeI18nContent(i18nContent);

  Logger.info("=== I18n content generated and stored ===");

  /** Generate footer content and store it  */
  if (data.footer) {
    const footerContent = await generateFooterContent(data.footer, languages);
    await storeFooterContent(footerContent);

    Logger.info("=== Footer content generated and stored ===");
  }

  /** Generate namespaces content  */
  const namespacesContent = await generateNamespacesContent(
    data.namespaces,
    data.pages,
    languages
  );

  if (data.company_details) {
    /** Generate navbar content and store it  */
    const navbarContent = await generateNavbarContent({
      namespaces: data.namespaces,
      languages,
      companyDetails: data.company_details,
      namespaceLinks: namespacesContent.links,
    });

    await storeNavbarContent(navbarContent);
    Logger.info("=== Navbar content generated and stored ===");
  }

  // Store sidebars contents */
  await storeSidebarsContent(namespacesContent.sidebars);

  /** Generate navbar content and store it  */
  await storeNamespacesContent(namespacesContent, languages);

  Logger.info("=== Namespaces content generated and stored ===");
})();
