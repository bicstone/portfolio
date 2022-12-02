import {
  AccessTimeRounded as AccessTimeIcon,
  UpdateRounded as UpdateIcon,
} from "@mui/icons-material";
import { Card, Container, NoSsr, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo } from "react";

import type { BlogPostPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InarticleAd } from "@/components/InarticleAd";
import siteMetaData from "@/constants/siteMetaData";
import { BlogPostDetail } from "@/features/BlogPostDetail";
import { HelloContent } from "@/features/PortfolioHello";
import { RelatedBlogPostList } from "@/features/RelatedBlogPostList";
import { Head as HeadTemplate } from "@/layouts/Head";
import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  query BlogPostPage($id: String!, $language: String!) {
    post: contentfulBlogPost(id: { eq: $id }) {
      slug
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
      ...BlogPostDetail
    }
    links: allContentfulHello(sort: { sortKey: ASC }) {
      nodes {
        ...PortfolioHelloContent
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

export const Head: HeadFC<BlogPostPageQuery> = ({ location, data }) => {
  const post = data.post;
  const title = `${post.title} - ${siteMetaData.blogTitle}`;

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={post.excerpt}
        image={`${siteMetaData.siteUrl}/ogp/${post.slug}.png`}
        imageAlt={siteMetaData.blogTitle}
        type="article"
      />
      <meta property="article:published_time" content={post.created} />
      <meta property="article:modified_time" content={post.updated} />
      <meta property="article:author" content={siteMetaData.siteUrl} />
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
            image: [`${siteMetaData.siteUrl}/ogp/${post.slug}.png`],
            datePublished: post.created,
            dateModified: post.updated,
            dateCreated: post.created,
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
                  "@id": `${siteMetaData.siteUrl}${"/"}`,
                  name: siteMetaData.title,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": `${siteMetaData.siteUrl}${"/blog"}`,
                  name: siteMetaData.blogTitle,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id": `${siteMetaData.siteUrl}/${post.slug}`,
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
            url: siteMetaData.siteUrl,
            logo: `${siteMetaData.siteUrl}${siteMetaData.image}`,
          }),
        }}
      />
    </>
  );
};

export const BlogPostPage = ({
  data,
}: PageProps<BlogPostPageQuery>): JSX.Element => {
  const { t } = useI18next();

  const post = data.post;

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
          margin: theme.spacing(3, 0),
          padding: theme.spacing(3, 0),
          borderRadius: theme.spacing(2),
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
          <HelloContent links={data.links.nodes} />
        </section>
      </aside>

      {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) &&
        isDefined(process.env.GATSBY_ADSENSE_INARTICLE_AD_ID) && (
          <NoSsr defer>
            <aside css={(theme) => ({ margin: theme.spacing(4, 0) })}>
              <Typography variant="h5" component="h2" paragraph>
                {t("blog.ad-label")}
              </Typography>
              <InarticleAd
                pubId={process.env.GATSBY_ADSENSE_PUB_ID}
                adId={process.env.GATSBY_ADSENSE_INARTICLE_AD_ID}
              />
            </aside>
          </NoSsr>
        )}

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
  );
};

export default BlogPostPage;
