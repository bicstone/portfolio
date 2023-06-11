import Fuse from "fuse.js";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect, useState } from "react";

import type { Search, UseSearchQuery } from "@/generated/graphqlTypes";

import { isDefined } from "@/utils/typeguard";

export type SearchResult = Pick<Search, "title" | "slug" | "url" | "excerpt">;

/**
 * Search using Fuse.
 */
export const useSearch = (props: {
  keyword: string | Fuse.Expression;
}): {
  readonly result?: Array<Fuse.FuseResult<SearchResult>>;
} => {
  const { keyword } = props;
  const [fuse, setFuse] = useState<Fuse<SearchResult>>();
  const [result, setResult] = useState<Array<Fuse.FuseResult<SearchResult>>>();

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

  useEffect(() => {
    setFuse(
      new Fuse(data.allSearch.nodes, {
        ignoreLocation: true,
        findAllMatches: true,
      })
    );
  }, [data.allSearch.nodes]);

  useEffect(() => {
    if (isDefined(fuse)) {
      setResult(fuse.search(keyword));
    }
  }, [fuse, keyword]);

  return { result } as const;
};
