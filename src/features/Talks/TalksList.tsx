import styled from "@emotion/styled";
import { graphql } from "gatsby";

import { TalkCard } from "./TalkCard";

import type { TalksListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment TalksList on SpeakerDecksYamlConnection {
    nodes {
      ...TalkCard
    }
  }
`;

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export interface TalksListProps {
  items: TalksListFragment;
}

export const TalksList = ({ items }: TalksListProps): React.JSX.Element => (
  <Container as="section">
    {items.nodes.map((item) => (
      <TalkCard key={item.playerId} item={item} />
    ))}
  </Container>
);
