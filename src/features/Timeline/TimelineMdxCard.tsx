import styled, { type CSSObject } from "@emotion/styled";
import { type CardProps } from "@mui/material/Card";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { BlogIcon } from "@/components/icons/BlogIcon";
import { type TimelineMdxCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, outputColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineMdxCard on Mdx {
    title
    date
    slug
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
      outputColorTokens.darkColorTokens
    ),
  };
});

export type TimelineMdxCardProps = {
  item: TimelineMdxCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineMdxCard = ({
  item,
  showYear = false,
  ...props
}: TimelineMdxCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM/dd" : "M月d日");

  return (
    <StyledTimelineCard
      avatar={<BlogIcon aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      slug={item.slug}
      {...props}
    />
  );
};
