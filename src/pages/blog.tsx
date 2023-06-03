import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql, Script } from "gatsby";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { BlogPostList } from "@/features/BlogPostList";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query BlogPage {
    blogPostList: allMdx(sort: { frontmatter: { created: DESC } }) {
      nodes {
        frontmatter {
          title
          created
          category
        }
        ...BlogPostList
      }
    }
  }
`;

export const Head: HeadFC<BlogPageQuery> = ({ location, data }) => {
  const blogPostList = data.blogPostList.nodes;
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
              ...blogPostList.map((post) => ({
                "@type": "BlogPosting",
                headline: post.frontmatter.title,
                image: `${SITE_METADATA.siteUrl}/ogp/${post.frontmatter.slug}.png`,
                datePublished: post.frontmatter.created,
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
  const blogPostList = data.blogPostList.nodes;

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

      <BlogPostList blogPostList={blogPostList} />

      <Breadcrumbs
        title={TRANSLATION.blog.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default BlogPage;
