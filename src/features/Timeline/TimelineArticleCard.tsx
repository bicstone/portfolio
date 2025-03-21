import styled, { type CSSObject } from "@emotion/styled";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import type { TimelineArticleCardFragment } from "@/generated/graphqlTypes";
import type { CardProps } from "@mui/material/Card";

import { ZennIcon } from "@/components/icons/ZennIcon";
import { type M3ColorTokens, outputColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineArticleCard on ArticlesYaml {
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

export type TimelineArticleCardProps = {
  item: TimelineArticleCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineArticleCard = ({
  item,
  showYear = false,
  ...props
}: TimelineArticleCardProps): React.JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<ZennIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
