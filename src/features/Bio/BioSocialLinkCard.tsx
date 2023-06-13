import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

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
  logo: React.ReactNode;
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
    <StyledCard {...props} component="article" css={{}}>
      <StyledCardActionArea href={url} rel="external noopener">
        <StyledLogoCard elevation={2}>{logo}</StyledLogoCard>
        <div>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {subTitle}
          </Typography>
        </div>
      </StyledCardActionArea>
    </StyledCard>
  );
};
