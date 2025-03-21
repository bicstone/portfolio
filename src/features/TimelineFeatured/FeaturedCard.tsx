import styled from "@emotion/styled";
import CardActionArea from "@mui/material/CardActionArea";

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- mui types are not compatible with emotion
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  display: "block",
  height: 0,
  overflow: "hidden",
  paddingBottom: "52.5%" /* 1200:630 Aspect Ratio */,
  position: "relative",
  width: "100%",
})) as typeof CardActionArea;

export const FeaturedCard = ({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: React.ReactNode;
}): React.JSX.Element => (
  <article>
    <StyledCardActionArea
      LinkComponent="a"
      href={url}
      rel="external noopener follow me"
      target="_blank"
      title={title}
    >
      {children}
    </StyledCardActionArea>
  </article>
);
