import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { DescriptionIcon } from "@/components/logos/DescriptionIcon";
import { type TimelineMdxCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineMdxCard on Mdx {
    title
    date
    slug
  }
`;

export type TimelineMdxCardProps = {
  item: TimelineMdxCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineMdxCard = ({
  item,
  showYear = false,
  ...props
}: TimelineMdxCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yy/MM/dd" : "M月d日");

  return (
    <TimelineCardBase
      avatar={<DescriptionIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      slug={item.slug}
      {...props}
    />
  );
};
