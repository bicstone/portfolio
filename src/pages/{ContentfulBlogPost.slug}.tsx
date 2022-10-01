import {
  AccessTime as AccessTimeIcon,
  Update as UpdateIcon,
} from "@mui/icons-material";
import { Card, Container, Typography } from "@mui/material";
import { graphql } from "gatsby";
import {
  BlogPostJsonLd,
  GatsbySeo,
  BreadcrumbJsonLd,
} from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo } from "react";
import { HelloGroup } from "src/components";

import type { BlogPostPageQuery } from "@/generated/graphqlTypes";
import type { PageProps } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogPostDetail } from "@/features/BlogPostDetail/BlogPostDetail";
import { RelatedBlogPostList } from "@/features/RelatedBlogPostList/RelatedBlogPostList";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";
import { useUrl } from "@/hooks/useUrl";
import { Head } from "@/layouts/Head";
import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";
export const query = graphql`
  query BlogPostPage($id: String!, $language: String!) {
    post: contentfulBlogPost(id: { eq: $id }) {
      title
      excerpt
      created
      updated
      category {
        name
      }
      tags {
        name
        blog_post {
          ...RelatedBlogPostList
          createdDateTime: created(formatString: "X")
        }
      }
      thumbnail {
        file {
          url
        }
        title
      }
      ...BlogPostDetail
    }
    # TODO: Fragment
    links: allContentfulHello(sort: { fields: sortKey, order: ASC }) {
      edges {
        node {
          id
          node_locale
          name
          href
        }
      }
    }
    # gatsby-plugin-react-i18next
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export { Head };

export const BlogPostPage = ({ data }: PageProps<BlogPostPageQuery>): JSX.Element => {
  const { t, path, language } = useI18next();
  const siteMetadata = useSiteMetadata();
  const { currentLangUrl } = useUrl();

  const post = data.post;
  const title = `${post.title} - ${siteMetadata.title}`;

  const relatedPosts = useMemo(() => {
    const posts = post.tags.flatMap((tag) => tag.blog_post);
    const filteredPosts = Array.from(
      new Map(posts.map((post) => [post.id, post])).values()
    );
    filteredPosts.sort((a, b) => b.createdDateTime - a.createdDateTime);
    return filteredPosts;
  }, [post.tags]);

  const createdDate = useMemo(
    () => formatDateTime(post.created, "yyyy/MM/dd"),
    [post.created]
  );
  const updatedDate = useMemo(
    () => formatDateTime(post.updated, "yyyy/MM/dd"),
    [post.updated]
  );

  return (
    <>
      <Container maxWidth="md">
        <Breadcrumbs
          title={post.title}
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        />

        <Typography variant="h4" component="h1">
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          component="div"
          css={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: theme.spacing(1),
          })}
        >
          {isDefined(post.updated) && (
            <>
              <UpdateIcon
                fontSize="inherit"
                css={(theme) => ({ marginRight: theme.spacing(0.5) })}
              />
              <time
                dateTime={post.updated}
                css={(theme) => ({ marginRight: theme.spacing(1) })}
              >
                {updatedDate}
              </time>
            </>
          )}
          {isDefined(post.created) && (
            <>
              <AccessTimeIcon
                fontSize="inherit"
                css={(theme) => ({ marginRight: theme.spacing(0.5) })}
              />
              <time dateTime={post.created}>{createdDate}</time>
            </>
          )}
        </Typography>

        <Card
          css={(theme) => ({
            margin: theme.spacing(2, 0),
            padding: theme.spacing(2, 0),
          })}
        >
          <BlogPostDetail post={post} />
        </Card>

        <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
          <Typography variant="h5" component="h2">
            {t("blog.author-title")}
          </Typography>

          <section
            css={(theme) => ({
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(2),
            })}
          >
            <HelloGroup links={data.links.edges} />
          </section>
        </aside>

        <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
          <Typography variant="h5" component="h2" paragraph>
            {t("blog.related-title")}
          </Typography>
          <RelatedBlogPostList posts={relatedPosts} />
        </aside>

        <Breadcrumbs
          title={post.title}
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        />
      </Container>

      {/* TODO: Delete Gatsby SEO <!-- */}
      <GatsbySeo
        title={title}
        description={post.excerpt}
        openGraph={{
          type: "article",
          title,
          description: post.excerpt,
          images: [
            {
              url: post.thumbnail.file.url,
              alt: post.thumbnail.title,
            },
          ],
          article: {
            publishedTime: post.created,
            modifiedTime: post.updated,
            authors: [siteMetadata.siteUrl],
            section: post.category.name,
            tags: post.tags.map((v) => v.name),
          },
          url: currentLangUrl,
          locale: language,
        }}
      />
      <BlogPostJsonLd
        authorType="Person"
        authorName={`${siteMetadata.lastName} ${siteMetadata.firstName}`}
        url={`${siteMetadata.siteUrl}${path}`}
        title={title}
        headline={post.excerpt}
        dateCreated={post.created}
        datePublished={post.created}
        dateModified={post.updated}
        description={post.excerpt}
        images={[post.thumbnail.file.url]}
        keywords={post.tags.map((v) => v.name)}
        publisherLogo={siteMetadata.image}
        publisherName={siteMetadata.title}
        overrides={{
          "@type": "BlogPosting",
          author: {
            "@type": "Person",
            name: `${siteMetadata.lastName} ${siteMetadata.firstName}`,
            url: siteMetadata.siteUrl,
          },
        }}
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
          {
            position: 3,
            name: post.title,
            item: `${siteMetadata.siteUrl}${path}`,
          },
        ]}
        defer
      />
      {/* --> Delete Gatsby SEO */}
    </>
  );
};

export default BlogPostPage;
