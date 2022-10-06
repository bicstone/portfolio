import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { OssCard } from "./OssCard";

import type { PortfolioOssListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioOssList on ContentfulOss {
    id
    ...PortfolioOssCard
  }
`;

export const OssList = (props: {
  osses: readonly PortfolioOssListFragment[];
}): JSX.Element => {
  const { osses } = props;

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {osses.map((oss) => (
        <OssCard key={oss.id} oss={oss} />
      ))}
    </Grid>
  );
};
