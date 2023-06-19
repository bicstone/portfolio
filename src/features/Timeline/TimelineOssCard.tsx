import { type CardProps } from "@mui/material/Card";
import { styled, type CSSObject } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { GitHubLogo } from "@/components/logos/GitHubLogo";
import { type TimelineOssCardFragment } from "@/generated/graphqlTypes";
import { type M3ColorTokens, projectColorTokens } from "@/layouts/themes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineOssCard on OssesYaml {
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
    ...adoptColorTokens(projectColorTokens.lightColorTokens),
    [theme.getColorSchemeSelector("dark")]: adoptColorTokens(
      projectColorTokens.darkColorTokens
    ),
  };
});

export type TimelineOssCardProps = {
  item: TimelineOssCardFragment;
  showYear?: boolean;
} & CardProps;

export const TimelineOssCard = ({
  item,
  showYear = false,
  ...props
}: TimelineOssCardProps): JSX.Element => {
  const date = formatDateTime(item.date, showYear ? "yyyy/MM" : "M月");

  return (
    <StyledTimelineCard
      avatar={<GitHubLogo aria-hidden="true" />}
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      url={item.url}
      {...props}
    />
  );
};
