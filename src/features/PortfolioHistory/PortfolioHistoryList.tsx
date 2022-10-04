import { Card } from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioHistoryCardContent } from "./PortfolioHistoryCardContent";

import type { PortfolioHistoryListFragment } from "@/generated/graphqlTypes";

export const PortfolioHistoryListQuery = graphql`
  fragment PortfolioHistoryList on ContentfulHistory {
    id
    ...PortfolioHistoryCard
  }
`;

export const PortfolioHistoryList = (props: {
  histories: readonly PortfolioHistoryListFragment[];
}): JSX.Element => {
  return (
    <Card>
      {props.histories.map((history) => (
        <PortfolioHistoryCardContent key={history.id} history={history} />
      ))}
    </Card>
  );
};
