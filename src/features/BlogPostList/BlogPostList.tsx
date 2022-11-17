import { graphql } from "gatsby";
import { Virtuoso } from "react-virtuoso";

import { BlogPostCard } from "./BlogPostCard";

import type { BlogPostListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment BlogPostList on ContentfulBlogPost {
    id
    ...BlogPostCard
  }
`;

export const BlogPostList = (props: {
  blogPostList: readonly BlogPostListFragment[];
}): JSX.Element => {
  const { blogPostList } = props;

  return (
    <Virtuoso
      data={blogPostList}
      itemContent={(_index, post) => <BlogPostCard key={post.id} post={post} />}
      style={{ height: "100%" }}
    />
  );
};
