import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { ZennLogo } from "@/components/logos/ZennLogo";
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
  showYear?: boolean;
} & CardProps;

export const TimelineArticleCard = ({
  item,
  showYear = false,
  ...props
}: TimelineArticleCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yy年M月d日" : "M月d日");

  return (
    <TimelineCardBase
      avatar={<ZennLogo aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
