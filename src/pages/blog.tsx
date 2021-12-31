import React from 'react';

import { Container } from '@mui/material';
import { graphql, PageProps } from 'gatsby';

import { Layout, BlogPostIndex } from 'src/components';
import { BlogPageQuery } from 'src/types';

const Blog: React.FC<PageProps<BlogPageQuery>> = ({ data }) => {
  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout icon={icon} iconAlt={iconAlt}>
      <Container maxWidth="lg">
        <div css={theme => ({ margin: theme.spacing(3) })}>
          {/* ブログ記事一覧 */}
          <BlogPostIndex posts={data.posts.group} />
        </div>
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
