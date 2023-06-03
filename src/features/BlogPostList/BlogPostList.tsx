import { graphql } from "gatsby";

import { BlogPostCard } from "./BlogPostCard";

import type { BlogPostListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment BlogPostList on Mdx {
    id
    ...BlogPostCard
  }
`;

export const BlogPostList = (props: {
  blogPostList: readonly BlogPostListFragment[];
}): JSX.Element => {
  const { blogPostList } = props;

  return (
    <>
      {blogPostList.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </>
  );
};
