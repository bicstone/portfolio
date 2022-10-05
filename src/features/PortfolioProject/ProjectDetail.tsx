import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import type { PortfolioProjectDetailFragment } from "@/generated/graphqlTypes";

import { mdxComponents } from "@/components/markdown/mdxComponents";

export const query = graphql`
  fragment PortfolioProjectDetail on ContentfulProject {
    subName
    detail {
      childMdx {
        body
      }
    }
  }
`;

export const ProjectDetail = (props: {
  project: PortfolioProjectDetailFragment;
}): JSX.Element => {
  return (
    <>
      <Typography
        variant="subtitle1"
        css={(theme) => ({ margin: theme.spacing(2) })}
      >
        {props.project.subName}
      </Typography>
      <Typography component="div" variant="body2">
        <MDXProvider components={mdxComponents}>
          <MDXRenderer components={mdxComponents}>
            {props.project.detail.childMdx.body}
          </MDXRenderer>
        </MDXProvider>
      </Typography>
    </>
  );
};
