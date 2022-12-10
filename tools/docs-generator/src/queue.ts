import * as async from "modern-async";

/**
 * create a queue with concurrency 1
 */
export const executorQueue = new async.Queue(1);
