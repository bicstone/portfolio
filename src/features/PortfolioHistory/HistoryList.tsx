import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useMemo } from "react";

import { HistoryCard } from "./HistoryCard";

import type { PortfolioHistoryListFragment } from "@/generated/graphqlTypes";

import { BulkExpandButton } from "@/components/BulkExpandButton";
import { useAccordionExpend } from "@/hooks/useAccordionExpend";

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

  const allIds = useMemo(
    () => histories.map((history) => history.id),
    [histories]
  );

  const { expandedIds, isAllExpanded, toggleBulkExpand, toggleExpand } =
    useAccordionExpend(allIds);

  return (
    <>
      <Typography component="div" align="right" paragraph>
        <BulkExpandButton expanded={isAllExpanded} onClick={toggleBulkExpand} />
      </Typography>
      <div>
        {histories.map((history) => (
          <HistoryCard
            key={history.id}
            history={history}
            expanded={expandedIds.includes(history.id)}
            onChange={toggleExpand}
          />
        ))}
      </div>
    </>
  );
};
