import { useStaticQuery, graphql } from "gatsby";

import type { BuildTimeDataQuery } from "@/generated/graphqlTypes";

export type BuildTime = string | undefined;

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
