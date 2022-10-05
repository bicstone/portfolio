import { useStaticQuery, graphql } from "gatsby";

import type { BuildTimeDataQuery } from "@/generated/graphqlTypes";

export const useBuildTime = (): string => {
  const { site }: BuildTimeDataQuery = useStaticQuery(
    graphql`
      query buildTimeData {
        site {
          buildTime
        }
      }
    `
  );
  return site.buildTime as string;
};
