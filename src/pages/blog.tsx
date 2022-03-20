import React from 'react';

import {
  Breadcrumbs as MuiBreadcrumbs,
  Container,
  Typography,
  Link,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material';
import { graphql, PageProps, Link as RouterLink } from 'gatsby';
import { BlogJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

import { Layout, BlogPostIndex } from 'src/components';
import { useSiteMetadata, useBuildTime } from 'src/hooks';
import { BlogPageQuery } from 'src/types';

type BreadcrumbsProps = {
  siteTitle: string;
  blogTitle: string;
} & MuiBreadcrumbsProps;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ siteTitle, blogTitle, ...props }) => {
  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      {...props}
    >
      <Link component={RouterLink} color="inherit" to="/">
        <Typography variant="body2">{siteTitle}</Typography>
      </Link>
      <Typography variant="body2" color="text.primary">
        {blogTitle}
      </Typography>
    </MuiBreadcrumbs>
  );
};

const Blog: React.FC<PageProps<BlogPageQuery>> = ({ data }) => {
  const { path } = useI18next();
  const { t } = useTranslation();
  const siteMetadata = useSiteMetadata();
  const buildTime = useBuildTime();

  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout icon={icon} iconAlt={iconAlt}>
      <GatsbySeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        openGraph={{
          type: 'profile',
          title: siteMetadata.title,
          description: siteMetadata.description,
          images: [
            {
              url: siteMetadata.image,
              alt: siteMetadata.title,
            },
          ],
        }}
      />
      <BlogJsonLd
        authorType="Person"
        authorName={`${siteMetadata.lastName} ${siteMetadata.firstName}`}
        url={`${siteMetadata.siteUrl}${path}`}
        title={siteMetadata.title}
        headline={siteMetadata.description}
        datePublished={buildTime}
        dateModified={buildTime}
        description={siteMetadata.description}
        images={[siteMetadata.image]}
        publisherLogo={`${siteMetadata.siteUrl}${siteMetadata.image}`}
        publisherName={siteMetadata.title}
        overrides={{
          '@type': 'Blog',
          author: {
            '@type': 'Person',
            name: `${siteMetadata.lastName} ${siteMetadata.firstName}`,
            url: siteMetadata.siteUrl,
          },
        }}
        posts={data.postsLite?.edges?.map(post => ({
          headline: post.node.title || '',
          image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
          datePublished: post.node.created,
        }))}
        defer
      />
      <Container maxWidth="md">
        <Breadcrumbs
          siteTitle={siteMetadata.title}
          blogTitle={t('blog.title')}
          css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}
        />

        <Typography component="h1" variant="h5" align="center">
          {t('blog.title')}
        </Typography>

        <div css={theme => ({ marginBottom: theme.spacing(2) })}>
          <BlogPostIndex posts={data.posts.group} />
        </div>

        <Breadcrumbs
          siteTitle={siteMetadata.title}
          blogTitle={t('blog.title')}
          css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}
        />
      </Container>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPage($language: String!) {
    # ブログ記事一覧を取得する
    posts: allContentfulBlogPost(sort: { fields: [tags, created], order: [ASC, DESC] }) {
      group(field: tags) {
        edges {
          node {
            id
            title
            slug
            created
            updated
            excerpt
            content {
              content
            }
            tags {
              name
            }
          }
        }
      }
    }
    # JSON-LD用
    postsLite: allContentfulBlogPost(sort: { order: DESC, fields: created }) {
      edges {
        node {
          title
          slug
          created
        }
      }
    }
    # 原稿を取得する
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    # Bicstoneアイコンを取得する
    # "5qVePilXXNs2WxxIcvndga"は、contentful assetsのアイコンのID
    icon: contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
      title
      svg {
        content
      }
    }
  }
`;
