import "./env";
import * as async from "modern-async";
import { connect } from "@apps/docs-pubsub";
import { Logger } from "./logger";
import { getItemsQuery } from "./cms/queries";

const client = connect(); // Init redis connection
const queue = new async.Queue(1); // create a queue with concurrency 1

async function main() {
  const subscriber = await client;

  Logger.info("=============== Started =================");

  // const data = await getItemsQuery();

  // if (data) {
  //   Logger.info("=============== end =================");
  // }

  // subscriber.subscribe((message) => {
  //   console.log(message);
  // });
}

main();
