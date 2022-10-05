import { Container, Typography } from "@mui/material";
import { graphql } from "gatsby";
import {
  BlogJsonLd,
  BreadcrumbJsonLd,
  GatsbySeo,
} from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import siteMetaData from "@/constants/siteMetaData";
import { BlogPostList } from "@/features/BlogPostList";
import { useBuildTime } from "@/hooks/useBuildTime";
import { Head } from "@/layouts/Head";

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

export { Head };

const BlogPage = ({ data }: PageProps<BlogPageQuery>): JSX.Element => {
  const blogPostList = data.blogPostList.nodes;
  const { t, path } = useI18next();
  const buildTime = useBuildTime();
  const title = `${t("blog.title")} - ${siteMetaData.title}`;

  return (
    <>
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

      {/* TODO: Remove Gatsby SEO <!-- */}
      <GatsbySeo
        title={title}
        description={siteMetaData.description}
        openGraph={{
          type: "profile",
          title,
          description: siteMetaData.description,
          images: [
            {
              url: `${siteMetaData.siteUrl}${siteMetaData.image}`,
              alt: title,
            },
          ],
        }}
      />
      <BlogJsonLd
        authorType="Person"
        authorName={`${siteMetaData.lastName} ${siteMetaData.firstName}`}
        url={`${siteMetaData.siteUrl}${path}`}
        title={title}
        headline={siteMetaData.description}
        datePublished={buildTime}
        dateModified={buildTime}
        description={siteMetaData.description}
        images={[`${siteMetaData.siteUrl}${siteMetaData.image}`]}
        publisherLogo={`${siteMetaData.siteUrl}${siteMetaData.image}`}
        publisherName={siteMetaData.title}
        overrides={{
          "@type": "Blog",
          author: {
            "@type": "Person",
            name: `${siteMetaData.lastName} ${siteMetaData.firstName}`,
            url: siteMetaData.siteUrl,
          },
        }}
        posts={blogPostList.map((node) => ({
          headline: node.title,
          image: node.thumbnail.file.url,
          datePublished: node.created,
        }))}
        defer
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: siteMetaData.title,
            item: `${siteMetaData.siteUrl}/`,
          },
          {
            position: 2,
            name: t("blog.title"),
            item: `${siteMetaData.siteUrl}/blog`,
          },
        ]}
        defer
      />
      {/* --> Remove Gatsby SEO */}
    </>
  );
};

export default BlogPage;
