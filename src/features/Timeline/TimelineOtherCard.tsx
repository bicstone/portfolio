import styled, { type CSSObject } from "@emotion/styled";
import { type CardProps } from "@mui/material/Card";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { AutoAwesomeIcon } from "@/components/icons/AutoAwesomeIcon";
import { type TimelineOtherCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, othersColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineOtherCard on OthersYaml {
    title
    date
    url
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
    ...adoptColorTokens(othersColorTokens.lightColorTokens),
    [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
      othersColorTokens.darkColorTokens,
    ),
  };
});

export type TimelineOtherCardProps = {
  item: TimelineOtherCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineOtherCard = ({
  item,
  showYear = false,
  ...props
}: TimelineOtherCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<AutoAwesomeIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
