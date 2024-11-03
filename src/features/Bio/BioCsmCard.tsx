import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import visuallyHidden from "@mui/utils/visuallyHidden";

import { CsmIcon } from "@/components/icons/CsmIcon";

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

export const BioCsmCard = (props: CardProps): React.JSX.Element => (
  <StyledCard {...props} title="認証情報の表示" component="article">
    <StyledCardActionArea
      href="https://certification.scrumalliance.org/accounts/1448098-takanori-oishi/certifications/1691057-csm"
      rel="external noopener follow me"
      target="_blank"
      title="外部リンクのため、別ウインドウで開きます"
    >
      <CsmIcon aria-hidden="true" />
      <span css={{ ...visuallyHidden }}>Certified ScrumMaster®</span>
      <span css={{ ...visuallyHidden }}>
        Certified ScrumMaster® is a certification mark of Scrum Alliance, Inc.
        Any unauthorized use is strictly prohibited.
      </span>
    </StyledCardActionArea>
  </StyledCard>
);
