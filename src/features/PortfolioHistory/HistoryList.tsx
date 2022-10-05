import { Card } from "@mui/material";
import { graphql } from "gatsby";

import { HistoryCardContent } from "./HistoryCardContent";

import type { PortfolioHistoryListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioHistoryList on ContentfulHistory {
    id
    ...PortfolioHistoryCard
  }
`;

export const HistoryList = (props: {
  histories: readonly PortfolioHistoryListFragment[];
}): JSX.Element => {
  const { histories } = props;

  return (
    <Card>
      {histories.map((history) => (
        <HistoryCardContent key={history.id} history={history} />
      ))}
    </Card>
  );
};
