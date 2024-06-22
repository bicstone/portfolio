import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import NoSsr from "@mui/material/NoSsr";
import { graphql } from "gatsby";
import { type ComponentProps, forwardRef } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { TimelineArticleCard } from "./TimelineArticleCard";
import { TimelineHistoryCard } from "./TimelineHistoryCard";
import { TimelineMdxCard } from "./TimelineMdxCard";
import { TimelineNoteCard } from "./TimelineNoteCard";
import { TimelineOssCard } from "./TimelineOssCard";
import { TimelineProjectCard } from "./TimelineProjectCard";
import { TimelineSlideCard } from "./TimelineSlideCard";
import { CARD_HEIGHT } from "./constants";

import { type TimelineVirtualizedListTimelineFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment TimelineVirtualizedListTimeline on TimelineConnection {
    nodes {
      __typename
      id
      dateX: date(formatString: "X")
      ... on ArticlesYaml {
        ...TimelineArticleCard
      }
      ... on HistoriesYaml {
        ...TimelineHistoryCard
      }
      ... on OssesYaml {
        ...TimelineOssCard
      }
      ... on ProjectsYaml {
        ...TimelineProjectCard
      }
      ... on SlidesYaml {
        ...TimelineSlideCard
      }
      ... on NotesYaml {
        ...TimelineNoteCard
      }
      ... on Mdx {
        ...TimelineMdxCard
      }
    }
  }
`;

interface TimelineItemProps {
  item: TimelineVirtualizedListTimelineFragment["nodes"][number];
}

const TimelineItem = ({ item }: TimelineItemProps): JSX.Element | null => {
  switch (item.__typename) {
    case "ArticlesYaml": {
      return <TimelineArticleCard key={item.id} item={item} showYear />;
    }

    case "HistoriesYaml": {
      return <TimelineHistoryCard key={item.id} item={item} showYear />;
    }

    case "OssesYaml": {
      return <TimelineOssCard key={item.id} item={item} showYear />;
    }

    case "NotesYaml": {
      return <TimelineNoteCard key={item.id} item={item} showYear />;
    }

    case "ProjectsYaml": {
      return <TimelineProjectCard key={item.id} item={item} showYear />;
    }

    case "SlidesYaml": {
      return <TimelineSlideCard key={item.id} item={item} showYear />;
    }

    case "Mdx": {
      return <TimelineMdxCard key={item.id} item={item} showYear />;
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
  items: TimelineVirtualizedListTimelineFragment;
}

export const TimelineVirtualizedList = ({
  items,
}: TimelineVirtualizedListProps): JSX.Element => {
  const minHeightSingleColumn = (CARD_HEIGHT + 24) * (items.nodes.length + 1);
  const minHeightDoubleColumn = minHeightSingleColumn / 2;

  // XXX: Gatsby でなぜかソートされないことがあるため
  // クライアント側でもう一回ソートする
  // 重くなるため早めに原因特定したい
  const sortedItems = Array.from(items.nodes).sort((a, b) => {
    return Number(b.dateX) - Number(a.dateX);
  });

  const FallBack = (): JSX.Element => (
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
        data={sortedItems}
        components={{
          // XXX: override type definition
          List: Container as React.FunctionComponent,
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
