import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import notionRendererFactory, {
  NotionRenderFuncs,
  NotionPageToRender,
} from 'gatsby-source-notionso/lib/renderer';
import { Box, Breadcrumbs, Container, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import UpdateIcon from '@material-ui/icons/Update';
import {
  Layout,
  NotionBoldText,
  NotionCodeBlock,
  NotionCodeText,
  NotionHeaderBlock,
  NotionImageBlock,
  NotionItalicText,
  NotionListItemBlock,
  NotionOlListBlock,
  NotionPageBlock,
  NotionStrikethroughText,
  NotionTextBlock,
  NotionUlListBlock,
} from 'src/components';
import { BlogPostQuery } from 'src/types';

const renderFuncs = (): NotionRenderFuncs => {
  return {
    wrapText: text => <>{text}</>,
    renderTextAtt: (children, att) => {
      const block = (() => {
        switch (att) {
          case 'i':
            return NotionItalicText({ children });
          case 'b':
            return NotionBoldText({ children });
          case 's':
            return NotionStrikethroughText({ children });
          case 'c':
            return NotionCodeText({ children });
          default:
            return children;
        }
      })();
      return <>{block}</>;
    },
    renderLink: (children, ref) => <Link to={ref}>{children}</Link>,
    renderBlock: (type, meta, children) => {
      const block = (() => {
        switch (type) {
          case 'page':
            return NotionPageBlock({ children });
          case 'text':
            return NotionTextBlock({ children });
          case 'code':
            return NotionCodeBlock({ meta });
          case 'image':
            return NotionImageBlock({ meta });
          case 'header':
            return NotionHeaderBlock({ children, level: 1 });
          case 'sub_header':
            return NotionHeaderBlock({ children, level: 2 });
          case 'sub_sub_header':
            return NotionHeaderBlock({ children, level: 3 });
          case 'bulleted_list':
            return NotionUlListBlock({ children });
          case 'numbered_list':
            return NotionOlListBlock({ children });
          case 'numbered_list__item':
          case 'bulleted_list__item':
            return NotionListItemBlock({ children });
          case '__meta':
          case 'meta':
          default:
            return null;
        }
      })();
      return <>{block}</>;
    },
  };
};

const BlogPost: React.FC<PageProps<BlogPostQuery>> = ({ data }) => {
  const { t } = useTranslation();
  const post = data.post;

  if (!post) {
    return <></>;
  }

  // HACK: NotionPageToRenderが厳しすぎるのでキャストする
  const notionRenderer = notionRendererFactory({ notionPage: post as NotionPageToRender });
  const child = notionRenderer.render(renderFuncs());
  const createdAt = new Date(data.post?.createdAt).toLocaleDateString();

  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="sm">
        <Box marginBottom={1}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link to="/" title={t('header.back-to-home')}>
              <Typography variant="body2">bicstone</Typography>
            </Link>
            <Link to="/blog/" title={t('header.back-to-home')}>
              <Typography variant="body2">まっしろブログ</Typography>
            </Link>
            <Link to="/blog/" title={t('header.back-to-home')}>
              <Typography variant="body2">{post.tags?.[0] || ''}</Typography>
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
            <time dateTime={post.createdAt}>{createdAt}</time>
          </Box>
        </Typography>
        <Box marginTop={2} marginBottom={10}>
          {child}
        </Box>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($pageId: String!, $language: String!) {
    # 記事を取得する
    post: notionPageBlog(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      imageNodes {
        imageUrl
        localFile {
          publicURL
        }
      }
      createdAt
      excerpt
      indexPage
      isDraft
      pageIcon
      pageId
      slug
      tags
      title
      id
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
