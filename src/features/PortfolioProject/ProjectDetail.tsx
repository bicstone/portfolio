import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@mui/material";
import { graphql } from "gatsby";

import type { PortfolioProjectDetailFragment } from "@/generated/graphqlTypes";

import { mdxComponents } from "@/components/markdown/mdxComponents";

export const query = graphql`
  fragment PortfolioProjectDetail on ContentfulProject {
    subName
    detail {
      detail
      # childMdx {
      #   body
      # }
    }
  }
`;

export const ProjectDetail = (props: {
  project: PortfolioProjectDetailFragment;
}): JSX.Element => {
  const { project } = props;

  return (
    <>
      <Typography
        component="div"
        variant="subtitle1"
        css={(theme) => ({ margin: theme.spacing(2) })}
      >
        {project.subName}
      </Typography>
      <Typography component="div" variant="body2">
        <MDXProvider components={mdxComponents}>
          {project.detail.detail}
        </MDXProvider>
      </Typography>
    </>
  );
};
