import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useReducer, useMemo, useCallback } from "react";

import { HistoryCard } from "./HistoryCard";

import type { PortfolioHistoryListFragment } from "@/generated/graphqlTypes";

import { BulkExpandButton } from "@/components/BulkExpandButton";
import {
  AccordionExpendReducer,
  initialState,
} from "@/reducers/AccordionExpendReducer";

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

  const [expandedIds, dispatchExpanded] = useReducer(
    AccordionExpendReducer,
    initialState
  );

  const allIds = useMemo(
    () => histories.map((history) => history.id),
    [histories]
  );

  const isAllExpanded = useMemo(
    () => expandedIds.length === allIds.length,
    [allIds.length, expandedIds.length]
  );

  const toggleBulkExpand = useCallback(() => {
    if (isAllExpanded) {
      dispatchExpanded({ type: "ALL_COLLAPSE" });
    } else {
      dispatchExpanded({ type: "ALL_EXPAND", ids: allIds });
    }
  }, [allIds, isAllExpanded]);

  const toggleExpand = useCallback((id: string): void => {
    dispatchExpanded({ type: "TOGGLE_EXPAND", id });
  }, []);

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
