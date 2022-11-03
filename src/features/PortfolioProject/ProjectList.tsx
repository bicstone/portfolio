import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useCallback, useMemo, useReducer } from "react";

import { ProjectCard } from "./ProjectCard";

import type { PortfolioProjectListFragment } from "@/generated/graphqlTypes";

import { BulkExpandButton } from "@/components/BulkExpandButton";
import {
  AccordionExpendReducer,
  initialState,
} from "@/reducers/AccordionExpendReducer";

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

  const [expandedIds, dispatchExpanded] = useReducer(
    AccordionExpendReducer,
    initialState
  );

  const allIds = useMemo(
    () => projects.map((project) => project.id),
    [projects]
  );

  const isAllExpanded = useMemo(
    () => expandedIds.length === allIds.length,
    [allIds.length, expandedIds.length]
  );

  const toggleBulkExpand = useCallback(() => {
    if (isAllExpanded) {
      dispatchExpanded({ type: "ALL_COLLAPSE" });
    } else {
      dispatchExpanded({ type: "ALL_EXPAND", ids: allIds });
    }
  }, [allIds, isAllExpanded]);

  const toggleExpand = useCallback((id: string): void => {
    dispatchExpanded({ type: "TOGGLE_EXPAND", id });
  }, []);

  return (
    <>
      <Typography component="div" align="right" paragraph>
        <BulkExpandButton expanded={isAllExpanded} onClick={toggleBulkExpand} />
      </Typography>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expanded={expandedIds.includes(project.id)}
            onChange={toggleExpand}
          />
        ))}
      </div>
    </>
  );
};
