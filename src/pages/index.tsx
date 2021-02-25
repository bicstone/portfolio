import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Container, Box } from '@material-ui/core';
import { Layout, HelloBox, BlogPostIndex } from 'src/components';
import { IndexPageQuery } from 'src/types';

const index: React.FC<PageProps<IndexPageQuery>> = ({ data }) => {
  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="md">
        <Box margin={2}>
          {/* 自己紹介 */}
          <HelloBox
            links={data.links.edges}
            icon={data.icon?.svg?.content || ''}
            iconAlt={data.icon?.title || ''}
          />
        </Box>
        <Box margin={2}>
          {/* ブログ記事一覧 */}
          <BlogPostIndex posts={data.posts.group} />
        </Box>
      </Container>
    </Layout>
  );
};

export default index;

export const query = graphql`
  query IndexPage($language: String!) {
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
    # ブログ記事一覧を取得する
    posts: allNotionPageBlog(sort: { fields: [tags, createdAt], order: [ASC, DESC] }) {
      group(field: tags) {
        edges {
          node {
            pageId
            slug
            title
            excerpt
            tags
            createdAt
            pageIcon
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
  }
`;
