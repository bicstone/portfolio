import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { graphql } from "gatsby";

import type { ProjectsPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { BioCardList } from "@/features/Bio";
import { TimelineList } from "@/features/Timeline";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query ProjectsPage {
    projects: allProject(sort: { date: DESC }) {
      ...TimelineListProject
    }
  }
`;

export const Head: HeadFC<ProjectsPageQuery> = ({ location, data }) => {
  const title = `${TRANSLATION.projects.title} - ${SITE_METADATA.title}`;

  return (
    <HeadTemplate
      location={location}
      title={title}
      description={SITE_METADATA.description}
      image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
      imageAlt={title}
      type="blog"
    />
  );
};

const ProjectsPage = ({
  data,
  location,
}: PageProps<ProjectsPageQuery>): JSX.Element => {
  const projectGroups = data.projects;
  const path = location.pathname;

  return (
    <Container
      maxWidth="md"
      fixed
      css={(theme) => ({
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      })}
    >
      <BioCardList />
      <Divider css={(theme) => ({ margin: theme.spacing(6, 0) })} />
      <TimelineTabList path={path} />
      <div css={(theme) => ({ height: theme.spacing(3) })} />
      <TimelineList groups={projectGroups} />
    </Container>
  );
};

export default ProjectsPage;
