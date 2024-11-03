import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import visuallyHidden from "@mui/utils/visuallyHidden";

import { RissIcon } from "@/components/icons/RissIcon";

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
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
})) as typeof CardActionArea;

export const BioRissCard = (props: CardProps): JSX.Element => (
    <StyledCard {...props} title="認証情報の表示" component="article">
      <StyledCardActionArea
        href="https://riss.ipa.go.jp/r?r=017758"
        rel="external noopener follow me"
        target="_blank"
        title="外部リンクのため、別ウインドウで開きます"
      >
        <RissIcon aria-hidden="true" />
        <span css={{ ...visuallyHidden }}>
          情報処理安全確保支援士 (第017758号)
        </span>
      </StyledCardActionArea>
    </StyledCard>
  );
