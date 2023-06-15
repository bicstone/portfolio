import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { AutoAwesomeIcon } from "@/components/logos/AutoAwesomeIcon";
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
      avatar={<AutoAwesomeIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      slug="me"
      {...props}
    />
  );
};
