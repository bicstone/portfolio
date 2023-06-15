import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { GitHubLogo } from "@/components/logos/GitHubLogo";
import { type TimelineOssCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineOssCard on OssesYaml {
    title
    date
    url
  }
`;

export type TimelineOssCardProps = {
  item: TimelineOssCardFragment;
} & CardProps;

export const TimelineOssCard = ({
  item,
  ...props
}: TimelineOssCardProps): JSX.Element => {
  const date = formatDateTime(item.date, "M月");

  return (
    <TimelineCardBase
      avatar={<GitHubLogo aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};