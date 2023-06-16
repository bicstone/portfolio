import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { ExternalLink } from "@/components/ExternalLink";
import { LaprasLogo } from "@/components/logos/LaprasLogo";

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
})) as typeof CardActionArea;

export const BioLaprasScoreCard = (props: CardProps): JSX.Element => {
  return (
    <StyledCard component="article" {...props}>
      <StyledCardActionArea
        href="https://lapras.com/public/bicstone"
        rel="external noopener"
        title="Lapras プロフィールを表示"
      >
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <LaprasLogo aria-hidden="true" />
            <div>
              <Typography variant="body1" component="h2">
                <ExternalLink>Lapras</ExternalLink>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                @bicstone
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="body1" component="h2">
              スキル偏差値
            </Typography>
            <Typography variant="body1">.0</Typography>
            <Typography variant="body1">.0</Typography>
            <Typography variant="body1">.0</Typography>
          </div>
        </div>
      </StyledCardActionArea>
    </StyledCard>
  );
};
