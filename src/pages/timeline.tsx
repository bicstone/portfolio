import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql, Script } from "gatsby";

import type { TimelinePageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query TimelinePage {
    timelineItems: allTimeline(sort: { date: DESC }) {
      nodes {
        __typename
        title
        date
        ... on ArticlesYaml {
          url
        }
        ... on CertificationsYaml {
          endDate
        }
        ... on OssesYaml {
          url
        }
        ... on ProjectsYaml {
          endDate
        }
        ... on SlidesYaml {
          url
        }
        ... on Mdx {
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC<TimelinePageQuery> = ({ location, data }) => {
  const timelineItems = data.timelineItems.nodes;
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

const TimelinePage = ({ data }: PageProps<TimelinePageQuery>): JSX.Element => {
  const timelineItems = data.timelineItems.nodes;

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={TRANSLATION.timeline.title}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {TRANSLATION.timeline.title}
      </Typography>

      <TimelineTabList />

      <TimelineList items={timelineItems} />

      <Breadcrumbs
        title={TRANSLATION.timeline.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default TimelinePage;
