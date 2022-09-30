import { graphql } from "gatsby";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps } from "gatsby";

import { BlogPostList } from "@/features/BlogPostList";
import { Head } from "@/templates/Head";

const Blog = ({ data }: PageProps<BlogPageQuery>): JSX.Element => {
  const blogPostList = data.blogPostList.nodes;
  return <BlogPostList blogPostList={blogPostList} />;
};

export default Blog;

export const query = graphql`
  query BlogPage($language: String!) {
    blogPostList: allContentfulBlogPost(
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        ...BlogPostList
      }
    }

    # gatsby-plugin-react-i18next
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

export { Head };
