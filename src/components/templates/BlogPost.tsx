import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import notionRendererFactory, { NotionRenderFuncs } from 'gatsby-source-notionso/lib/renderer';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import {
  Layout,
  NotionPageBlock,
  NotionTextBlock,
  NotionCodeBlock,
  NotionImageBlock,
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
            return <Box fontStyle="italic">{children}</Box>;
          case 'b':
            return <Box fontWeight="fontWeightBold">{children}</Box>;
          case 's':
            return <del>{children}</del>;
          case 'c':
            return <Box fontFamily="Monospace">{children}</Box>;
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
            return NotionListItemBlock({ children });
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
  const post = data.post;
  if (!post) {
    return <></>;
  }
  const notionRenderer = notionRendererFactory({ notionPage: post });
  const child = notionRenderer.render(renderFuncs());

  return (
    <Layout
      icon={data.icon?.svg?.content || ''}
      iconAlt={data.icon?.title || ''}
      breadcrumb={
        <Typography variant="h6" component="span" color="textPrimary">
          {data.post?.title}
        </Typography>
      }
    >
      <Container maxWidth="md">
        <Grid item>{child}</Grid>
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
