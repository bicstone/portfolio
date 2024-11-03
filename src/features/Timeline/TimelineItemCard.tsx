import styled, { type CSSObject } from "@emotion/styled";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "../Timeline/TimelineCardBase";

import type { TimelineItemCardFragment } from "@/generated/graphqlTypes";
import type { CardProps } from "@mui/material/Card";

import { QiitaIcon } from "@/components/icons/QiitaIcon";
import { type M3ColorTokens, outputColorTokens } from "@/layouts/themes";

export const query = graphql`
  fragment TimelineItemCard on QiitaJson {
    title
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

const StyledTimelineCard = styled(TimelineCardBase)(({ theme }) => ({
  ...adoptColorTokens(outputColorTokens.lightColorTokens),
  [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
    outputColorTokens.darkColorTokens,
  ),
}));

export type TimelineItemCardProps = {
  item: TimelineItemCardFragment;
} & CardProps;

export const TimelineItemCard = ({
  item,
  ...props
}: TimelineItemCardProps): React.JSX.Element => (
  <StyledTimelineCard
    avatar={<QiitaIcon aria-hidden="true" />}
    title={item.title}
    url={item.url}
    {...props}
  />
);
