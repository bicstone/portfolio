import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { VerifiedIcon } from "@/components/logos/VerifiedIcon";
import { type TimelineCertificationCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineCertificationCard on CertificationsYaml {
    title
    date
    endDate
  }
`;

export type TimelineCertificationCardProps = {
  item: TimelineCertificationCardFragment;
} & CardProps;

export const TimelineCertificationCard = ({
  item,
  ...props
}: TimelineCertificationCardProps): JSX.Element => {
  const dateFormatted = formatDateTime(item.date, "M月d日");
  const endDateFormatted = formatDateTime(item.endDate, "yy年M月d日");
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
      avatar={<VerifiedIcon />}
      title={item.title}
      subTitle={subTitle}
      slug="me"
      {...props}
    />
  );
};
