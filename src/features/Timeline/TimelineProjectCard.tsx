import { type CardProps } from "@mui/material/Card";
import { styled, type CSSObject } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { CodeIcon } from "@/components/logos/CodeIcon";
import { type TimelineProjectCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, projectColorTokens } from "@/layouts/themes";
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
    ...adoptColorTokens(projectColorTokens.lightColorTokens),
    [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
      projectColorTokens.darkColorTokens
    ),
  };
});

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
    <StyledTimelineCard
      avatar={<CodeIcon />}
      title={item.title}
      subTitle={subTitle}
      slug="me"
      {...props}
    />
  );
};
