import styled, { type CSSObject } from "@emotion/styled";
import { type CardProps } from "@mui/material/Card";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { QiitaIcon } from "@/components/icons/QiitaIcon";
import { type TimelineItemCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, outputColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineItemCard on ItemsYaml {
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
    ...adoptColorTokens(outputColorTokens.lightColorTokens),
    [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
      outputColorTokens.darkColorTokens,
    ),
  };
});

export type TimelineItemCardProps = {
  item: TimelineItemCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineItemCard = ({
  item,
  showYear = false,
  ...props
}: TimelineItemCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<QiitaIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
