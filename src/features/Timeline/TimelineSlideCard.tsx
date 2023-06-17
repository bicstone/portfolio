import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { SpeakerDeckLogo } from "@/components/logos/SpeakerDeckLogo";
import { type TimelineSlideCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineSlideCard on SlidesYaml {
    title
    date
    url
  }
`;

export type TimelineSlideCardProps = {
  item: TimelineSlideCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineSlideCard = ({
  item,
  showYear = false,
  ...props
}: TimelineSlideCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yy/MM/dd" : "M月d日");

  return (
    <TimelineCardBase
      avatar={<SpeakerDeckLogo aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
