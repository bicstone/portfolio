import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { CodeIcon } from "@/components/logos/CodeIcon";
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
  showYear?: boolean;
} & CardProps;

export const TimelineProjectCard = ({
  item,
  showYear = false,
  ...props
}: TimelineProjectCardProps): JSX.Element => {
  const endDateFormat =
    item.fields.dateYear === item.fields.endDateYear ? "M月" : "yy年M月";
  const dateFormatted = formatDateTime(item.date, showYear ? "yyyy/MM" : "M月");
  const endDateFormatted = formatDateTime(
    item.endDate,
    showYear ? "yyyy/MM" : endDateFormat
  );
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
      avatar={<CodeIcon />}
      title={item.title}
      subTitle={subTitle}
      slug="me"
      {...props}
    />
  );
};
