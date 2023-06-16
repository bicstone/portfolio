import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import visuallyHidden from "@mui/utils/visuallyHidden";

import { ExternalLink } from "@/components/ExternalLink";
import { RissIcon } from "@/components/logos/RissIcon";

const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}) as typeof CardActionArea;

export const BioRissCard = (props: CardProps): JSX.Element => {
  return (
    <Card {...props} title="認証情報の表示" component="article">
      <StyledCardActionArea
        href="https://riss.ipa.go.jp/r?r=017758"
        rel="external noopener"
        title="認証情報の表示"
      >
        <ExternalLink>
          <RissIcon aria-hidden="true" />
        </ExternalLink>
        <span css={{ ...visuallyHidden }}>
          情報処理安全確保支援士 (第017758号)
        </span>
      </StyledCardActionArea>
    </Card>
  );
};
