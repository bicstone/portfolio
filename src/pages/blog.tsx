import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql, Script } from "gatsby";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query BlogPage {
    blogPosts: allMdx(sort: { frontmatter: { created: DESC } }) {
      nodes {
        __typename
        frontmatter {
          title
          slug
          created
          category
        }
        ...BlogPostList
      }
    }
    timelines: allTimeline(sort: { date: DESC }) {
      nodes {
        __typename
        title
        url
        date
      }
    }
  }
`;

export interface TimeLineItem {
  typeName: string;
  title: string;
  date: string;
  url: string;
}

const getTimelineItems = (data: BlogPageQuery): TimeLineItem[] => {
  const timelineItems: TimeLineItem[] = [];

  data.blogPosts.nodes.forEach((node) => {
    timelineItems.push({
      typeName: node.__typename,
      title: node.frontmatter.title,
      date: node.frontmatter.created,
      url: node.frontmatter.slug,
    });
  });

  data.timelines.nodes.forEach((node) => {
    timelineItems.push({
      typeName: node.__typename,
      title: node.title,
      date: node.date,
      url: node.url,
    });
  });

  const sortedTimelineItems = Array.from(timelineItems).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  });

  return sortedTimelineItems;
};

export const Head: HeadFC<BlogPageQuery> = ({ location, data }) => {
  const timelineItems = getTimelineItems(data);
  const title = `${SITE_METADATA.blogTitle} - ${SITE_METADATA.title}`;
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
        id="pages-blog-ld-json-blog"
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
                  item.typeName === "Mdx" &&
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
        id="pages-blog-ld-json-breadcrumb-list"
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
                  name: SITE_METADATA.blogTitle,
                  "@type": "Thing",
                },
              },
            ],
          }),
        }}
      />
      <Script
        id="pages-blog-ld-json-organization"
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

const BlogPage = ({ data }: PageProps<BlogPageQuery>): JSX.Element => {
  const timelineItems = getTimelineItems(data);

  return (
    <Container
      maxWidth="md"
      css={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Breadcrumbs
        title={TRANSLATION.blog.title}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {TRANSLATION.blog.title}
      </Typography>

      <ul>
        {timelineItems.map((item) => (
          <li key={item.url}>
            {item.title} - {item.date}
          </li>
        ))}
        {/* <BlogPostList blogPostList={timelineItems} /> */}
      </ul>

      <Breadcrumbs
        title={TRANSLATION.blog.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default BlogPage;
