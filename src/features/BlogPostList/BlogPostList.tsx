import styled from "@emotion/styled";
import { graphql } from "gatsby";

import { BlogPostCard } from "./BlogPostCard";

import type { BlogPostListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment BlogPostList on Mdx {
    id
    ...BlogPostCard
  }
`;

const StyledBlogPostCard = styled(BlogPostCard)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
}));

export const BlogPostList = (props: {
  blogPostList: readonly BlogPostListFragment[];
}): JSX.Element => {
  const { blogPostList } = props;

  return (
    <>
      {blogPostList.map((post) => (
        <StyledBlogPostCard key={post.id} post={post} />
      ))}
    </>
  );
};
