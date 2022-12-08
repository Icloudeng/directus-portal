/**
 * Produces a duplicate-free version of the array, using === to test object equality. In particular only the first
 * occurrence of each value is kept. If you want to compute unique items based on a transformation, pass an iteratee
 * function.
 *
 * Heavily inspired by {@link https://underscorejs.org/#uniq}.
 * @param {Array} array
 * @param {IterateeFunction} [iteratee] transformation applied to every element before checking for duplicates. This will not
 * transform the items in the result.
 * @return {Array}
 * @alias module:utils.uniq
 */
const uniq = (array: any[], iteratee?: Function) => {
  if (iteratee)
    return [...new Map(array.map((x) => [iteratee(x), x])).values()];
  else return [...new Set(array)];
};
/**
 * Returns true if arg is an Object. Note that JavaScript arrays and functions are objects, while (normal) strings
 * and numbers are not.
 *
 * Heavily inspired by {@link https://underscorejs.org/#isObject}.
 * @param {*} arg
 * @return {boolean}
 */
const isObject = (arg: any) => typeof arg === "object" && arg !== null;

/**
 * Returns true if d is a Date.
 *
 * Heavily inspired by {@link https://underscorejs.org/#isDate}.
 * @param {*} d
 * @return {boolean}
 * @alias module:utils.isDate
 */
const isDate = (d: any) =>
  isObject(d) && Object.prototype.toString.call(d) === "[object Date]";

/**
 * Returns true if re is a RegExp.
 *
 * Heavily inspired by {@link https://underscorejs.org/#isRegExp}.
 * @param {*} re
 * @return {boolean}
 * @alias module:utils.isRegExp
 */
const isRegExp = (re: any) =>
  isObject(re) && Object.prototype.toString.call(re) === "[object RegExp]";

/**
 * Returns the parents path of the file path
 *
 * @param path
 * @returns
 */
const extractPathFile = (path: string) =>
  path
    .split(/[\/\\]/)
    .slice(0, -1)
    .join("/");

/**
 * Escape regex charactar of a string
 *
 * @param value
 * @returns
 */
const escapeRegExp = (value: string) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
};

export default {
  uniq,
  isDate,
  isRegExp,
  extractPathFile,
  escapeRegExp,
};
