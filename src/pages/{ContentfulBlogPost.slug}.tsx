import AccessTimeIcon from "@mui/icons-material/AccessTimeRounded";
import UpdateIcon from "@mui/icons-material/UpdateRounded";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import NoSsr from "@mui/material/NoSsr";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { useLayoutEffect, useMemo } from "react";

import type { BlogPostPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InarticleAd } from "@/components/InarticleAd";
import { ShareButtons } from "@/components/ShareButtons";
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
  query BlogPostPage($id: String!) {
    post: contentfulBlogPost(id: { eq: $id }) {
      slug
      redirect
      title
      excerpt
      created
      createdDateTime: created(formatString: "X")
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
      ...BlogPostDetail
      ...BlogPostTableOfContent
    }
    links: allContentfulHello(sort: { sortKey: ASC }) {
      nodes {
        ...PortfolioHelloContent
      }
    }
  }
`;

export const Head: HeadFC<BlogPostPageQuery> = ({ location, data }) => {
  const post = data.post;
  const title = `${post.title} - ${SITE_METADATA.blogTitle}`;

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={post.excerpt}
        image={`${SITE_METADATA.siteUrl}/ogp/${post.slug}.png`}
        imageAlt={SITE_METADATA.blogTitle}
        type="article"
      />
      <meta property="article:published_time" content={post.created} />
      <meta property="article:modified_time" content={post.updated} />
      <meta property="article:author" content={SITE_METADATA.siteUrl} />
      <meta property="article:section" content={post.category.name} />
      {post.tags.map((tag) => (
        <meta key={tag.name} property="article:tag" content={tag.name} />
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: [`${SITE_METADATA.siteUrl}/ogp/${post.slug}.png`],
            datePublished: post.created,
            dateModified: post.updated,
            dateCreated: post.created,
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
            description: post.excerpt,
            keywords: post.tags.map((tag) => tag.name).join(", "),
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
                  "@id": `${SITE_METADATA.siteUrl}/${post.slug}`,
                  name: post.title,
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

export const BlogPostPage = ({
  data,
  location,
}: PageProps<BlogPostPageQuery>): JSX.Element => {
  const post = data.post;
  const relatedPosts = useMemo(() => {
    const posts = post.tags.flatMap((tag) => tag.blog_post);
    const filteredPosts = Array.from(
      new Map(posts.map((post) => [post.id, post])).values()
    ).filter((post) => post.slug !== data.post.slug);
    filteredPosts.sort((a, b) => b.createdDateTime - a.createdDateTime);

    // Pick up to 18 articles in the following order.
    // 18 is divisible by 1, 2, or 3.
    //
    // 1. Latest 10 articles.
    // 2. Older articles than this.

    const newerPosts = filteredPosts
      .filter((post) => post.createdDateTime >= data.post.createdDateTime)
      .slice(0, 10);
    const olderPosts = filteredPosts
      .filter((post) => post.createdDateTime < data.post.createdDateTime)
      .slice(0, 18 - newerPosts.length);

    return [...newerPosts, ...olderPosts];
  }, [data.post.createdDateTime, data.post.slug, post.tags]);

  const createdDate = useMemo(
    () => formatDateTime(post.created, "yyyy/MM/dd"),
    [post.created]
  );
  const updatedDate = useMemo(
    () => formatDateTime(post.updated, "yyyy/MM/dd"),
    [post.updated]
  );

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && isDefined(post.redirect)) {
      window.location.href = post.redirect;
    }
  }, [post.redirect]);

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={post.title}
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
      </div>

      <Card
        css={(theme) => ({
          margin: theme.spacing(3, 0),
          padding: theme.spacing(3, 0),
          borderRadius: theme.spacing(2),
        })}
      >
        <Heading
          variant="h5"
          component="h2"
          css={(theme) => ({
            padding: theme.spacing(2),
            "&::before": {
              top: theme.spacing(2),
              bottom: theme.spacing(2),
            },
          })}
        >
          {TRANSLATION.blog.tableOfContentsTitle}
        </Heading>
        <BlogPostTableOfContent post={post} />

        <Heading
          variant="h5"
          component="h2"
          id={TRANSLATION.blog.introductionTitle}
        >
          {TRANSLATION.blog.introductionTitle}
        </Heading>
        <BlogPostDetail post={post} />

        <Heading variant="h5" component="h2">
          {TRANSLATION.blog.shareTitle}
        </Heading>
        <ShareButtons
          title={`${post.title} - ${SITE_METADATA.blogTitle}`}
          url={`${SITE_METADATA.siteUrl}${location.pathname}`}
        />
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
          <HelloContent links={data.links.nodes} />
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
        title={post.title}
        css={(theme) => ({
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        })}
      />
    </Container>
  );
};

export default BlogPostPage;
