import Box from "@mui/material/Box";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { styled } from "@mui/material/styles";
import visuallyHidden from "@mui/utils/visuallyHidden";

import { ExternalLink } from "@/components/ExternalLink";
import { CsmIcon } from "@/components/logos/CsmIcon";

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

export const BioCsmCard = (props: CardProps): JSX.Element => {
  return (
    <StyledCard {...props} title="認証情報の表示" component="article">
      <StyledCardActionArea
        href="https://certification.scrumalliance.org/accounts/1448098-takanori-oishi/certifications/1691057-csm"
        rel="external noopener"
        title="認証情報の表示"
      >
        <ExternalLink>
          <CsmIcon aria-hidden="true" />
        </ExternalLink>
        <Box sx={visuallyHidden}>Certified ScrumMaster®</Box>
        <Box sx={visuallyHidden}>
          Certified ScrumMaster® is a certification mark of Scrum Alliance, Inc.
          Any unauthorized use is strictly prohibited.
        </Box>
      </StyledCardActionArea>
    </StyledCard>
  );
};
