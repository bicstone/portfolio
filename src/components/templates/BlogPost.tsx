import React from 'react';

import { Container, Typography, Box, Breadcrumbs, Link } from '@mui/material';
import { graphql, PageProps, Link as RouterLink, navigate } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { NavigateNext as NavigateNextIcon, Update as UpdateIcon } from '@mui/icons-material';

import { Layout } from 'src/components';
import { BlogPostQuery } from 'src/types';

const BlogPost: React.FC<PageProps<BlogPostQuery>> = ({ data }) => {
  const { t } = useTranslation();
  const post = data.post;
  if (!post) {
    navigate('/404');
    return null;
  }

  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="md">
        <Box marginBottom={1}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link component={RouterLink} to="/" title={t('header.back-to-home')}>
              <Typography variant="body2">bicstone</Typography>
            </Link>
            <Link component={RouterLink} to="/blog/" title={t('header.back-to-home')}>
              <Typography variant="body2">まっしろブログ</Typography>
            </Link>
            <Link component={RouterLink} to="/blog/" title={t('header.back-to-home')}>
              <Typography variant="body2">{post.tags?.[0]?.name || ''}</Typography>
            </Link>
          </Breadcrumbs>
        </Box>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Box marginRight={0.5}>
              <UpdateIcon fontSize="inherit" />
            </Box>
            <time dateTime={post.created}>{post.created}</time>
          </Box>
        </Typography>
        <Box marginTop={2} marginBottom={10}>
          {post?.content?.content}
        </Box>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($id: String!, $language: String!) {
    # 記事を取得する
    post: contentfulBlogPost(id: { eq: $id }) {
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
    # Bicstoneアイコンを取得する
    # "5qVePilXXNs2WxxIcvndga"は、contentful assetsのアイコンのID
    icon: contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
      title
      svg {
        content
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
  }
`;
