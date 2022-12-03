import "./env";
import { connect } from "@apps/docs-pubsub";
import { Logger } from "./logger";

const client = connect();

async function main() {
  const subscriber = await client;

  Logger.info("=============== Started =================");

  subscriber.subscribe((message) => {
    console.log(message);
  });
}

main();
