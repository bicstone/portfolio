import styled from "@emotion/styled";
import { graphql } from "gatsby";

import type { TalkCardFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment TalkCard on SpeakerDecksYaml {
    title
    playerId
  }
`;

const IframeContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingTop: "56.25%", // 16:9 aspect ratio
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius * 2,
}));

const StyledIframe = styled("iframe")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: 0,
});

export interface TalkCardProps {
  item: TalkCardFragment;
}

export const TalkCard = ({ item }: TalkCardProps): React.JSX.Element => {
  const { playerId, title } = item;
  const iframeSrc = `https://speakerdeck.com/player/${playerId}`;

  return (
    <IframeContainer>
      <StyledIframe
        src={iframeSrc}
        title={title}
        allow="encrypted-media fullscreen"
        loading="lazy"
        allowFullScreen
      />
    </IframeContainer>
  );
};
