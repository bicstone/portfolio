import styled from "@emotion/styled";

import { TimelineCard } from "./TimelineCard";
import { type TimelineItem } from "./utils";

const StyledTimelineCard = styled(TimelineCard)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
}));

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
