/**
 * Default time set to 1 second (1000 ms)
 * @param time
 * @returns
 */
export function wait(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
