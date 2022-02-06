import React from 'react';

import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { Container, Typography, Card, CardContent, Link } from '@mui/material';
import { graphql, PageProps, navigate } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { AccessTime as AccessTimeIcon, Update as UpdateIcon } from '@mui/icons-material';

import { Layout } from 'src/components';
import { BlogPostQuery } from 'src/types';

const components: MDXProviderComponentsProp = {
  p: props => <Typography paragraph {...props} />,
  h1: () => null,
  h2: props => (
    <Typography
      variant="h5"
      component="h2"
      {...props}
      css={theme => ({
        display: 'block',
        position: 'relative',
        margin: theme.spacing(6, 0, 3),
        paddingLeft: theme.spacing(2),
        fontWeight: 'bold',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: theme.spacing(0.5),
          backgroundColor: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
        },
      })}
    />
  ),
  h3: props => (
    <Typography
      variant="h6"
      component="h3"
      {...props}
      css={theme => ({
        display: 'block',
        position: 'relative',
        margin: theme.spacing(6, 0, 3),
        paddingLeft: theme.spacing(2),
        fontWeight: 'bold',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: theme.spacing(0.5),
          backgroundColor: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
        },
      })}
    />
  ),
  h4: () => null,
  h5: () => null,
  h6: () => null,
  // blockquote: () => null,
  // table: () => null,
  // tr: () => null,
  // th: () => null,
  // td: () => null,
  // pre: () => null,
  code: ({ children, ...props }) => (
    <pre
      {...props}
      css={theme => ({
        display: 'block',
        fontFamily: 'Consolas, Courier, monospace',
        margin: theme.spacing(3, 'auto'),
        padding: theme.spacing(2),
        background: '#1E1E1E',
        color: '#DCDCDC',
        borderRadius: theme.shape.borderRadius,
        overflow: 'auto',
      })}
    >
      <code>{children}</code>
    </pre>
  ),
  // em: () => null,
  // delete: () => null,
  inlineCode: props => (
    <span
      {...props}
      css={theme => ({
        display: 'inline-block',
        fontFamily: 'Consolas, Courier, monospace',
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        backgroundColor: 'rgba(255, 229, 100, 0.2)',
        borderRadius: theme.shape.borderRadius,
      })}
    />
  ),
  // hr: () => null,
  a: props => <Link {...props} rel="external noreferrer noopener nofollow" />,
  // img: () => null,
};

const BlogPost: React.FC<PageProps<BlogPostQuery>> = ({ data }) => {
  const post = data.post;

  if (!post) {
    navigate('/404');
    return null;
  }

  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
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

        <Card css={theme => ({ margin: theme.spacing(2, 0, 10, 0) })}>
          <CardContent>
            <MDXProvider components={components}>
              <MDXRenderer components={components}>
                {post?.content?.childMdx?.body ?? ''}
              </MDXRenderer>
            </MDXProvider>
          </CardContent>
        </Card>

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
        childMdx {
          body
        }
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
