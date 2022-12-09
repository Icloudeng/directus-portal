import "./src/env";
import debounce from "lodash/debounce";
import * as async from "modern-async";
import { connect, DataPayload, DataType } from "@apps/docs-pubsub";
import { Logger } from "./src/logger";
import { CMS_MODELS } from "@apps/contracts";
import { createLogQuery, getCompanyDetailsQuery } from "./src/cms/queries";
import {
  execDetailEvent,
  execFooterEvent,
  execLanguagesEvent,
} from "./src/executors";
import { IN_PROD } from "./src/constants";

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
   * If event is type of language and code had changed or a new creation
   */
  if (
    type === "languages" &&
    (data.payload?.code ||
      data.event === `${CMS_MODELS.languages}.items.create`)
  ) {
    queue.exec(execLanguagesEvent);

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

    /**
     * Namespaces event
     */
  } else if (type === "namespaces") {
    
  }
}
