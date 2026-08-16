import Fuse, { type Expression, type FuseResult } from "fuse.js";
import { useStaticQuery, graphql } from "gatsby";
import { useMemo } from "react";

import type { Search, UseSearchQuery } from "@/generated/graphqlTypes";

export type SearchResult = Pick<Search, "title" | "slug" | "url" | "excerpt">;

/**
 * Search using Fuse.
 */
export const useTimelineSearch = (props: {
  keyword: string | Expression;
}): {
  readonly result?: Array<FuseResult<SearchResult>>;
} => {
  const { keyword } = props;

  const data = useStaticQuery<UseSearchQuery>(graphql`
    query UseSearch {
      allSearch {
        nodes {
          title
          excerpt
          url
          slug
        }
      }
    }
  `);
  const searchItems = data.allSearch.nodes;

  const fuse = useMemo(
    () =>
      new Fuse(searchItems, {
        findAllMatches: true,
        ignoreLocation: true,
        keys: ["title", "excerpt", "url", "slug"],
      }),
    [searchItems],
  );

  const result = fuse.search(keyword);

  return { result } as const;
};
