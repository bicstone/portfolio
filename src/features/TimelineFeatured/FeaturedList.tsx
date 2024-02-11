import styled from "@emotion/styled";
import { graphql } from "gatsby";

import { FeaturedCard } from "./FeaturedCard";

import { type FeaturedListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment FeaturedList on FeaturedYamlConnection {
    nodes {
      __typename
      id
      ...FeaturedCard
    }
  }
`;

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const FeaturedList = ({
  items,
}: {
  items: FeaturedListFragment;
}): JSX.Element => {
  return (
    <Container as="section">
      {items.nodes.map((item) => (
        <FeaturedCard key={item.id} item={item} />
      ))}
    </Container>
  );
};
