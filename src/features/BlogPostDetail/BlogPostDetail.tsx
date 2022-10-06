import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

import type { BlogPostDetailFragment } from "@/generated/graphqlTypes";

import { mdxComponents } from "@/components/markdown/mdxComponents";

export const query = graphql`
  fragment BlogPostDetail on ContentfulBlogPost {
    content {
      content
      # childMdx {
      #   body
      # }
    }
  }
`;

export const BlogPostDetail = (props: {
  post: BlogPostDetailFragment;
}): JSX.Element => {
  const { post } = props;

  return (
    <MDXProvider components={mdxComponents}>{post.content.content}</MDXProvider>
  );
};
