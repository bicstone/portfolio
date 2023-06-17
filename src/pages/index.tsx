import Container from "@mui/material/Container";
import { graphql } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Spacer } from "@/components/Spacer";
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
    site {
      buildTime
    }
  }
`;

export const Head: HeadFC<IndexPageQuery> = ({ location, data }) => {
  const title = SITE_METADATA.title;
  const timelineItems = data.timelineGroups.group.flatMap(({ nodes }) => nodes);
  const buildTime = data.site.buildTime;

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={SITE_METADATA.description}
        image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
        imageAlt={title}
        type="blog"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: SITE_METADATA.title,
            image: [`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`],
            datePublished: buildTime,
            dateModified: buildTime,
            description: SITE_METADATA.description,
            author: {
              "@type": "Person",
              name: `${SITE_METADATA.lastName} ${SITE_METADATA.firstName}`,
              url: SITE_METADATA.siteUrl,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_METADATA.title,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
              },
            },
            blogPost: [
              ...timelineItems.map((item) => ({
                "@type": "BlogPosting",
                headline: item.title,
                image:
                  item.__typename === "Mdx"
                    ? `${SITE_METADATA.siteUrl}/ogp/${item.slug}.png`
                    : `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
                datePublished: item.date,
                author: {
                  "@type": "Person",
                  name: `${SITE_METADATA.lastName} ${SITE_METADATA.firstName}`,
                  url: SITE_METADATA.siteUrl,
                },
              })),
            ],
          }),
        }}
      />
    </>
  );
};

const IndexPage = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const timelineGroups = data.timelineGroups;

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
        <TimelineList groups={timelineGroups} virtualized />
        <Spacer y={6} />
        <TimelineTabList />
      </Container>
    </>
  );
};

export default IndexPage;
