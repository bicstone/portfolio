import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { HistoryPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query HistoryPage {
    histories: allHistory(sort: { date: DESC }) {
      nodes {
        __typename
        title
        date
        ... on CertificationsYaml {
          endDate
        }
      }
    }
  }
`;

export const Head: HeadFC<HistoryPageQuery> = ({ location, data }) => {
  const title = `${TRANSLATION.histories.title} - ${SITE_METADATA.title}`;

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

const HistoryPage = ({ data }: PageProps<HistoryPageQuery>): JSX.Element => {
  const projectItems = data.histories.nodes;

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={TRANSLATION.histories.title}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {TRANSLATION.histories.title}
      </Typography>

      <TimelineTabList />

      <TimelineList items={projectItems} />

      <Breadcrumbs
        title={TRANSLATION.histories.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default HistoryPage;
