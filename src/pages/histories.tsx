import Container from "@mui/material/Container";
import { graphql } from "gatsby";

import type { HistoryPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/Timeline";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query HistoryPage {
    histories: allHistory(sort: { date: DESC }) {
      ...TimelineListHistory
    }
  }
`;

export const Head: HeadFC<HistoryPageQuery> = ({ location }) => {
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
  const title = TRANSLATION.histories.title;
  const projectGroups = data.histories;

  return (
    <Container
      maxWidth="md"
      fixed
      css={(theme) => ({ margin: theme.spacing(4, "auto") })}
    >
      <Breadcrumbs title={title} />
      <div css={(theme) => ({ height: theme.spacing(4) })} />
      <TimelineTabList />
      <div css={(theme) => ({ height: theme.spacing(2) })} />
      <TimelineList groups={projectGroups} />
      <div css={(theme) => ({ height: theme.spacing(4) })} />
      <Breadcrumbs title={title} />
    </Container>
  );
};

export default HistoryPage;
