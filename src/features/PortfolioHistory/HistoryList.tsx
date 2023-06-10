import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import { HistoryCard } from "./HistoryCard";

import type { PortfolioHistoryListFragment } from "@/generated/graphqlTypes";

import { BulkExpandButton } from "@/components/BulkExpandButton";
import { useAccordionExpend } from "@/hooks/useAccordionExpend";

export const query = graphql`
  fragment PortfolioHistoryList on HistoriesYamlConnection {
    nodes {
      id
      ...PortfolioHistoryCard
    }
  }
`;

export const HistoryList = (props: {
  histories: PortfolioHistoryListFragment;
}): JSX.Element => {
  const { histories } = props;

  const allIds = histories.nodes.map((history) => history.id);

  const { expandedIds, isAllExpanded, toggleBulkExpand, toggleExpand } =
    useAccordionExpend(allIds);

  return (
    <>
      <Typography component="div" align="right" paragraph>
        <BulkExpandButton expanded={isAllExpanded} onClick={toggleBulkExpand} />
      </Typography>
      <div>
        {histories.nodes.map((history) => (
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
