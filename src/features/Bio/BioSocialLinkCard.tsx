import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import type { ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- mui types are not compatible with emotion
const StyledCard = styled(Card)({
  paddingBottom: "100%",
  position: "relative",
}) as typeof Card;

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- mui types are not compatible with emotion
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  padding: theme.spacing(2),

  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
})) as typeof CardActionArea;

export type BioHelloCardProps = CardProps & {
  avatar: ReactNode;
  title: string;
  subTitle: string;
  actionTitle: string;
  url: string;
};

export const BioSocialLinkCard = ({
  avatar,
  title,
  subTitle,
  actionTitle,
  url,
  ...props
}: BioHelloCardProps): React.JSX.Element => (
  <StyledCard {...props} component="article">
    <StyledCardActionArea
      href={url}
      rel="external noopener follow me"
      target="_blank"
      title="外部リンクのため、別ウインドウで開きます"
    >
      {avatar}
      <div
        css={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          component="h2"
          fontWeight="bold"
          css={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: theme.typography.caption.fontSize,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          })}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          css={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        >
          {subTitle}
        </Typography>
      </div>
    </StyledCardActionArea>
  </StyledCard>
);
