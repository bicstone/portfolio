import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, PageProps } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import notionRendererFactory, { NotionRenderFuncs } from 'gatsby-source-notionso/lib/renderer';
import { Box, Breadcrumbs, Container, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  Layout,
  NotionPageBlock,
  NotionTextBlock,
  NotionCodeBlock,
  NotionImageBlock,
  NotionCodeText,
  NotionHeaderBlock,
  NotionUlListBlock,
  NotionOlListBlock,
  NotionListItemBlock,
} from 'src/components';
import { BlogPostQuery } from 'src/types';

const renderFuncs = (): NotionRenderFuncs => {
  return {
    wrapText: text => <>{text}</>,
    renderTextAtt: (children, att) => {
      const block = (() => {
        switch (att) {
          case 'i':
            return NotionCodeText({ children });
          case 'b':
            return NotionCodeText({ children });
          case 's':
            return <del>{children}</del>;
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
  const notionRenderer = notionRendererFactory({ notionPage: post });
  const child = notionRenderer.render(renderFuncs());

  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="sm">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link to="/" title={t('header.back-to-home')}>
            <Typography variant="subtitle2" gutterBottom>
              bicstone
            </Typography>
          </Link>
          <Link to="/blog/" title={t('header.back-to-home')}>
            <Typography variant="subtitle2" gutterBottom>
              まっしろブログ
            </Typography>
          </Link>
          <Link to="/blog/" title={t('header.back-to-home')}>
            <Typography variant="subtitle2" gutterBottom>
              {data.post?.tags?.[0] || ''}
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h1" paragraph>
          {data.post?.title}
        </Typography>
        <Typography align="right" variant="body2" color="textSecondary">
          {data.post?.createdAt}
        </Typography>
        <Box marginTop={3} marginBottom={10}>
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
