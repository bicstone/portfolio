import styled, { type CSSObject } from "@emotion/styled";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import type { TimelineNoteCardFragment } from "@/generated/graphqlTypes";
import type { CardProps } from "@mui/material/Card";

import { NoteIcon } from "@/components/icons/NoteIcon";
import { type M3ColorTokens, outputColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineNoteCard on NotesYaml {
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

export type TimelineNoteCardProps = {
  item: TimelineNoteCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineNoteCard = ({
  item,
  showYear = false,
  ...props
}: TimelineNoteCardProps): React.JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<NoteIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
