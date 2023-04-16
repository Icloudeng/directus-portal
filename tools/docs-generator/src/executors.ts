import { spawn, exec } from "node:child_process";
import * as readline from "node:readline/promises";
import { promisify } from "node:util";
import generateAll from "../generate";
import {
  IN_PROD,
  DOCS_APP_PM2_NAME,
  DOCS_APP_PATH,
  RELOAD_PM2_APP_WHEN_DEV,
} from "./constants";
import which from "which";
import { Logger } from "./logger";
import {
  createLogQuery,
  getCompanyDetailsQuery,
  getFooterQuery,
} from "./cms/queries";
import { generateDetailContent, generateFooterContent } from "./docusaurus";
import {
  unlinkPagesAndNamespacesFilesContent,
  storeDetailContent,
  storeFooterContent,
} from "./docusaurus/files";
import { executorQueue } from "./queue";
import { DataPayload, DataType } from "@apps/docs-pubsub";
import type { DRTStatus } from "@apps/contracts";
import utils from "./utils";

const execAsync = promisify(exec);

type Status = Pick<DRTStatus, "status">["status"];

export const hasPageDeletion = (type: DataType, data: DataPayload) => {
  const hasStatusChange =
    data.event.endsWith("update") &&
    data.payload.status &&
    (["archived", "draft"] as Status[]).includes(data.payload.status);

  return (
    ["namespaces", "pages"].includes(type) &&
    (data.event.endsWith("delete") || hasStatusChange)
  );
};

/**
 * Restart the pm2 app proccess but if the build has succeed
 */
async function restartPm2DocsAppProcess() {
  const pm2Resolved = await which("pm2").catch(console.error);
  if (!pm2Resolved) return;

  /**
   * Restart pm2 id {DOCS_APP_PM2_NAME}
   */
  const { stdout, stderr } = await execAsync(
    `${pm2Resolved} reload ${DOCS_APP_PM2_NAME}`
  );

  /**
   * Store errors and log them
   */
  if (stderr) {
    createLogQuery({
      log: stderr,
      type: "error",
    });

    Logger.error(stderr);
    return;
  }

  /**
   * Process succeed
   */
  Logger.info(`PM2 ${DOCS_APP_PM2_NAME} restarted`);
  Logger.info(stdout);
}

/**
 * Build the docs app after exectors,
 * Rebuild with PNPM and turbo (https://turborepo.org/)
 */
async function docsBuilder(storeLogs = true) {
  Logger.info("=== Start building docs app ===");

  const pnpmResolved = await which("pnpm");
  const pnpm = spawn(pnpmResolved, ["build"], {
    cwd: DOCS_APP_PATH,
  });

  const rl = readline.createInterface({
    input: pnpm.stdout,
    output: pnpm.stdin,
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

  rl.on("line", (stream) => {
    console.log(stream);
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
       * Close the readline.Interface instance and relinquishes control over the input and output streams
       */
      rl.close();

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
       * Restart the pm2 process if no error
       */
      !hasError && restartPm2DocsAppProcess();

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
async function execGenerateAllEvent(type: DataType, data: DataPayload) {
  /**
   * Handle delete event
   */
  if (hasPageDeletion(type, data)) {
    await unlinkPagesAndNamespacesFilesContent(
      data.keys && data.keys.length > 0 ? data.keys : data.key ? [data.key] : []
    );
  }

  /**
   * Regenerate all docs files
   */
  await generateAll(false);

  if (IN_PROD && executorQueue.pending === 0) {
    /**
     * Build docs app
     */
    await docsBuilder();
  }

  /* This code block checks if the environment variable `RELOAD_PM2_APP_WHEN_DEV` is truthy and the
`IN_PROD` variable is falsy. If both conditions are met, it waits for 1 millisecond using the
`utils.wait` function and then restarts the PM2 process for the docs app using the
`restartPm2DocsAppProcess` function. This is likely used for development purposes to automatically
reload the app when changes are made. */
  if (RELOAD_PM2_APP_WHEN_DEV && !IN_PROD) {
    await utils.wait(1);
    await restartPm2DocsAppProcess();
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

  if (IN_PROD && executorQueue.pending === 0) {
    /**
     * Build docs app
     */
    await docsBuilder();
  }

  if (RELOAD_PM2_APP_WHEN_DEV && !IN_PROD) {
    await utils.wait(1);
    await restartPm2DocsAppProcess();
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

  if (IN_PROD && executorQueue.pending === 0) {
    /**
     * Build docs app
     */
    await docsBuilder();
  }

  if (RELOAD_PM2_APP_WHEN_DEV && !IN_PROD) {
    await utils.wait(1);
    await restartPm2DocsAppProcess();
  }
}

export { execGenerateAllEvent, execFooterEvent, execDetailEvent };
