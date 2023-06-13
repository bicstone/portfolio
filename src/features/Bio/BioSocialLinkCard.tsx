import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { ExternalLink } from "@/components/ExternalLink";

const StyledCard = styled(Card)({
  paddingBottom: "100%",
  position: "relative",
}) as typeof Card;

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

const StyledLogoCard = styled(Card)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
}));

export type BioHelloCardProps = CardProps & {
  logo: string;
  title: string;
  subTitle: string;
  actionTitle: string;
  url: string;
};

export const BioSocialLinkCard = ({
  logo,
  title,
  subTitle,
  actionTitle,
  url,
  ...props
}: BioHelloCardProps): JSX.Element => {
  return (
    <StyledCard {...props} component="article">
      <StyledCardActionArea href={url} rel="external noopener" title={title}>
        <StyledLogoCard>
          <img
            width={32}
            src={logo}
            alt={title}
            loading="eager"
            decoding="async"
          />
        </StyledLogoCard>
        <div>
          <Typography variant="body1">
            <ExternalLink>{title}</ExternalLink>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {subTitle}
          </Typography>
        </div>
      </StyledCardActionArea>
    </StyledCard>
  );
};
