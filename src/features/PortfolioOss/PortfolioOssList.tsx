import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioOssCard } from "./PortfolioOssCard";

import type { PortfolioOssListFragment } from "@/generated/graphqlTypes";

export const PortfolioOssListQuery = graphql`
  fragment PortfolioOssList on ContentfulOss {
    id
    ...PortfolioOssCard
  }
`;

export const PortfolioOssList = (props: {
  osses: readonly PortfolioOssListFragment[];
}): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {props.osses.map((oss) => (
        <PortfolioOssCard key={oss.id} oss={oss} />
      ))}
    </Grid>
  );
};
