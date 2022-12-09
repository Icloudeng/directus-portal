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
 * For now we're not handle each event action particulary, means normaly we should handle them \
 * by providing the correspond process or executor, for item delete, create, updateF
 * --------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------
 */

const client = connect(); // Init redis connection
const queue = new async.Queue(1); // create a queue with concurrency 1
const TIMEOUT_PROCESS = 3 * 60 * 1000; // 3 minutes

async function main() {
  const subscriber = await client;

  if (IN_PROD) {
    Logger.info("=============== PROD Observing =================");
    /**
     * In prod run the observer with debounce if {TIMEOUT_PROCESS} time
     */
    subscriber.subscribe(debounce(process, TIMEOUT_PROCESS));
  } else {
    Logger.info("=============== DEV Observing =================");
    subscriber.subscribe(process);
  }
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
    const log = "Company details must be set from cms to complete the process";
    await createLogQuery({ type: "warning", log });

    Logger.warn(log);
    return;
  }

  /**
   * For languages, namespaces and pages alway rebuild whole docs app
   * !important this is not good for optimization spacialy when there are many content, 
   * !we should handle every event action (create, update, delete) on its own logic or executorF
   */
  if (type === "languages" || type === "namespaces" || type === "pages") {
    queue.exec(execGenerateAllEvent);

    /**
     * Footer event
     */
  } else if (type === "footer") {
    queue.exec(execFooterEvent);

    /**
     * Meta or company details event
     */
  } else if (type === "meta") {
    queue.exec(execDetailEvent);
  }
}
