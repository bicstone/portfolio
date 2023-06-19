import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader, { cardHeaderClasses } from "@mui/material/CardHeader";
import { Link as RouterLink } from "gatsby";

import { CARD_HEIGHT } from "./constants";

import type { ReactNode } from "react";

import { ExternalLink } from "@/components/ExternalLink";
import { isDefined } from "@/utils/typeguard";

const StyledCard = styled(Card)(({ theme }) => ({
  height: CARD_HEIGHT,
})) as typeof Card;

const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "stretch",
}) as typeof CardActionArea;

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  [`& .${cardHeaderClasses.title}`]: {
    display: "-webkit-box",
    height: "3rem",
    marginBottom: theme.spacing(1),
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    wordBreak: "break-all",
  },
})) as typeof CardHeader;

export type TimelineCardBaseProps =
  | {
      avatar: JSX.Element;
      title: string;
      subTitle: ReactNode;
      url: string;
      slug?: null;
    }
  | {
      avatar: JSX.Element;
      title: string;
      subTitle: ReactNode;
      url?: null;
      slug: string;
    };

export const TimelineCardBase = ({
  avatar,
  title,
  subTitle,
  slug,
  url,
  ...props
}: TimelineCardBaseProps & CardProps): JSX.Element => {
  const linkProps = isDefined(slug)
    ? {
        component: RouterLink,
        to: `/${slug}`,
        title,
      }
    : {
        LinkComponent: "a" as const,
        href: url,
        rel: "external noopener",
        title,
      };

  return (
    <StyledCard component="article" {...props}>
      <StyledCardActionArea {...linkProps}>
        <StyledCardHeader
          avatar={avatar}
          titleTypographyProps={{
            variant: "body1",
            component: "h3",
            fontWeight: "bold",
          }}
          title={isDefined(slug) ? title : <ExternalLink>{title}</ExternalLink>}
          subheaderTypographyProps={{
            variant: "caption",
            color: "text.secondary",
          }}
          subheader={subTitle}
        />
      </StyledCardActionArea>
    </StyledCard>
  );
};
