import styled from "@emotion/styled";
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

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: red[200],
  height: theme.spacing(4),
  width: theme.spacing(4),
}));

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
      avatar={
        <StyledAvatar variant="rounded">
          <VerifiedIcon />
        </StyledAvatar>
      }
      title={item.title}
      subTitle={subTitle}
      slug="me"
      {...props}
    />
  );
};
