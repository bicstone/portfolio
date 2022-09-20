import Fuse from "fuse.js";
import { useMemo } from "react";

export interface UseSearchProps<T> {
  list: readonly T[];
  keys: Array<Fuse.FuseOptionKey<T>>;
  keyword: string | Fuse.Expression;
  options?: Fuse.IFuseOptions<T>;
}

/**
 * Search using Fuse.
 */
export const useSearch = <T>({
  list,
  keys,
  keyword,
  options,
}: UseSearchProps<T>): Array<Fuse.FuseResult<T>> => {
  const fuse = useMemo(() => {
    return new Fuse(list, {
      keys,
      ...options,
    });
  }, [keys, list, options]);

  const result = useMemo(() => {
    return fuse.search(keyword);
  }, [fuse, keyword]);

  return result;
};
