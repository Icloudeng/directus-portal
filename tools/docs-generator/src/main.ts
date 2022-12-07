import "./env";
import * as async from "modern-async";
import { connect } from "@apps/docs-pubsub";
import { Logger } from "./logger";

const client = connect(); // Init redis connection
const queue = new async.Queue(1); // create a queue with concurrency 1

async function main() {
  const subscriber = await client;

  Logger.info("=============== Started =================");

  // subscriber.subscribe((message) => {
  //   console.log(message);
  // });
}

main();
