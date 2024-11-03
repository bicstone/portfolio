import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import NoSsr from "@mui/material/NoSsr";
import { graphql } from "gatsby";
import { type ComponentProps, forwardRef } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { TimelineArticleCard } from "./TimelineArticleCard";
import { TimelineItemCard } from "./TimelineItemCard";
import { TimelineNoteCard } from "./TimelineNoteCard";
import { TimelineOtherCard } from "./TimelineOtherCard";
import { TimelinePresentationCard } from "./TimelinePresentationCard";
import { TimelineSlideCard } from "./TimelineSlideCard";
import { CARD_HEIGHT } from "./constants";

import type {
  TimelineVirtualizedListArchivedFragment,
  TimelineVirtualizedListTimelineFragment,
} from "@/generated/graphqlTypes";

export const query = graphql`
  fragment TimelineVirtualizedListTimeline on TimelineConnection {
    nodes {
      __typename
      id
      dateX: date(formatString: "X")
      ... on ArticlesYaml {
        ...TimelineArticleCard
      }
      ... on SlidesYaml {
        ...TimelineSlideCard
      }
      ... on NotesYaml {
        ...TimelineNoteCard
      }
      ... on PresentationsYaml {
        ...TimelinePresentationCard
      }
      ... on OthersYaml {
        ...TimelineOtherCard
      }
    }
  }

  fragment TimelineVirtualizedListArchived on QiitaJsonConnection {
    nodes {
      __typename
      id
      dateX: created_at
      ...TimelineItemCard
    }
  }
`;

interface TimelineItemProps {
  item:
    | TimelineVirtualizedListTimelineFragment["nodes"][number]
    | TimelineVirtualizedListArchivedFragment["nodes"][number];
}

const TimelineItem = ({
  item,
}: TimelineItemProps): React.JSX.Element | null => {
  switch (item.__typename) {
    case "ArticlesYaml": {
      return <TimelineArticleCard key={item.id} item={item} showYear />;
    }

    case "NotesYaml": {
      return <TimelineNoteCard key={item.id} item={item} showYear />;
    }

    case "SlidesYaml": {
      return <TimelineSlideCard key={item.id} item={item} showYear />;
    }

    case "PresentationsYaml": {
      return <TimelinePresentationCard key={item.id} item={item} showYear />;
    }

    case "OthersYaml": {
      return <TimelineOtherCard key={item.id} item={item} showYear />;
    }

    case "QiitaJson": {
      return <TimelineItemCard key={item.id} item={item} />;
    }

    default: {
      return null;
    }
  }
};

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

export interface TimelineVirtualizedListProps {
  items:
    | TimelineVirtualizedListTimelineFragment
    | TimelineVirtualizedListArchivedFragment;
}

export const TimelineVirtualizedList = ({
  items,
}: TimelineVirtualizedListProps): React.JSX.Element => {
  const minHeightSingleColumn = (CARD_HEIGHT + 24) * (items.nodes.length + 1);
  const minHeightDoubleColumn = minHeightSingleColumn / 2;

  const FallBack = (): React.JSX.Element => (
    <div
      aria-busy="true"
      css={(theme) => ({
        // prevent flickering caused by virtual scrolling
        height: minHeightDoubleColumn,
        minHeight: minHeightDoubleColumn,
        [theme.breakpoints.down("md")]: {
          height: minHeightSingleColumn,
          minHeight: minHeightSingleColumn,
        },
      })}
    />
  );

  return (
    <NoSsr defer fallback={<FallBack />}>
      <VirtuosoGrid
        data={[...items.nodes]}
        components={{
          List: Container,
        }}
        itemContent={(index, item) => <TimelineItem key={index} item={item} />}
        css={(theme) => ({
          animationName: keyframes({
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          }),
          animationDuration: ".3s",
          animationTimingFunction: "ease-in",

          height: "100%",
          // prevent flickering caused by virtual scrolling
          minHeight: minHeightDoubleColumn,
          [theme.breakpoints.down("md")]: {
            minHeight: minHeightSingleColumn,
          },
        })}
        useWindowScroll
      />
    </NoSsr>
  );
};
