import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { graphql } from "gatsby";

import { type FeaturedCardFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment FeaturedCard on FeaturedYaml {
    title
    ogImage
    url
  }
`;

const StyledCard = styled(Card)({
  width: "100%",
  height: 0,
  paddingBottom: "52.5%" /* 1200:630 Aspect Ratio */,
  position: "relative",
});

const StyledCardActionArea = styled(CardActionArea)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}) as typeof CardActionArea;

const StyledImage = styled("img")({
  height: "100%",
  width: "100%",
});

export const FeaturedCard = ({
  item,
}: {
  item: FeaturedCardFragment;
}): JSX.Element => {
  return (
    <StyledCard>
      <StyledCardActionArea
        LinkComponent="a"
        href={item.url}
        rel="external noopener follow me"
        target="_blank"
        title={item.title}
      >
        <StyledImage
          width={1200}
          height={630}
          src={item.ogImage}
          alt={item.title}
          decoding="async"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </StyledCardActionArea>
    </StyledCard>
  );
};
