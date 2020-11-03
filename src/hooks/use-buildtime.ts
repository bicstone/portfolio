import { useStaticQuery, graphql } from 'gatsby';
import { BuildTimeDataQuery } from '../types/graphqlTypes';

const useBuildTime: any = () => {
  const { site }: BuildTimeDataQuery = useStaticQuery(
    graphql`
      query buildTimeData {
        site {
          buildTime(formatString: "YYYY-MM-DD hh:mm:ssZ")
        }
      }
    `,
  );
  return site?.buildTime;
};

export default useBuildTime;
