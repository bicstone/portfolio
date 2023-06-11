import styled from "@emotion/styled";

import { TimelineCard } from "./TimelineCard";

import {
  type OutputsPageQuery,
  type HistoryPageQuery,
  type TimelinePageQuery,
  type ProjectsPageQuery,
} from "@/generated/graphqlTypes";

const StyledTimelineCard = styled(TimelineCard)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
}));

// TODO
export type TimelineItem =
  | HistoryPageQuery["histories"]["nodes"][number]
  | OutputsPageQuery["outputs"]["nodes"][number]
  | TimelinePageQuery["timelineItems"]["nodes"][number]
  | ProjectsPageQuery["projects"]["nodes"][number];

export const TimelineList = (props: {
  items: readonly TimelineItem[];
}): JSX.Element => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <StyledTimelineCard key={item.title} item={item} />
      ))}
    </>
  );
};
