import { type CardProps } from "@mui/material/Card";
import { graphql, withPrefix } from "gatsby";

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
        <>
          <img
            alt="GitHub"
            src={withPrefix("/logos/github.svg")}
            decoding="async"
            loading="lazy"
            width={32}
            height={32}
            css={{
              display: "block",
              '[data-mui-color-scheme="dark"] &': {
                display: "none",
              },
            }}
          />
          <img
            alt="GitHub"
            src={withPrefix("/logos/github_white.svg")}
            decoding="async"
            loading="lazy"
            width={32}
            height={32}
            css={{
              display: "none",
              '[data-mui-color-scheme="dark"] &': {
                display: "block",
              },
            }}
          />
        </>
      }
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
