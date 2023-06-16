import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { graphql } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { BioCardList } from "@/features/Bio";
import { TimelineList } from "@/features/Timeline";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query IndexPage {
    timelineGroups: allTimeline(sort: { date: DESC }) {
      ...TimelineListTimeline
    }
  }
`;

export const Head: HeadFC<IndexPageQuery> = ({ location, data }) => {
  const title = SITE_METADATA.title;

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

const IndexPage = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const timelineGroups = data.timelineGroups;

  return (
    <>
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
        <TimelineTabList />
        <div css={(theme) => ({ height: theme.spacing(3) })} />
        <TimelineList groups={timelineGroups} />
      </Container>
    </>
  );
};

export default IndexPage;
