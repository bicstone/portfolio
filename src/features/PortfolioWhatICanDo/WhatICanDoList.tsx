import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { WhatICanDoCard } from "./WhatICanDoCard";

import type { PortfolioWhatICanDoListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioWhatICanDoList on ContentfulWhatICanDo {
    id
    ...PortfolioWhatICanDoCard
  }
`;

export const WhatICanDoList = (props: {
  whatICanDos: readonly PortfolioWhatICanDoListFragment[];
}): JSX.Element => {
  const { whatICanDos } = props;

  return (
    <Grid container spacing={2} alignItems="center">
      {whatICanDos.map((whatICanDo) => (
        <WhatICanDoCard key={whatICanDo.id} whatICanDo={whatICanDo} />
      ))}
    </Grid>
  );
};
