import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { type ComponentProps, forwardRef } from "react";

import { TimelineItemCard } from "./TimelineItemCard";

import type { TimelineArchivedListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment TimelineArchivedList on QiitaJsonConnection {
    nodes {
      id
      ...TimelineItemCard
    }
  }
`;

const ContainerBase = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

const Container = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ContainerBase>
>((props, ref) => <ContainerBase {...props} ref={ref} />);

Container.displayName = "Container";

export interface ArchivedListProps {
  items: TimelineArchivedListFragment;
}

export const ArchivedList = ({ items }: ArchivedListProps): JSX.Element => (
    <Container as="section">
      {items.nodes.map((item) => (
        <TimelineItemCard key={item.id} item={item} />
      ))}
    </Container>
  );
