import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { ExternalLink } from "@/components/ExternalLink";
import score from "@/content/findy/scores.json";

const StyledCard = styled(Card)({
  paddingBottom: "50%",
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

export const BioFindyScoreCard = (props: CardProps): JSX.Element => {
  const roundedDeviation = Math.floor(score.totalDeviation);

  return (
    <StyledCard component="article" {...props}>
      <StyledCardActionArea
        href="https://findy-code.io/share_profiles/AKvsozgldUI4i"
        rel="external noopener"
        title="Findyプロフィールを表示"
      >
        Q
        <div>
          <Typography variant="body1" component="h2">
            <ExternalLink>Findy</ExternalLink>
          </Typography>
          <Typography variant="body2" color="secondary">
            スキル偏差値
          </Typography>
          <Typography variant="body2" color="secondary">
            {roundedDeviation}
          </Typography>
        </div>
      </StyledCardActionArea>
    </StyledCard>
  );
};
