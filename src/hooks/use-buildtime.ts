import { useStaticQuery, graphql } from 'gatsby';
import { BuildTimeDataQuery } from '../types/graphqlTypes';

// graphqlTypesではanyとなるため型ヒントを追加
export type BuildTime = string | undefined;

const useBuildTime = (): BuildTime => {
  const { site }: BuildTimeDataQuery = useStaticQuery(
    graphql`
      query buildTimeData {
        site {
          buildTime
        }
      }
    `,
  );
  return site?.buildTime as BuildTime;
};

export default useBuildTime;
