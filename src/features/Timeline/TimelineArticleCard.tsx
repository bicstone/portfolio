import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { type TimelineArticleCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineArticleCard on ArticlesYaml {
    title
    date
    url
  }
`;

export type TimelineArticleCardProps = {
  item: TimelineArticleCardFragment;
} & CardProps;

export const TimelineArticleCard = ({
  item,
  ...props
}: TimelineArticleCardProps): JSX.Element => {
  const date = formatDateTime(item.date, "M月d日");

  return (
    <TimelineCardBase
      avatar={
        <img
          alt="zenn"
          decoding="async"
          loading="lazy"
          src="/logos/zenn.svg"
          width={40}
        />
      }
      title={item.title}
      subTitle={`${date} on Zenn`}
      url={item.url}
      {...props}
    />
  );
};
