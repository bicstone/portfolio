import Container from "@mui/material/Container";
import NoSsr from "@mui/material/NoSsr";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { ProjectsPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InarticleAd } from "@/components/InarticleAd";
import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/Timeline";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";
import { isDefined } from "@/utils/typeguard";

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
      imageAlt={title}
      type="blog"
    />
  );
};

const ProjectsPage = ({ data }: PageProps<ProjectsPageQuery>): JSX.Element => {
  const title = TRANSLATION.projects.title;
  const projectGroups = data.projects;

  return (
    <Container
      maxWidth="md"
      fixed
      css={(theme) => ({ margin: theme.spacing(4, "auto") })}
    >
      <Breadcrumbs title={title} />
      <Spacer y={4} />
      <TimelineTabList />
      <Spacer y={2} />
      <TimelineList groups={projectGroups} />
      <Spacer y={4} />
      <Breadcrumbs title={title} />
      <Spacer y={2} />
      {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) &&
        isDefined(process.env.GATSBY_ADSENSE_INARTICLE_AD_ID) && (
          <NoSsr defer>
            <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                paragraph
              >
                広告
              </Typography>
              <InarticleAd
                pubId={process.env.GATSBY_ADSENSE_PUB_ID}
                adId={process.env.GATSBY_ADSENSE_INARTICLE_AD_ID}
              />
            </aside>
          </NoSsr>
        )}
    </Container>
  );
};

export default ProjectsPage;
