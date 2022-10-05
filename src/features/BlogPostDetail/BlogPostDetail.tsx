import { MDXProvider } from "@mdx-js/react";
import { Card } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import type { BlogPostDetailFragment } from "@/generated/graphqlTypes";

import { mdxComponents } from "@/components/markdown/mdxComponents";

export const query = graphql`
  fragment BlogPostDetail on ContentfulBlogPost {
    content {
      childMdx {
        body
      }
    }
  }
`;

export const BlogPostDetail = (props: {
  post: BlogPostDetailFragment;
}): JSX.Element => {
  const { post } = props;

  return (
    <Card
      css={(theme) => ({
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2, 0),
      })}
    >
      <MDXProvider components={mdxComponents}>
        <MDXRenderer components={mdxComponents}>
          {post.content.childMdx.body}
        </MDXRenderer>
      </MDXProvider>
    </Card>
  );
};
