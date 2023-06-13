import TextSnippetIcon from "@mui/icons-material/TextSnippetRounded";
import Avatar from "@mui/material/Avatar";
import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

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
} & CardProps;

export const TimelineMdxCard = ({
  item,
  ...props
}: TimelineMdxCardProps): JSX.Element => {
  const date = formatDateTime(item.date, "M月d日");

  return (
    <TimelineCardBase
      avatar={
        <Avatar variant="rounded">
          <TextSnippetIcon />
        </Avatar>
      }
      title={item.title}
      subTitle={date}
      slug={item.slug}
      {...props}
    />
  );
};
