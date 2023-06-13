import CodeIcon from "@mui/icons-material/CodeRounded";
import Avatar from "@mui/material/Avatar";
import { type CardProps } from "@mui/material/Card";
import red from "@mui/material/colors/red";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { type TimelineProjectCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineProjectCard on ProjectsYaml {
    title
    date
    endDate
    fields {
      dateYear
      endDateYear
    }
  }
`;

export type TimelineProjectCardProps = {
  item: TimelineProjectCardFragment;
} & CardProps;

export const TimelineProjectCard = ({
  item,
  ...props
}: TimelineProjectCardProps): JSX.Element => {
  const format =
    item.fields.dateYear === item.fields.endDateYear ? "M月" : "yy年M月";
  const dateFormatted = formatDateTime(item.date, "M月");
  const endDateFormatted = formatDateTime(item.endDate, format);
  const subTitle =
    item.endDate !== "" ? (
      <>
        <time dateTime={item.date}>{dateFormatted}</time>
        {` ～ `}
        <time dateTime={item.endDate}>{endDateFormatted}</time>
      </>
    ) : (
      <>
        <time dateTime={item.date}>{dateFormatted}</time>
        {` ～`}
      </>
    );

  return (
    <TimelineCardBase
      avatar={
        <Avatar variant="rounded" css={{ background: red[200] }}>
          <CodeIcon />
        </Avatar>
      }
      title={item.title}
      subTitle={subTitle}
      slug="me"
      {...props}
    />
  );
};
