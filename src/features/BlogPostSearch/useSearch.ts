import Fuse from "fuse.js";
import { useEffect, useState } from "react";

import {
  BLOG_POST_LIST_INDEX_JSON_FILENAME,
  BLOG_POST_LIST_JSON_FILENAME,
} from "./constants";

import type { BLOG_POST_SEARCH_FIELDS } from "./constants";
import type { MdxFrontmatter } from "@/generated/graphqlTypes";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { isDefined } from "@/utils/typeguard";

export type BlogPost = Pick<MdxFrontmatter, (typeof BLOG_POST_SEARCH_FIELDS)[number]>;

/**
 * Search using Fuse.
 */
export const useSearch = (props: {
  keyword: string | Fuse.Expression;
}): {
  readonly result?: Array<Fuse.FuseResult<BlogPost>>;
  readonly fetching: boolean;
  readonly error: boolean;
} => {
  const { keyword } = props;

  const [blogPostList, setBlogPostList] = useState<readonly BlogPost[]>();
  const [blogPostListIndex, setBlogPostListIndex] =
    useState<Fuse.FuseIndex<BlogPost>>();
  const [error, setError] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [fuse, setFuse] = useState<Fuse<BlogPost>>();
  const [result, setResult] = useState<Array<Fuse.FuseResult<BlogPost>>>();

  useEffect(() => {
    const fetchBlogPostList = fetch(
      `${SITE_METADATA.siteUrl}/${BLOG_POST_LIST_JSON_FILENAME}`
    ).then(async (response) => await response.json());
    const fetchBlogPostListIndex = fetch(
      `${SITE_METADATA.siteUrl}/${BLOG_POST_LIST_INDEX_JSON_FILENAME}`
    ).then(async (response) => await response.json());

    Promise.all([fetchBlogPostList, fetchBlogPostListIndex])
      .then(([blogPostList, blogPostListIndex]) => {
        setBlogPostList(blogPostList);
        setBlogPostListIndex(Fuse.parseIndex(blogPostListIndex));
      })
      .catch((error) => {
        isDefined(window.Sentry) && window.Sentry.captureException(error);
        setError(true);
      })
      .finally(() => {
        setFetching(false);
      });
  }, []);

  useEffect(() => {
    if (isDefined(blogPostList) && isDefined(blogPostListIndex)) {
      setFuse(
        new Fuse(
          blogPostList,
          {
            ignoreLocation: true,
            findAllMatches: true,
          },
          blogPostListIndex
        )
      );
    }
  }, [blogPostList, blogPostListIndex]);

  useEffect(() => {
    if (isDefined(fuse)) {
      setResult(fuse.search(keyword));
    }
  }, [fuse, keyword]);

  return { result, fetching, error } as const;
};
