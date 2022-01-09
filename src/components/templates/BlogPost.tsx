import React from 'react';

import { Container, Typography, Paper } from '@mui/material';
import { graphql, PageProps, navigate } from 'gatsby';

import { AccessTime as AccessTimeIcon, Update as UpdateIcon } from '@mui/icons-material';

import { Layout } from 'src/components';
import { BlogPostQuery } from 'src/types';

const BlogPost: React.FC<PageProps<BlogPostQuery>> = ({ data }) => {
  const post = data.post;

  if (!post) {
    navigate('/404');
    return null;
  }

  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="md">
        {/* <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          css={theme => ({ marginBottom: theme.spacing(1) })}
        >
          <Link component={RouterLink} to="/blog/" title={t('header.back-to-home')}>
            <Typography variant="body2">まっしろブログ</Typography>
          </Link>
          <Link component={RouterLink} to="/blog/" title={t('header.back-to-home')}>
            <Typography variant="body2">{post.title || ''}</Typography>
          </Link>
        </Breadcrumbs> */}
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          css={theme => ({ marginTop: theme.spacing(1) })}
        >
          <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {post.updated && (
              <>
                <UpdateIcon
                  fontSize="inherit"
                  css={theme => ({ marginRight: theme.spacing(0.5) })}
                />
                <time dateTime={post.updated} css={theme => ({ marginRight: theme.spacing(1) })}>
                  {post.updatedDate}
                </time>
              </>
            )}
            {post.created && (
              <>
                <AccessTimeIcon
                  fontSize="inherit"
                  css={theme => ({ marginRight: theme.spacing(0.5) })}
                />
                <time dateTime={post.created}>{post.createdDate}</time>
              </>
            )}
          </div>
        </Typography>
        <Paper css={theme => ({ margin: theme.spacing(2, 0, 10, 0) })}>
          {post?.content?.content}
        </Paper>
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
      createdDate: created(formatString: "yyyy/MM/DD")
      updated
      updatedDate: updated(formatString: "yyyy/MM/DD")
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
