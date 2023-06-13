import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import { graphql, Script } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { BioCardList } from "@/features/Bio";
import { TimelineList } from "@/features/Timeline";
import { TimelineTabList } from "@/features/TimelineTab";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query IndexPage {
    timelineGroups: allTimeline(sort: { date: DESC }) {
      ...TimelineListTimeline
    }
  }
`;

export const Head: HeadFC<IndexPageQuery> = ({ location, data }) => {
  const timelineItems = data.timelineGroups.group.flatMap(({ nodes }) => nodes);
  const title = `${TRANSLATION.timeline.title} - ${SITE_METADATA.title}`;
  const buildTime = useBuildTime();

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

      <Script
        id="timeline-Page-ld-json-blog"
        strategy="post-hydrate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: title,
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
  );
};

export default IndexPage;
