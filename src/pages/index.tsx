import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { BioCardList } from "@/features/Bio";
import { TimelineVirtualizedList } from "@/features/Timeline";
import { FeaturedList } from "@/features/TimelineFeatured";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query IndexPage {
    timelineItems: allTimeline(sort: { date: DESC }) {
      ...TimelineVirtualizedListTimeline
    }
    qiitaItems: allQiitaJson(sort: { title: ASC }) {
      ...TimelineVirtualizedListArchived
    }
  }
`;

export const Head: HeadFC<IndexPageQuery> = ({ location }) => {
  const { title } = SITE_METADATA;

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

const IndexPage = ({ data }: PageProps<IndexPageQuery>): React.JSX.Element => {
  const { timelineItems } = data;
  const { qiitaItems } = data;

  return (
    <>
      <Container
        maxWidth="md"
        fixed
        css={(theme) => ({ margin: theme.spacing(4, "auto") })}
      >
        <BioCardList />
        <Spacer y={6} />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Featured
        </Typography>
        <Spacer y={6} />
        <FeaturedList />
        <Spacer y={6} />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Outputs
        </Typography>
        <Spacer y={6} />
        <TimelineVirtualizedList items={timelineItems} />
        <Spacer y={2} />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Archived
        </Typography>
        <Spacer y={6} />
        <TimelineVirtualizedList items={qiitaItems} />
        <Spacer y={6} />
      </Container>
    </>
  );
};

export default IndexPage;
