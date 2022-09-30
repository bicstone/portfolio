import { Container, Typography } from "@mui/material";
import { graphql } from "gatsby";
import {
  BlogJsonLd,
  BreadcrumbJsonLd,
  GatsbySeo,
} from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";

import { BlogPostCard } from "./BlogPostCard";

import type { BlogPostListFragment } from "@/generated/graphqlTypes";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useBuildTime } from "@/hooks/useBuildTime";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

export const blogPostListFragment = graphql`
  fragment BlogPostList on ContentfulBlogPost {
    id
    title
    created
    thumbnail {
      title
      file {
        url
      }
    }
    ...BlogPostCard
  }
`;

export const BlogPostList = (props: {
  blogPostList: BlogPostListFragment[];
}): JSX.Element => {
  const { t, path } = useI18next();
  const siteMetadata = useSiteMetadata();
  const buildTime = useBuildTime();
  const title = `${t("blog.title")} - ${siteMetadata.title}`;

  return (
    <>
      <Container maxWidth="md">
        <Breadcrumbs
          title={t("blog.title")}
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        />

        <Typography component="h1" variant="h5" align="center" paragraph>
          {t("blog.title")}
        </Typography>

        <Typography>{t("blog.caption")}</Typography>

        <div css={(theme) => ({ marginBottom: theme.spacing(2) })}>
          {props.blogPostList.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <Breadcrumbs
          title={t("blog.title")}
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        />
      </Container>

      {/* TODO: Delete Gatsby SEO <!-- */}
      <GatsbySeo
        title={title}
        description={siteMetadata.description}
        openGraph={{
          type: "profile",
          title,
          description: siteMetadata.description,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: title,
            },
          ],
        }}
      />
      <BlogJsonLd
        authorType="Person"
        authorName={`${siteMetadata.lastName} ${siteMetadata.firstName}`}
        url={`${siteMetadata.siteUrl}${path}`}
        title={title}
        headline={siteMetadata.description}
        datePublished={buildTime}
        dateModified={buildTime}
        description={siteMetadata.description}
        images={[`${siteMetadata.siteUrl}${siteMetadata.image}`]}
        publisherLogo={`${siteMetadata.siteUrl}${siteMetadata.image}`}
        publisherName={siteMetadata.title}
        overrides={{
          "@type": "Blog",
          author: {
            "@type": "Person",
            name: `${siteMetadata.lastName} ${siteMetadata.firstName}`,
            url: siteMetadata.siteUrl,
          },
        }}
        posts={props.blogPostList.map((node) => ({
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
            name: siteMetadata.title,
            item: `${siteMetadata.siteUrl}/`,
          },
          {
            position: 2,
            name: t("blog.title"),
            item: `${siteMetadata.siteUrl}/blog`,
          },
        ]}
        defer
      />
      {/* --> Delete Gatsby SEO */}
    </>
  );
};
