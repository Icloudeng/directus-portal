import "./src/env";
import debounce from "lodash/debounce";
import { connect, DataPayload, DataType } from "@apps/docs-pubsub";
import { Logger } from "./src/logger";
import { createLogQuery, getCompanyDetailsQuery } from "./src/cms/queries";
import {
  execFooterEvent,
  execGenerateAllEvent,
  hasPageDeletion,
} from "./src/executors";
import { IN_PROD, DEBOUNCE_EXECUTOR, IS_DOCKER } from "./src/constants";
import { executorQueue } from "./src/queue";

/**
 * --------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------
 * !IMPORTANT
 * For now we're not handle each event action particulary, means normaly we should handle them
 * by providing the correspond process or executor, for item delete, create, updateF
 * --------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------
 */

const client = connect(); // Init redis connection
const TIMEOUT_PROCESS = DEBOUNCE_EXECUTOR ? 2 * 60000 : 3000; // 2 minutes if DEBOUNCE, otherwise 3 seconds

async function main() {
  const subscriber = await client;

  IN_PROD && Logger.info("=============== PROD Observing =================");
  !IN_PROD && Logger.info("=============== DEV Observing =================");

  DEBOUNCE_EXECUTOR &&
    Logger.info("======== Running with DEBOUNCE_EXECUTOR ========");

  /**
   * Start observing
   */
  subscriber.subscribe(process);
}
main();

/**
 * Process data
 *
 * @param param0
 */
async function process({ type, data }: { type: DataType; data: DataPayload }) {
  Logger.info(`New Event, type: ${type} | event: ${data.event}`);

  const company_details = await getCompanyDetailsQuery();
  if (!company_details) {
    Logger.warn("Company details must be set from cms to complete the process");
    return;
  }

  /**
   * For languages, namespaces and pages alway rebuild whole docs app
   * !important this is not good for optimization spacialy when there are many content,
   * !we should handle every event action (create, update, delete) on its own logic or executorF
   */
  if (
    (["languages", "namespaces", "pages", "meta"] as DataType[]).includes(type)
  ) {
    if (IN_PROD) {
      /**
       * For delete event on (namespaces | pages) don't debounce
       */
      if (hasPageDeletion(type, data)) {
        processGenerateAll(type, data);
      } else {
        processGenerateAllDebounce(type, data);
      }
    }

    !IN_PROD && processGenerateAll(type, data);

    /**
     * Footer event
     */
  } else if (type === "footer") {
    IN_PROD && processGenerateFooterDebounce(type, data);
    !IN_PROD && processGenerateFooter(type, data);
  } else if (type === "server" && IS_DOCKER && IN_PROD) {
    /* A workaround for the issue that the first time the app is started, the namespaces are not generated. */
    Logger.info(
      "======== (Docker env detected) start build at initial load ========"
    );

    processGenerateAll(type, {
      collection: "Namespaces",
      event: `Namespaces.items.create`,
      payload: {},
    });
  }
}

/**
 * Proccess generate all
 * @param type
 * @param data
 */
const processGenerateAll = (type: DataType, data: DataPayload) => {
  logEvent(`All Docs - Executor, type: ${type} | event: ${data.event}`);
  executorQueue.exec(() => execGenerateAllEvent(type, data));
};
const processGenerateAllDebounce = debounce(
  processGenerateAll,
  TIMEOUT_PROCESS
);

/**
 * Proccess generate footer
 *
 * @param type
 * @param data
 */
const processGenerateFooter = (type: DataType, data: DataPayload) => {
  logEvent(`Footer - Executor, type: ${type} | event: ${data.event}`);
  executorQueue.exec(execFooterEvent);
};
const processGenerateFooterDebounce = debounce(
  processGenerateFooter,
  TIMEOUT_PROCESS
);

// ================================================ Logger =================================//
function logEvent(message: string) {
  createLogQuery({ log: message + ` (PROD: ${IN_PROD})`, type: "info" }).catch(
    console.error
  );
  Logger.info(message + ` (PROD: ${IN_PROD})`);
}
