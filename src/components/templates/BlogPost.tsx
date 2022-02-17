import React from 'react';

import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import {
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { graphql, navigate, PageProps, Link as RouterLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  AccessTime as AccessTimeIcon,
  NavigateNext as NavigateNextIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';

import 'prism-themes/themes/prism-material-dark.css';

import { Layout } from 'src/components';
import { useSiteMetadata } from 'src/hooks';
import { BlogPostQuery } from 'src/types';
import './custom.css';

// FIXME: refactor
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
  blockquote: props => (
    <blockquote
      {...props}
      css={theme => ({
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderLeftColor: theme.palette.divider,
        borderLeftWidth: theme.spacing(0.5),
        borderLeftStyle: 'solid',
      })}
    />
  ),
  table: ({ children, ...props }) => (
    <TableContainer
      {...props}
      css={theme => ({ marginTop: theme.spacing(1), marginBottom: theme.spacing(1) })}
    >
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: props => <TableHead {...props} />,
  tbody: props => <TableBody {...props} />,
  tr: props => <TableRow {...props} />,
  th: ({ align, ...props }) => <TableCell align={align ?? 'inherit'} component="th" {...props} />,
  td: ({ align, ...props }) => <TableCell align={align ?? 'inherit'} component="td" {...props} />,
  inlineCode: props => (
    <span
      {...props}
      css={theme => ({
        display: 'inline-block',
        fontFamily: 'Consolas, Courier, monospace',
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        backgroundColor: theme.palette.divider,
        borderRadius: theme.shape.borderRadius,
      })}
    />
  ),
  hr: () => <Divider />,
  a: props => <Link {...props} rel="external noreferrer noopener nofollow" />,
};

const BlogPost: React.FC<PageProps<BlogPostQuery>> = ({ data }) => {
  const { t } = useTranslation();
  const siteMetadata = useSiteMetadata();

  const post = data.post;

  if (!post) {
    navigate('/404');
    return null;
  }

  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="md">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          css={theme => ({ marginBottom: theme.spacing(5) })}
        >
          <Link component={RouterLink} to="/">
            <Typography variant="body2">{siteMetadata.title}</Typography>
          </Link>
          <Link component={RouterLink} to="/blog">
            <Typography variant="body2">{t('blog.title')}</Typography>
          </Link>
          <Link component={RouterLink} to={`/${post.slug}`}>
            <Typography variant="body2">{post.title || ''}</Typography>
          </Link>
        </Breadcrumbs>

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

        <Card css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}>
          <CardContent>
            <MDXProvider components={components}>
              <MDXRenderer components={components}>
                {post?.content?.childMdx?.body ?? ''}
              </MDXRenderer>
            </MDXProvider>
          </CardContent>
        </Card>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          css={theme => ({ marginTop: theme.spacing(5), marginBottom: theme.spacing(2) })}
        >
          <Link component={RouterLink} to="/">
            <Typography variant="body2">{siteMetadata.title}</Typography>
          </Link>
          <Link component={RouterLink} to="/blog">
            <Typography variant="body2">{t('blog.title')}</Typography>
          </Link>
          <Link component={RouterLink} to={`/${post.slug}`}>
            <Typography variant="body2">{post.title || ''}</Typography>
          </Link>
        </Breadcrumbs>
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
