import styled, { type CSSObject } from "@emotion/styled";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import type { TimelineSlideCardFragment } from "@/generated/graphqlTypes";
import type { CardProps } from "@mui/material/Card";

import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { type M3ColorTokens, outputColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineSlideCard on SlidesYaml {
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

const StyledTimelineCard = styled(TimelineCardBase)(({ theme }) => ({
  ...adoptColorTokens(outputColorTokens.lightColorTokens),
  [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
    outputColorTokens.darkColorTokens,
  ),
}));

export type TimelineSlideCardProps = {
  item: TimelineSlideCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineSlideCard = ({
  item,
  showYear = false,
  ...props
}: TimelineSlideCardProps): React.JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<SpeakerDeckIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
