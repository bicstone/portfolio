import { graphql } from "gatsby";

import { BlogPostCard } from "./BlogPostCard";

import type { BlogPostListFragment } from "@/generated/graphqlTypes";

export const BlogPostListQuery = graphql`
  fragment BlogPostList on ContentfulBlogPost {
    id
    ...BlogPostCard
  }
`;

export const BlogPostList = (props: {
  blogPostList: BlogPostListFragment[];
}): JSX.Element => {
  return (
    <>
      {props.blogPostList.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </>
  );
};
