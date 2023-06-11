import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { ProjectsPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query ProjectsPage {
    projects: allProject(sort: { date: DESC }) {
      nodes {
        __typename
        title
        date
        ... on ProjectsYaml {
          endDate
        }
        ... on OssesYaml {
          url
        }
      }
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

const ProjectsPage = ({ data }: PageProps<ProjectsPageQuery>): JSX.Element => {
  const projectItems = data.projects.nodes;

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={TRANSLATION.projects.title}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {TRANSLATION.projects.title}
      </Typography>

      <TimelineTabList />

      <TimelineList items={projectItems} />

      <Breadcrumbs
        title={TRANSLATION.projects.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default ProjectsPage;
