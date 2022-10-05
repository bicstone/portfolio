import { Grid } from "@mui/material";
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
  return (
    <Grid container spacing={1}>
      {props.posts.map((post) => (
        <RelatedBlogPostCard key={post.id} post={post} />
      ))}
    </Grid>
  );
};
