import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded";
import Avatar from "@mui/material/Avatar";
import { type CardProps } from "@mui/material/Card";
import red from "@mui/material/colors/red";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { type TimelineHistoryCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineHistoryCard on HistoriesYaml {
    title
    date
  }
`;

export type TimelineHistoryCardProps = {
  item: TimelineHistoryCardFragment;
} & CardProps;

export const TimelineHistoryCard = ({
  item,
  ...props
}: TimelineHistoryCardProps): JSX.Element => {
  const date = formatDateTime(item.date, "M月");

  return (
    <TimelineCardBase
      avatar={
        <Avatar variant="rounded" css={{ background: red[200] }}>
          <AutoAwesomeIcon />
        </Avatar>
      }
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      slug="me"
      {...props}
    />
  );
};
