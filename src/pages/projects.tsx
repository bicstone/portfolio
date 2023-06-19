import Container from "@mui/material/Container";
import { graphql } from "gatsby";

import type { ProjectsPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
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

export const Head: HeadFC<ProjectsPageQuery> = ({ location }) => {
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

const ProjectsPage = ({ data }: PageProps<ProjectsPageQuery>): JSX.Element => {
  const title = TRANSLATION.projects.title;
  const projectGroups = data.projects;

  return (
    <Container maxWidth="md" fixed sx={{ marginY: 4, marginX: "auto" }}>
      <Breadcrumbs title={title} />
      <Spacer y={4} />
      <TimelineTabList />
      <Spacer y={2} />
      <TimelineList groups={projectGroups} />
      <Spacer y={4} />
      <Breadcrumbs title={title} />
    </Container>
  );
};

export default ProjectsPage;
