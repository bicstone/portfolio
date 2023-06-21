import Container from "@mui/material/Container";
import { graphql } from "gatsby";

import type { HistoryPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Spacer } from "@/components/Spacer";
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
      <Spacer y={4} />
      <TimelineTabList />
      <Spacer y={2} />
      <TimelineList groups={projectGroups} />
      <Spacer y={4} />
      <Breadcrumbs title={title} />
    </Container>
  );
};

export default HistoryPage;
