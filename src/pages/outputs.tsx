import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql, Script } from "gatsby";

import type { OutputsPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { getTimelineItems, TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query OutputsPage {
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
    outputs: allOutput(sort: { date: DESC }) {
      nodes {
        __typename
        title
        url
        date
      }
    }
  }
`;

export const Head: HeadFC<OutputsPageQuery> = ({ location, data }) => {
  const outputItems = getTimelineItems(data);
  const title = `${TRANSLATION.outputs.title} - ${SITE_METADATA.title}`;
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
        id="outputs-Page-ld-json-blog"
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
              ...outputItems.map((item) => ({
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
        id="outputs-Page-ld-json-breadcrumb-list"
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
                  name: TRANSLATION.outputs.title,
                  "@type": "Thing",
                },
              },
            ],
          }),
        }}
      />
      <Script
        id="outputs-Page-ld-json-organization"
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

const OutputsPage = ({ data }: PageProps<OutputsPageQuery>): JSX.Element => {
  const outputItems = getTimelineItems(data);

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={TRANSLATION.outputs.title}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {TRANSLATION.outputs.title}
      </Typography>

      <TimelineTabList />

      <TimelineList items={outputItems} />

      <Breadcrumbs
        title={TRANSLATION.outputs.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default OutputsPage;
