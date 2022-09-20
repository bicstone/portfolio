/**
 * Returns false when param is null or undefined,
 * and otherwise returns true.
 */
export const isDefined = <T>(val?: T | null): val is T =>
  typeof val !== "undefined" && val !== null;
