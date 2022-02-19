import React from 'react';

import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import {
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  styled,
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

import { HelloGroup, Layout } from 'src/components';
import { useSiteMetadata } from 'src/hooks';
import { BlogPostQuery } from 'src/types';

const consoleFontFamily = 'HackGen, PlemolJP, Consolas, Courier, monospace';

const StyledTypography = styled(Typography)(({ theme }) => ({
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
}));

const StyledBlockquote = styled('blockquote')(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(0, 1),
  borderLeft: `${theme.palette.divider} solid ${theme.spacing(0.5)}`,
}));

const StyledInlineCode = styled('span')(({ theme }) => ({
  display: 'inline-block',
  fontFamily: consoleFontFamily,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  backgroundColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
}));

const StyledPreWrap = styled('div')(({ theme }) => ({
  background: '#1e1e1e',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2),
  overflow: 'auto',
}));

const StyledPre = styled('pre')(({ theme }) => ({
  // fork from https://github.com/PrismJS/prism-themes/blob/v1.9.0/themes/prism-vsc-dark-plus.css
  // MIT License https://github.com/PrismJS/prism-themes/blob/v1.9.0/LICENSE
  color: '#d4d4d4',
  fontFamily: consoleFontFamily,
  whiteSpace: 'pre',
  tabSize: 2,
  margin: 0,
  padding: 0,
  float: 'left',
  minWidth: '100%',

  '& ::selection': {
    background: '#264F78',
  },

  [`.namespace`]: { opacity: 0.7 },
  [`
    .token.boolean,
    .token.doctype .token.doctype-tag,
    .token.entity,
    .token.important,
    .token.keyword,
    .token.operator.arrow,
    .token.punctuation.interpolation-punctuation,
    .token.tag
  `]: {
    color: '#569cd6',
  },
  [`
    .language-javascript,
    .language-jsx,
    .language-tsx,
    .language-typescript,
    .token.atrule .token.url,
    .token.attr-name,
    .token.console,
    .token.constant,
    .token.doctype .token.name,
    .token.exports .token.maybe-class-name,
    .token.imports .token.maybe-class-name,
    .token.interpolation,
    .token.parameter,
    .token.property,
    .token.variable
  `]: {
    color: '#9cdcfe',
  },
  [`
    .token.comment,
    .token.prolog
  `]: { color: '#6a9955' },
  [`
    .language-html,
    .language-html .language-css .token.punctuation,
    .language-html .language-javascript .token.punctuation,
    .token.atrule .token.url .token.punctuation,
    .token.attr-value .token.punctuation.attr-equals,
    .token.entity,
    .token.operator,
    .token.punctuation
  `]: {
    color: '#d4d4d4',
  },
  [`
    .token.boolean,
    .token.constant,
    .token.inserted,
    .token.number,
    .token.property,
    .token.symbol,
    .token.tag,
    .token.unit
  `]: {
    color: '#b5cea8',
  },
  [`
    .language-css,
    .token.atrule,
    .token.attr-name,
    .token.attr-value,
    .token.attr-value .token.punctuation,
    .token.builtin,
    .token.char,
    .token.deleted,
    .token.selector,
    .token.string
  `]: {
    color: '#ce9178',
  },
  [`.language-css .token.string.url`]: { textDecoration: 'underline' },
  [`
    .token.atrule .token.rule,
    .token.keyword.control-flow,
    .token.keyword.module
  `]: {
    color: '#c586c0',
  },
  [`
  .language-regex .token.anchor,
  .token.atrule .token.url .token.function,
  .token.function,
  .token.function .token.maybe-class-name
  `]: {
    color: '#dcdcaa',
  },
  [`.token.regex`]: { color: '#d16969' },
  [`.token.italic`]: { fontStyle: 'italic' },
  [`
    .token.class-name,
    .token.maybe-class-name,
    .token.namespace
  `]: {
    color: '#4ec9b0',
  },
  [`
    .token.escape,
    .token.selector
  `]: { color: '#d7ba7d' },
  [`
    .language-html .token.punctuation,
    .token.cdata,
    .token.tag .token.punctuation
  `]: {
    color: 'gray',
  },

  // https://github.com/gatsbyjs/gatsby/tree/v2.20.0/packages/gatsby-remark-prismjs
  [`.gatsby-highlight-code-line`]: {
    display: 'block',
    backgroundColor: '#4b5632',
    margin: theme.spacing(0, -2),
    padding: theme.spacing(0, 2),
  },
}));

// FIXME: refactor
const components: MDXProviderComponentsProp = {
  p: props => <Typography paragraph {...props} />,
  h1: () => null,
  h2: props => <StyledTypography variant="h5" component="h2" {...props} />,
  h3: props => <StyledTypography variant="h6" component="h3" {...props} />,
  h4: () => null,
  h5: () => null,
  h6: () => null,
  blockquote: props => <StyledBlockquote {...props} />,
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
  inlineCode: props => <StyledInlineCode {...props} />,
  pre: props => (
    <StyledPreWrap>
      <StyledPre {...props} />
    </StyledPreWrap>
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
          css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}
        >
          <Link component={RouterLink} color="inherit" to="/">
            <Typography variant="body2">{siteMetadata.title}</Typography>
          </Link>
          <Link component={RouterLink} color="inherit" to="/blog">
            <Typography variant="body2">{t('blog.title')}</Typography>
          </Link>
          <Typography variant="body2" color="text.primary">
            {post.title || ''}
          </Typography>
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
          css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}
        >
          <Link component={RouterLink} color="inherit" to="/">
            <Typography variant="body2">{siteMetadata.title}</Typography>
          </Link>
          <Link component={RouterLink} color="inherit" to="/blog">
            <Typography variant="body2">{t('blog.title')}</Typography>
          </Link>
          <Typography variant="body2" color="text.primary">
            {post.title || ''}
          </Typography>
        </Breadcrumbs>

        <section css={theme => ({ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) })}>
          <HelloGroup links={data.links.edges} icon={data.icon?.svg?.content ?? ''} />
        </section>
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
    # 自己紹介部分リンク先を取得する
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
