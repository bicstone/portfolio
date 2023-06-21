import Container from "@mui/material/Container";
import { graphql } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { BioCardList } from "@/features/Bio";
import { TimelineVirtualizedList } from "@/features/Timeline";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query IndexPage {
    timelineItems: allTimeline(sort: { date: DESC }) {
      ...TimelineVirtualizedListTimeline
    }
  }
`;

// LogRocket
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LogRocket?: any;
  }
}

export const Head: HeadFC<IndexPageQuery> = ({ location }) => {
  const title = SITE_METADATA.title;

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        imageAlt={title}
        type="blog"
      />
    </>
  );
};

const IndexPage = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const timelineItems = data.timelineItems;

  return (
    <>
      <Container
        maxWidth="md"
        fixed
        css={(theme) => ({ margin: theme.spacing(4, "auto") })}
      >
        <BioCardList />
        <Spacer y={6} />
        <TimelineTabList />
        <Spacer y={6} />
        <TimelineVirtualizedList items={timelineItems} />
      </Container>
    </>
  );
};

export default IndexPage;
