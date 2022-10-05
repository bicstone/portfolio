import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useCallback, useReducer } from "react";

import { AccordionExpendReducer, initialState } from "./AccordionExpendReducer";
import { PortfolioProjectBulkExpandButton } from "./BulkExpandButton";
import { ProjectCard } from "./ProjectCard";

import type { PortfolioProjectListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioProjectList on ContentfulProject {
    id
    ...PortfolioProjectCard
  }
`;

export const ProjectList = (props: {
  projects: readonly PortfolioProjectListFragment[];
}): JSX.Element => {
  const { projects } = props;

  const [expanded, dispatchExpanded] = useReducer(
    AccordionExpendReducer,
    initialState
  );

  const toggleBulkExpand = useCallback(() => {
    dispatchExpanded({ type: "TOGGLE_BULK_EXPAND" });
  }, []);

  const toggleExpand = useCallback((id: string): void => {
    dispatchExpanded({ type: "TOGGLE_EXPAND", id });
  }, []);

  return (
    <>
      <Typography component="div" align="right" paragraph>
        <PortfolioProjectBulkExpandButton
          expanded={Boolean(expanded)}
          onClick={toggleBulkExpand}
        />
      </Typography>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          expanded={expanded === project.id || expanded === true}
          onChange={toggleExpand}
        />
      ))}
    </>
  );
};
