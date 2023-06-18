import styled from "@emotion/styled";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MuiTimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Link from "@mui/material/Link";

import type { ReactNode } from "react";

const StyledMuiTimelineItem = styled(MuiTimelineItem)(({ theme }) => ({
  minHeight: theme.spacing(3),
  [`&:before`]: {
    flex: 0,
    padding: 0,
  },
}));

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
  padding: theme.spacing(0.25),
  margin: theme.spacing(0.5),
}));

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  whiteSpace: "normal",
  textOverflow: "ellipsis",
}));

export const TimelineItem = (props: {
  href: string;
  children: ReactNode;
  isFirstItem?: boolean;
  isLastItem?: boolean;
}): JSX.Element => {
  const { href, children, isFirstItem = false, isLastItem = false } = props;

  return (
    <StyledMuiTimelineItem>
      <TimelineSeparator>
        <TimelineConnector
          css={{ visibility: isFirstItem ? "hidden" : "visible" }}
        />
        <StyledTimelineDot color="primary" />
        <TimelineConnector
          css={{ visibility: isLastItem ? "hidden" : "visible" }}
        />
      </TimelineSeparator>
      <StyledTimelineContent>
        <Link color="inherit" variant="body2" fontWeight="bold" href={href}>
          {children}
        </Link>
      </StyledTimelineContent>
    </StyledMuiTimelineItem>
  );
};
