import { graphql } from "gatsby";

import { RelatedBlogPostCard } from "./RelatedBlogPostCard";

import type { RelatedBlogPostListFragment } from "@/generated/graphqlTypes";

export const RelatedBlogPostListQuery = graphql`
  fragment RelatedBlogPostList on ContentfulBlogPost {
    id
    ...RelatedBlogPostCard
  }
`;

export const RelatedBlogPostList = (props: {
  posts: RelatedBlogPostListFragment[];
}): JSX.Element => {
  return (
    <>
      {props.posts.map((post) => (
        <RelatedBlogPostCard key={post.id} post={post} />
      ))}
    </>
  );
};
