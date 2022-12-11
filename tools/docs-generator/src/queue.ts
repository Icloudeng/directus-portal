import * as async from "modern-async";

/**
 * Create a queue with concurrency 1
 * !The concurrency value must remain 1, the other app logic depends on
 */
export const executorQueue = new async.Queue(1);
