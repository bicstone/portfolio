import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import { type Feature } from "./constants";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: 0,
  paddingBottom: "52.5%" /* 1200:630 Aspect Ratio */,
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2,
}));

const StyledCardActionArea = styled(CardActionArea)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}) as typeof CardActionArea;

export const FeaturedCard = ({
  title,
  url,
  children,
}: {
  children: React.ReactNode;
} & Feature): JSX.Element => {
  return (
    <StyledCard>
      <StyledCardActionArea
        LinkComponent="a"
        href={url}
        rel="external noopener follow me"
        target="_blank"
        title={title}
      >
        {children}
      </StyledCardActionArea>
    </StyledCard>
  );
};
