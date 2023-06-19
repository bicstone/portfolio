import { MDXProvider } from "@mdx-js/react";
import { type ReactNode } from "react";

import { mdxComponents } from "@/components/markdown/mdxComponents";

export const BlogPostDetail = (props: {
  children?: ReactNode;
}): JSX.Element => {
  return <MDXProvider components={mdxComponents}>{props.children}</MDXProvider>;
};
