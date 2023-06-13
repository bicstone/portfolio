import { type CardProps } from "@mui/material/Card";
import { graphql, withPrefix } from "gatsby";

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
          src={withPrefix("/logos/zenn.svg")}
          width={40}
        />
      }
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
