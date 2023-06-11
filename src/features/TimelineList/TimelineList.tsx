import styled from "@emotion/styled";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { TimelineCard } from "./TimelineCard";
import { type TimelineItem as TimelineItemType } from "./utils";

import { formatDateTime } from "@/utils/format";

const StyledTimelineCard = styled(TimelineCard)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
}));

export const TimelineList = (props: {
  items: readonly TimelineItemType[];
}): JSX.Element => {
  const { items } = props;

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {items.map((item) => (
        <TimelineItem key={item.title}>
          <TimelineOppositeContent color="text.secondary" variant="caption">
            <time dateTime={item.date}>
              {formatDateTime(item.date, "yyyy/MM/dd")}
            </time>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <StyledTimelineCard key={item.title} item={item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
