import { useStaticQuery, graphql } from "gatsby";

import type { BuildTimeDataQuery } from "src/types";

// graphqlTypesではanyとなるため型ヒントを追加
export type BuildTime = string | undefined;

/**
 * ビルドタイムを返す
 */
export const useBuildTime = (): BuildTime => {
  const { site }: BuildTimeDataQuery = useStaticQuery(
    graphql`
      query buildTimeData {
        site {
          buildTime
        }
      }
    `
  );
  return site.buildTime as BuildTime;
};
