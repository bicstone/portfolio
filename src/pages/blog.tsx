import React from 'react';

import { Breadcrumbs, Container, Typography, Link } from '@mui/material';
import { graphql, PageProps, Link as RouterLink } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

import { Layout, BlogPostIndex } from 'src/components';
import { useSiteMetadata } from 'src/hooks';
import { BlogPageQuery } from 'src/types';

const Blog: React.FC<PageProps<BlogPageQuery>> = ({ data }) => {
  const { t } = useTranslation();
  const siteMetadata = useSiteMetadata();

  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout icon={icon} iconAlt={iconAlt}>
      <Container maxWidth="md">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}
        >
          <Link component={RouterLink} color="inherit" to="/">
            <Typography variant="body2">{siteMetadata.title}</Typography>
          </Link>
          <Typography variant="body2" color="text.primary">
            {t('blog.title')}
          </Typography>
        </Breadcrumbs>

        <Typography component="h1" variant="h5" align="center">
          {t('blog.title')}
        </Typography>

        <div css={theme => ({ marginBottom: theme.spacing(2) })}>
          <BlogPostIndex posts={data.posts.group} />
        </div>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}
        >
          <Link component={RouterLink} color="inherit" to="/">
            <Typography variant="body2">{siteMetadata.title}</Typography>
          </Link>
          <Typography variant="body2" color="text.primary">
            {t('blog.title')}
          </Typography>
        </Breadcrumbs>
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
