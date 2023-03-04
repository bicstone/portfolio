import { MDXProvider } from "@mdx-js/react";

import { mdxComponents } from "@/components/markdown/mdxComponents";

export const BlogPostDetail = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <MDXProvider components={mdxComponents}>{props.children}</MDXProvider>;
};
