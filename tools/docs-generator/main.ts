import "./src/env";
import debounce from "lodash/debounce";
import * as async from "modern-async";
import { connect, DataPayload, DataType } from "@apps/docs-pubsub";
import { Logger } from "./src/logger";
import { createLogQuery, getCompanyDetailsQuery } from "./src/cms/queries";
import {
  execDetailEvent,
  execFooterEvent,
  execGenerateAllEvent,
} from "./src/executors";
import { IN_PROD } from "./src/constants";

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
const queue = new async.Queue(1); // create a queue with concurrency 1
const TIMEOUT_PROCESS = 2 * 60000; // 2 minutes

async function main() {
  const subscriber = await client;

  IN_PROD && Logger.info("=============== PROD Observing =================");
  !IN_PROD && Logger.info("=============== DEV Observing =================");

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
  if (type === "languages" || type === "namespaces" || type === "pages") {
    IN_PROD && processGenerateAllDebounce(type, data);
    !IN_PROD && processGenerateAll(type, data);

    /**
     * Footer event
     */
  } else if (type === "footer") {
    IN_PROD && processGenerateFooterDebounce(type, data);
    !IN_PROD && processGenerateFooter(type, data);

    /**
     * Meta or company details event
     */
  } else if (type === "meta") {
    IN_PROD && processGenerateDetailDebounce(type, data);
    !IN_PROD && processGenerateDetail(type, data);
  }
}

/**
 * Proccess generate all
 * @param type
 * @param data
 */
const processGenerateAll = (type: DataType, data: DataPayload) => {
  logEvent(`All Docs - Executor, type: ${type} | event: ${data.event}`);
  queue.exec(execGenerateAllEvent);
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
  queue.exec(execFooterEvent);
};
const processGenerateFooterDebounce = debounce(
  processGenerateFooter,
  TIMEOUT_PROCESS
);

/**
 * Proccess generate detail
 *
 * @param type
 * @param data
 */
const processGenerateDetail = (type: DataType, data: DataPayload) => {
  logEvent(`Detail - Executor, type: ${type} | event: ${data.event}`);
  queue.exec(execDetailEvent);
};
const processGenerateDetailDebounce = debounce(
  processGenerateDetail,
  TIMEOUT_PROCESS
);

// ================================================ Logger =================================//
function logEvent(message: string) {
  createLogQuery({ log: message + ` (PROD: ${IN_PROD})`, type: "info" }).catch(
    console.error
  );
  Logger.info(message + ` (PROD: ${IN_PROD})`);
}
