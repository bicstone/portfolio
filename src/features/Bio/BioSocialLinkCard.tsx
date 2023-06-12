import styled from "@emotion/styled";
import Button from "@mui/material/Button";
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
        <Card
          css={(theme) => ({
            width: theme.spacing(5),
            height: theme.spacing(5),
          })}
        >
          {logo}
        </Card>
        <div>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {subTitle}
          </Typography>
        </div>
        <Button variant="outlined" color="primary" size="small">
          {actionTitle}
        </Button>
      </StyledCardActionArea>
    </StyledCard>
  );
};
