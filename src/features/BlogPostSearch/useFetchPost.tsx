import { captureException } from "@sentry/gatsby";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

import {
  BLOG_POST_LIST_INDEX_JSON_FILENAME,
  BLOG_POST_LIST_JSON_FILENAME,
} from "./constants";

import type { BLOG_POST_SEARCH_FIELDS } from "./constants";
import type { ContentfulBlogPost } from "@/generated/graphqlTypes";

import siteMetaData from "@/constants/siteMetaData";

export type BlogPost = Pick<
  ContentfulBlogPost,
  typeof BLOG_POST_SEARCH_FIELDS[number]
>;

export const useFetchPost = (): {
  readonly blogPostList?: readonly BlogPost[];
  readonly blogPostListIndex?: Fuse.FuseIndex<BlogPost>;
  readonly fetching: boolean;
  readonly error: boolean;
} => {
  const [blogPostList, setBlogPostList] = useState<readonly BlogPost[]>();
  const [blogPostListIndex, setBlogPostListIndex] =
    useState<Fuse.FuseIndex<BlogPost>>();
  const [error, setError] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPostList = fetch(
      `${siteMetaData.siteUrl}/${BLOG_POST_LIST_JSON_FILENAME}`
    ).then(async (response) => await response.json());
    const fetchBlogPostListIndex = fetch(
      `${siteMetaData.siteUrl}/${BLOG_POST_LIST_INDEX_JSON_FILENAME}`
    ).then(async (response) => await response.json());

    Promise.all([fetchBlogPostList, fetchBlogPostListIndex])
      .then(([blogPostList, blogPostListIndex]) => {
        setBlogPostList(blogPostList);
        setBlogPostListIndex(Fuse.parseIndex(blogPostListIndex));
      })
      .catch((error) => {
        captureException(error);
        setError(true);
      })
      .finally(() => {
        setFetching(false);
      });
  }, []);

  return { blogPostList, blogPostListIndex, fetching, error } as const;
};
