import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import visuallyHidden from "@mui/utils/visuallyHidden";

import { ExternalLink } from "@/components/ExternalLink";
import { CsmIcon } from "@/components/logos/CsmIcon";

const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}) as typeof CardActionArea;

export const BioCsmCard = (props: CardProps): JSX.Element => {
  return (
    <Card {...props} title="認証情報の表示" component="article">
      <StyledCardActionArea
        href="https://certification.scrumalliance.org/accounts/1448098-takanori-oishi/certifications/1691057-csm"
        rel="external noopener"
        title="認証情報の表示"
      >
        <ExternalLink>
          <CsmIcon aria-hidden="true" />
        </ExternalLink>
        <span css={{ ...visuallyHidden }}>Certified ScrumMaster®</span>
        <span css={{ ...visuallyHidden }}>
          Certified ScrumMaster® is a certification mark of Scrum Alliance, Inc.
          Any unauthorized use is strictly prohibited.
        </span>
      </StyledCardActionArea>
    </Card>
  );
};
