import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';

import { ProjectDetailDataQuery } from '../types/graphqlTypes';

interface Props extends PageProps {
  data: ProjectDetailDataQuery;
}

const home: React.FC<Props> = ({ path, data }) => {
  console.log(data);
  return <Layout pathname={path}>prjects</Layout>;
};

export default home;

export const pageQuery = graphql`
  query ProjectDetailData($id: String) {
    contentfulProject(id: { eq: $id }) {
      id
      node_locale
      name
      slug
      startDate
      during
      comment
      mainImage {
        title
        file {
          url
        }
        localFile {
          childImageSharp {
            fluid {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
      siteUrl
      sourceUrl
      role {
        name
      }
      assigne {
        name
      }
      system {
        name
      }
      language {
        name
      }
      tools {
        name
      }
    }
  }
`;
