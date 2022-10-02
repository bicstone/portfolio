import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioWhatICanDoCard } from "./PortfolioWhatICanDoCard";

import type { PortfolioWhatICanDoListFragment } from "@/generated/graphqlTypes";

export const PortfolioWhatICanDoListQuery = graphql`
  fragment PortfolioWhatICanDoList on ContentfulWhatICanDo {
    id
    ...PortfolioWhatICanDoCard
  }
`;

export const PortfolioWhatICanDoList = (props: {
  whatICanDos: PortfolioWhatICanDoListFragment[];
}): JSX.Element => {
  return (
    <Grid container spacing={2} alignItems="center">
      {props.whatICanDos.map((whatICanDo) => (
        <PortfolioWhatICanDoCard key={whatICanDo.id} whatICanDo={whatICanDo} />
      ))}
    </Grid>
  );
};
