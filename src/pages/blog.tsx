import { Container, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import siteMetaData from "@/constants/siteMetaData";
import { BlogPostList } from "@/features/BlogPostList";
import { useBuildTime } from "@/hooks/useBuildTime";
import { Head as HeadTemplate } from "@/layouts/Head";

export const query = graphql`
  query BlogPage($language: String!) {
    blogPostList: allContentfulBlogPost(
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        title
        created
        thumbnail {
          file {
            url
          }
        }
        ...BlogPostList
      }
    }
    # gatsby-plugin-react-i18next
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ...UseUrl
        }
      }
    }
  }
`;

export const Head: HeadFC<BlogPageQuery> = ({ location, data }) => {
  const BLOG_TITLE = "まっしろブログ"; // TODO: i18next does not work in Head
  const blogPostList = data.blogPostList.nodes;
  const canonical = `${siteMetaData.siteUrl}${location.pathname}`;
  const title = `${BLOG_TITLE} - ${siteMetaData.title}`;
  const buildTime = useBuildTime();

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={siteMetaData.description}
        image={`${siteMetaData.siteUrl}${siteMetaData.image}`}
        imageAlt={title}
        type="blog"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: title,
            image: [`${siteMetaData.siteUrl}${siteMetaData.image}`],
            datePublished: buildTime,
            dateModified: buildTime,
            description: siteMetaData.description,
            author: {
              "@type": "Person",
              name: `${siteMetaData.lastName} ${siteMetaData.firstName}`,
              url: siteMetaData.siteUrl,
            },
            publisher: {
              "@type": "Organization",
              name: siteMetaData.title,
              logo: {
                "@type": "ImageObject",
                url: `${siteMetaData.siteUrl}${siteMetaData.image}`,
              },
            },
            blogPost: [
              ...blogPostList.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                image: post.thumbnail.file.url,
                datePublished: post.created,
                author: {
                  "@type": "Person",
                  name: `${siteMetaData.lastName} ${siteMetaData.firstName}`,
                  url: siteMetaData.siteUrl,
                },
              })),
            ],
          }),
        }}
      />
      <script
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
                  "@id": `${siteMetaData.siteUrl}${"/"}`,
                  name: siteMetaData.title,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": canonical,
                  name: BLOG_TITLE,
                  "@type": "Thing",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: siteMetaData.siteUrl,
            logo: `${siteMetaData.siteUrl}${siteMetaData.image}`,
          }),
        }}
      />
    </>
  );
};

const BlogPage = ({ data }: PageProps<BlogPageQuery>): JSX.Element => {
  const blogPostList = data.blogPostList.nodes;
  const { t } = useI18next();

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={t("blog.title")}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />

      <Typography component="h1" variant="h5" align="center" paragraph>
        {t("blog.title")}
      </Typography>

      <Typography>{t("blog.caption")}</Typography>

      <div css={(theme) => ({ margin: theme.spacing(3, 0) })}>
        <BlogPostList blogPostList={blogPostList} />
      </div>

      <Breadcrumbs
        title={t("blog.title")}
        css={(theme) => ({
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        })}
      />
    </Container>
  );
};

export default BlogPage;
