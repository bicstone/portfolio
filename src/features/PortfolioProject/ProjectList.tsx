import Card from "@mui/material/Card";
import { graphql } from "gatsby";

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

  return (
    <Card>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Card>
  );
};
