import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

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
} & CardProps;

export const TimelineSlideCard = ({
  item,
  ...props
}: TimelineSlideCardProps): JSX.Element => {
  const date = formatDateTime(item.date, "M月d日");

  return (
    <TimelineCardBase
      avatar={
        <img
          alt="Speaker Deck"
          src="/logos/speakerdeck.png"
          decoding="async"
          loading="lazy"
          width={40}
        />
      }
      title={item.title}
      subTitle={`${date} on Speaker Deck`}
      url={item.url}
      {...props}
    />
  );
};
