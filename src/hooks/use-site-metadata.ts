import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetaDataQuery } from '../types/graphqlTypes';

const useSiteMetadata = () => {
  const { site }: SiteMetaDataQuery = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title {
              ja
              en
            }
            shortTitle {
              ja
              en
            }
            url {
              ja
              en
            }
            description {
              ja
              en
            }
            icon {
              src
              sizes
              type
            }
            backgroundColor
            themeColor
          }
        }
      }
    `,
  );
  return site?.siteMetadata;
};

export default useSiteMetadata;
