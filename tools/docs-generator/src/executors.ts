import { spawn } from "node:child_process";
import generateAll from "../generate";
import { DOCS_APP_NAME, IN_PROD, PROJECT_ROOT_PATH } from "./constants";
import which from "which";
import { Logger } from "./logger";
import {
  createLogQuery,
  getCompanyDetailsQuery,
  getFooterQuery,
} from "./cms/queries";
import {
  generateDetailContent,
  generateFooterContent,
  storeDetailContent,
  storeFooterContent,
} from "./docusaurus";

/**
 * Build the docs app after exectors,
 * Rebuild with PNPM and turbo (https://turborepo.org/)
 */
async function docsBuilder(storeLogs = true) {
  Logger.info("=== Start building docs app ===");

  const pnpmResolved = await which("pnpm");
  const pnpm = spawn(pnpmResolved, ["build", `--filter=${DOCS_APP_NAME}`], {
    cwd: PROJECT_ROOT_PATH,
  });

  let error: null | string = null;
  let stdData = "";

  pnpm.stdout.on("data", (data) => {
    stdData += data;
  });

  pnpm.on("data", (data) => {
    stdData += data;
  });

  pnpm.on("error", (err) => {
    error = err.message;
  });

  return new Promise<{ status: "ok" | "error" }>((resolve) => {
    pnpm.on("close", (code) => {
      const hasError = error !== null || (code !== 0 && code !== null);
      /**
       * Resolve promse with a status
       */
      resolve({
        status: hasError ? "error" : "ok",
      });

      /**
       * Store logs on cms
       */
      if (storeLogs) {
        createLogQuery({
          log: stdData,
          type: hasError ? "error" : "info",
        });
      }

      /**
       * log error if existsF
       */
      hasError && Logger.error(error);

      /**
       * Log when end child processF
       */
      Logger.info(`child process close all stdio with code ${code}`);
    });
  });
}

/**
 * This function will regenerate all docs data and build for productionF
 */
async function execLanguagesEvent() {
  await generateAll();

  if (IN_PROD) {
    /**
     * Build docs app
     */
    await docsBuilder();
  }
}

/**
 * Generate Footer data and build for production
 */
async function execFooterEvent() {
  const footerQuery = await getFooterQuery();
  if (!footerQuery?.footer || footerQuery.languages.length == 0) {
    return;
  }
  // Generate footer content
  const footerContent = await generateFooterContent(
    footerQuery?.footer,
    footerQuery?.languages
  );

  // Store generated content
  await storeFooterContent(footerContent);

  if (IN_PROD) {
    /**
     * Build docs app
     */
    await docsBuilder();
  }
}

/**
 * Generate detail content and build for production
 */
async function execDetailEvent() {
  const companyDetailsQuery = await getCompanyDetailsQuery();

  if (!companyDetailsQuery?.company_details) {
    return;
  }

  // Generate detail content
  const detailContent = await generateDetailContent(
    companyDetailsQuery.company_details
  );

  await storeDetailContent(detailContent);

  if (IN_PROD) {
    /**
     * Build docs app
     */
    await docsBuilder();
  }
}

export { execLanguagesEvent, execFooterEvent, execDetailEvent };
