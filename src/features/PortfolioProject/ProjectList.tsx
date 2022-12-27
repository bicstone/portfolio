import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { useMemo } from "react";

import { ProjectCard } from "./ProjectCard";

import type { PortfolioProjectListFragment } from "@/generated/graphqlTypes";

import { BulkExpandButton } from "@/components/BulkExpandButton";
import { useAccordionExpend } from "@/hooks/useAccordionExpend";

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

  const allIds = useMemo(
    () => projects.map((project) => project.id),
    [projects]
  );

  const { expandedIds, isAllExpanded, toggleBulkExpand, toggleExpand } =
    useAccordionExpend(allIds);

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
