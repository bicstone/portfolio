import styled, { type CSSObject } from "@emotion/styled";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import type { TimelinePresentationCardFragment } from "@/generated/graphqlTypes";
import type { CardProps } from "@mui/material/Card";

import { EmojiPeopleIcon } from "@/components/icons/EmojiPeopleIcon";
import { type M3ColorTokens, presentationsColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelinePresentationCard on PresentationsYaml {
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
    ...adoptColorTokens(presentationsColorTokens.lightColorTokens),
    [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
      presentationsColorTokens.darkColorTokens,
    ),
  }));

export type TimelinePresentationCardProps = {
  item: TimelinePresentationCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelinePresentationCard = ({
  item,
  showYear = false,
  ...props
}: TimelinePresentationCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<EmojiPeopleIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
