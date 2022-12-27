import Grid from "@mui/material/Grid";
import { graphql } from "gatsby";

import { RelatedBlogPostCard } from "./RelatedBlogPostCard";

import type { RelatedBlogPostListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment RelatedBlogPostList on ContentfulBlogPost {
    id
    ...RelatedBlogPostCard
  }
`;

export const RelatedBlogPostList = (props: {
  posts: RelatedBlogPostListFragment[];
}): JSX.Element => {
  const { posts } = props;

  return (
    <Grid container spacing={1}>
      {posts.map((post) => (
        <RelatedBlogPostCard key={post.id} post={post} />
      ))}
    </Grid>
  );
};
