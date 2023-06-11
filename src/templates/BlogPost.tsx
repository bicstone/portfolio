import AccessTimeIcon from "@mui/icons-material/AccessTimeRounded";
import UpdateIcon from "@mui/icons-material/UpdateRounded";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import NoSsr from "@mui/material/NoSsr";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
// Mdx required "React"
import * as React from "react";

import type { BlogPostTemplateQuery } from "@/generated/graphqlTypes";
import type { HeadFC, PageProps } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InarticleAd } from "@/components/InarticleAd";
import { Heading } from "@/components/markdown/Heading";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { BlogPostDetail } from "@/features/BlogPostDetail";
import { BlogPostTableOfContent } from "@/features/BlogPostTableOfContent";
import { HelloContent } from "@/features/PortfolioHello";
import { RelatedBlogPostList } from "@/features/RelatedBlogPostList";
import { HeadTemplate } from "@/layouts/HeadTemplate";
import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  query BlogPostTemplate($id: String!, $tags: [String!]!) {
    post: mdx(id: { eq: $id }) {
      id
      frontmatter {
        slug
        redirect
        title
        excerpt
        date
        updateDate
        category
        tags
      }
      ...BlogPostTableOfContent
    }
    relatedPosts: allMdx(
      filter: { frontmatter: { tags: { in: $tags } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          date
        }
        ...RelatedBlogPostList
      }
    }
  }
`;

export const Head: HeadFC<BlogPostTemplateQuery> = ({ location, data }) => {
  const post = data.post;
  const title = `${post.frontmatter.title} - ${SITE_METADATA.blogTitle}`;

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={post.frontmatter.excerpt}
        image={`${SITE_METADATA.siteUrl}/ogp/${post.frontmatter.slug}.png`}
        imageAlt={SITE_METADATA.blogTitle}
        type="article"
      />
      <meta property="article:published_time" content={post.frontmatter.date} />
      <meta
        property="article:modified_time"
        content={post.frontmatter.updateDate}
      />
      <meta property="article:author" content={SITE_METADATA.siteUrl} />
      <meta property="article:section" content={post.frontmatter.category} />
      {post.frontmatter.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: [
              `${SITE_METADATA.siteUrl}/ogp/${post.frontmatter.slug}.png`,
            ],
            datePublished: post.frontmatter.date,
            dateModified: post.frontmatter.updateDate,
            dateCreated: post.frontmatter.date,
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
            description: post.frontmatter.excerpt,
            keywords: post.frontmatter.tags.map((tag) => tag).join(", "),
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
                  "@id": `${SITE_METADATA.siteUrl}${"/"}`,
                  name: SITE_METADATA.title,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": `${SITE_METADATA.siteUrl}${"/blog"}`,
                  name: SITE_METADATA.blogTitle,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id": `${SITE_METADATA.siteUrl}/${post.frontmatter.slug}`,
                  name: post.frontmatter.title,
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
            url: SITE_METADATA.siteUrl,
            logo: `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
          }),
        }}
      />
    </>
  );
};

const BlogPostTemplate = ({
  data,
  location,
  children,
}: PageProps<BlogPostTemplateQuery>): JSX.Element => {
  const post = data.post;
  const relatedPosts = React.useMemo(() => {
    const filteredPosts = data.relatedPosts.nodes.filter(
      (p) => p.id !== post.id
    );

    // Pick up to 18 articles in the following order.
    // 18 is divisible by 1, 2, or 3.
    //
    // 1. Latest 10 articles.
    // 2. Older articles than this.

    const newerPosts = filteredPosts
      .filter((p) => p.frontmatter.date >= post.frontmatter.date)
      .slice(0, 10);
    const olderPosts = filteredPosts
      .filter((p) => p.frontmatter.date < post.frontmatter.date)
      .slice(0, 18 - newerPosts.length);

    return [...newerPosts, ...olderPosts];
  }, [data.relatedPosts.nodes, post.frontmatter.date, post.id]);

  const dateDate = React.useMemo(
    () => formatDateTime(post.frontmatter.date, "yyyy/MM/dd"),
    [post.frontmatter.date]
  );
  const updateDateDate = React.useMemo(
    () => formatDateTime(post.frontmatter.updateDate, "yyyy/MM/dd"),
    [post.frontmatter.updateDate]
  );

  React.useLayoutEffect(() => {
    if (typeof window !== "undefined" && isDefined(post.frontmatter.redirect)) {
      window.location.href = post.frontmatter.redirect;
    }
  }, [post.frontmatter.redirect]);

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={post.frontmatter.title}
        css={(theme) => ({
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        })}
      />

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          {post.frontmatter.title}
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
          {isDefined(post.frontmatter.updateDate) && (
            <>
              <UpdateIcon
                fontSize="inherit"
                css={(theme) => ({ marginRight: theme.spacing(0.5) })}
              />
              <time
                dateTime={post.frontmatter.updateDate}
                css={(theme) => ({ marginRight: theme.spacing(1) })}
              >
                {updateDateDate}
              </time>
            </>
          )}
          {isDefined(post.frontmatter.date) && (
            <>
              <AccessTimeIcon
                fontSize="inherit"
                css={(theme) => ({ marginRight: theme.spacing(0.5) })}
              />
              <time dateTime={post.frontmatter.date}>{dateDate}</time>
            </>
          )}
        </Typography>
      </div>

      <Card
        css={(theme) => ({
          margin: theme.spacing(3, 0),
          padding: theme.spacing(0, 1, 3, 1),
          borderRadius: theme.spacing(2),
        })}
      >
        <BlogPostTableOfContent post={post} />

        <Heading
          variant="h5"
          component="h2"
          id={TRANSLATION.blog.introductionTitle}
        >
          {TRANSLATION.blog.introductionTitle}
        </Heading>
        <BlogPostDetail>{children}</BlogPostDetail>
      </Card>

      <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
        <Typography
          variant="h5"
          component="h2"
          id={TRANSLATION.blog.authorTitle}
        >
          {TRANSLATION.blog.authorTitle}
        </Typography>

        <section
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        >
          <HelloContent />
        </section>
      </aside>

      {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) &&
        isDefined(process.env.GATSBY_ADSENSE_INARTICLE_AD_ID) && (
          <NoSsr defer>
            <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
              <Typography variant="h5" component="h2" paragraph>
                {TRANSLATION.blog.adLabel}
              </Typography>
              <InarticleAd
                pubId={process.env.GATSBY_ADSENSE_PUB_ID}
                adId={process.env.GATSBY_ADSENSE_INARTICLE_AD_ID}
              />
            </aside>
          </NoSsr>
        )}

      <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
        <Typography
          variant="h5"
          component="h2"
          paragraph
          id={TRANSLATION.blog.relatedTitle}
        >
          {TRANSLATION.blog.relatedTitle}
        </Typography>
        <RelatedBlogPostList posts={relatedPosts} />
      </aside>

      <Breadcrumbs
        title={post.frontmatter.title}
        css={(theme) => ({
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        })}
      />
    </Container>
  );
};

export default BlogPostTemplate;
