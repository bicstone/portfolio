import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { type ComponentProps, forwardRef, Fragment } from "react";

import { TimelineArticleCard } from "./TimelineArticleCard";
import { TimelineNoteCard } from "./TimelineNoteCard";
import { TimelineOtherCard } from "./TimelineOtherCard";
import { TimelinePresentationCard } from "./TimelinePresentationCard";
import { TimelineSlideCard } from "./TimelineSlideCard";

import type {
  TimelineListOutputFragment,
  TimelineListTimelineFragment,
} from "@/generated/graphqlTypes";

import { Spacer } from "@/components/Spacer";

export const query = graphql`
  fragment TimelineListTimeline on TimelineConnection {
    group(field: { fields: { dateYear: SELECT } }) {
      dateYear: fieldValue
      nodes {
        __typename
        id
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
  }

  fragment TimelineListOutput on OutputConnection {
    group(field: { fields: { dateYear: SELECT } }) {
      dateYear: fieldValue
      nodes {
        __typename
        id
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
  }
`;

interface TimelineItemProps {
  item: TimelineListProps["groups"]["group"][number]["nodes"][number];
}

export const TimelineItem = ({
  item,
}: TimelineItemProps): React.JSX.Element | null => {
  switch (item.__typename) {
    case "ArticlesYaml": {
      return <TimelineArticleCard key={item.id} item={item} />;
    }

    case "NotesYaml": {
      return <TimelineNoteCard key={item.id} item={item} />;
    }

    case "SlidesYaml": {
      return <TimelineSlideCard key={item.id} item={item} />;
    }

    case "PresentationsYaml": {
      return <TimelinePresentationCard key={item.id} item={item} />;
    }

    case "OthersYaml": {
      return <TimelineOtherCard key={item.id} item={item} />;
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

export interface TimelineListProps {
  groups: TimelineListTimelineFragment | TimelineListOutputFragment;
}

export const TimelineList = ({
  groups,
}: TimelineListProps): React.JSX.Element => {
  const sortedGroups = Array.from(groups.group).sort(
    (a, b) => Number(b.dateYear) - Number(a.dateYear),
  );

  return (
    <>
      {sortedGroups.map(({ dateYear, nodes }) => (
        <Fragment key={dateYear}>
          <Spacer y={6} />
          <Container as="section">
            <Typography
              variant="h6"
              component="h2"
              css={{ gridColumn: "1 / -1" }}
            >
              {dateYear}
            </Typography>
            {nodes.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </Container>
        </Fragment>
      ))}
    </>
  );
};
