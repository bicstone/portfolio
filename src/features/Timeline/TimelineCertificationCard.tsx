import VerifiedIcon from "@mui/icons-material/VerifiedRounded";
import Avatar from "@mui/material/Avatar";
import { type CardProps } from "@mui/material/Card";
import red from "@mui/material/colors/red";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

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
  const endDateFormatted = formatDateTime(item.endDate, "yyyy年M月d日");
  const subTitle =
    item.endDate !== ""
      ? `${dateFormatted} ～ ${endDateFormatted}`
      : `${dateFormatted}`;

  return (
    <TimelineCardBase
      avatar={
        <Avatar variant="rounded" css={{ background: red[200] }}>
          <VerifiedIcon />
        </Avatar>
      }
      title={item.title}
      subTitle={subTitle}
      slug="me"
      {...props}
    />
  );
};
