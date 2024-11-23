import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader, { cardHeaderClasses } from "@mui/material/CardHeader";
import { Link as RouterLink } from "gatsby";

import { CARD_HEIGHT } from "./constants";

import type { ReactNode } from "react";

import { isDefined } from "@/utils/typeguard";

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- mui types are not compatible with emotion
const StyledCard = styled(Card)(({ theme }) => ({
  height: CARD_HEIGHT,
})) as typeof Card;

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- mui types are not compatible with emotion
const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "stretch",
}) as typeof CardActionArea;

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- mui types are not compatible with emotion
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
      avatar: React.JSX.Element;
      title: string;
      subTitle?: ReactNode;
      url: string;
      slug?: null;
    }
  | {
      avatar: React.JSX.Element;
      title: string;
      subTitle?: ReactNode;
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
}: TimelineCardBaseProps & CardProps): React.JSX.Element => {
  const linkProps = isDefined(slug)
    ? {
        component: RouterLink,
        to: `/${slug}`,
        title,
      }
    : {
        LinkComponent: "a" as const,
        href: url,
        rel: "external noopener follow me",
        target: "_blank",
        title: "外部リンクのため、別ウインドウで開きます",
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
          title={title}
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
