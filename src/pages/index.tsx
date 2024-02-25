import Container from "@mui/material/Container";
import NoSsr from "@mui/material/NoSsr";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { InarticleAd } from "@/components/InarticleAd";
import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { BioCardList } from "@/features/Bio";
import { TimelineVirtualizedList } from "@/features/Timeline";
import { FeaturedList } from "@/features/TimelineFeatured";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  query IndexPage {
    timelineItems: allTimeline(
      sort: { date: DESC }
      # XXX: Qiitaだけトップページから除外している
      filter: { internal: { type: { ne: "ItemsYaml" } } }
    ) {
      ...TimelineVirtualizedListTimeline
    }
  }
`;

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
        <Typography variant="h5" component="h2" fontWeight="bold">
          Featured
        </Typography>
        <Spacer y={6} />
        <FeaturedList />
        <Spacer y={6} />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Timeline
        </Typography>
        <Spacer y={6} />
        <TimelineTabList />
        <Spacer y={6} />
        <TimelineVirtualizedList items={timelineItems} />
        <Spacer y={2} />
        {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) &&
          isDefined(process.env.GATSBY_ADSENSE_INARTICLE_AD_ID) && (
            <NoSsr defer>
              <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
                <Typography
                  variant="h5"
                  component="h2"
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
    </>
  );
};

export default IndexPage;
