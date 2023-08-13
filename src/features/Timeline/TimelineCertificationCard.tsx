import styled, { type CSSObject } from "@emotion/styled";
import { type CardProps } from "@mui/material/Card";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { VerifiedIcon } from "@/components/icons/VerifiedIcon";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { type TimelineCertificationCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, historyColorTokens } from "@/layouts/themes";
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
  showYear?: boolean;
} & CardProps;

const adoptColorTokens = (colorTokens: M3ColorTokens): CSSObject => {
  const background = colorTokens.surfaceVariant;
  const color = colorTokens.onSurface;

  return {
    background,
    color,
    "&:hover": {
      background: alpha(background, 0.8),
    },
  };
};

const StyledTimelineCard = styled(TimelineCardBase)(({ theme }) => {
  return {
    ...adoptColorTokens(historyColorTokens.lightColorTokens),
    [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
      historyColorTokens.darkColorTokens,
    ),
  };
});

export const TimelineCertificationCard = ({
  item,
  showYear = false,
  ...props
}: TimelineCertificationCardProps): JSX.Element => {
  const dateFormatted = formatDateTime(
    item.date,
    showYear ? "yyyy/MM/dd" : "M月d日",
  );
  const endDateFormatted = formatDateTime(
    item.endDate,
    showYear ? "yyyy/MM/dd" : "yy年M月d日",
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
    <StyledTimelineCard
      avatar={<VerifiedIcon />}
      title={item.title}
      subTitle={subTitle}
      url={SITE_METADATA.profileLink}
      {...props}
    />
  );
};
