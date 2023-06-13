import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

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
      avatar={
        <img
          alt="GitHub"
          src="/logos/github.svg"
          decoding="async"
          loading="lazy"
          width={40}
        />
      }
      title={item.title}
      subTitle={`${date} on GitHub`}
      url={item.url}
      {...props}
    />
  );
};
