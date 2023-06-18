import styled, { type CSSObject } from "@emotion/styled";
import { type CardProps } from "@mui/material/Card";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { AutoAwesomeIcon } from "@/components/logos/AutoAwesomeIcon";
import { type TimelineHistoryCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, historyColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineHistoryCard on HistoriesYaml {
    title
    date
  }
`;

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
      historyColorTokens.darkColorTokens
    ),
  };
});

export type TimelineHistoryCardProps = {
  item: TimelineHistoryCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineHistoryCard = ({
  item,
  showYear = false,
  ...props
}: TimelineHistoryCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM" : "M月");

  return (
    <StyledTimelineCard
      avatar={<AutoAwesomeIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      slug="me"
      {...props}
    />
  );
};
