import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql, Script } from "gatsby";

import type { TimelinePageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { getTimelineItems, TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query TimelinePage {
    blogPosts: allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        __typename
        frontmatter {
          title
          slug
          date
          category
        }
      }
    }
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
      }
    }
  }
`;

export const Head: HeadFC<TimelinePageQuery> = ({ location, data }) => {
  const timelineItems = getTimelineItems(data);
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
                  item.typename === "Mdx" &&
                  `${SITE_METADATA.siteUrl}/ogp/${item.url}.png`,
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
      <Script
        id="timeline-Page-ld-json-breadcrumb-list"
        strategy="post-hydrate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": `${SITE_METADATA.siteUrl}${"/"}`,
                  name: SITE_METADATA.title,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": `${SITE_METADATA.siteUrl}${location.pathname}`,
                  name: TRANSLATION.timeline.title,
                  "@type": "Thing",
                },
              },
            ],
          }),
        }}
      />
      <Script
        id="timeline-Page-ld-json-organization"
        strategy="post-hydrate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: SITE_METADATA.siteUrl,
            logo: `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
          }),
        }}
      />
    </>
  );
};

const TimelinePage = ({ data }: PageProps<TimelinePageQuery>): JSX.Element => {
  const timelineItems = getTimelineItems(data);

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
