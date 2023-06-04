import Card from "@mui/material/Card";
import { graphql } from "gatsby";

import { ProjectCard } from "./ProjectCard";

import type { PortfolioProjectListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioProjectList on ProjectsYamlConnection {
    nodes {
      name
      ...PortfolioProjectCard
    }
  }
`;

export const ProjectList = (props: {
  projects: PortfolioProjectListFragment;
}): JSX.Element => {
  const { projects } = props;

  return (
    <Card>
      {projects.nodes.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Card>
  );
};
