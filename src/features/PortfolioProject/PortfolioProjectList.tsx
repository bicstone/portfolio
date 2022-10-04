import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useCallback, useReducer } from "react";

import { AccordionExpendReducer, initialState } from "./AccordionExpendReducer";
import { PortfolioProjectBulkExpandButton } from "./PortfolioProjectBulkExpandButton";
import { PortfolioProjectCard } from "./PortfolioProjectCard";

import type { PortfolioProjectListFragment } from "@/generated/graphqlTypes";

export const PortfolioProjectListQuery = graphql`
  fragment PortfolioProjectList on ContentfulProject {
    id
    ...PortfolioProjectCard
  }
`;

export const PortfolioProjectList = (props: {
  projects: readonly PortfolioProjectListFragment[];
}): JSX.Element => {
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
      {props.projects.map((project) => (
        <PortfolioProjectCard
          key={project.id}
          project={project}
          expanded={expanded === project.id || expanded === true}
          onChange={toggleExpand}
        />
      ))}
    </>
  );
};
