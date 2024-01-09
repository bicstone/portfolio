import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { type ComponentProps, forwardRef, Fragment } from "react";

import { TimelineArticleCard } from "./TimelineArticleCard";
import { TimelineCertificationCard } from "./TimelineCertificationCard";
import { TimelineHistoryCard } from "./TimelineHistoryCard";
import { TimelineMdxCard } from "./TimelineMdxCard";
import { TimelineNoteCard } from "./TimelineNoteCard";
import { TimelineOssCard } from "./TimelineOssCard";
import { TimelineProjectCard } from "./TimelineProjectCard";
import { TimelineSlideCard } from "./TimelineSlideCard";

import { Spacer } from "@/components/Spacer";
import {
  type TimelineListOutputFragment,
  type TimelineListHistoryFragment,
  type TimelineListTimelineFragment,
  type TimelineListProjectFragment,
} from "@/generated/graphqlTypes";

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
        ... on CertificationsYaml {
          ...TimelineCertificationCard
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
  }

  fragment TimelineListHistory on HistoryConnection {
    group(field: { fields: { dateYear: SELECT } }) {
      dateYear: fieldValue
      nodes {
        __typename
        id
        ... on CertificationsYaml {
          ...TimelineCertificationCard
        }
        ... on HistoriesYaml {
          ...TimelineHistoryCard
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
        ... on OssesYaml {
          ...TimelineOssCard
        }
        ... on NotesYaml {
          ...TimelineNoteCard
        }
        ... on Mdx {
          ...TimelineMdxCard
        }
      }
    }
  }

  fragment TimelineListProject on ProjectConnection {
    group(field: { fields: { dateYear: SELECT } }) {
      dateYear: fieldValue
      nodes {
        __typename
        id
        ... on ProjectsYaml {
          ...TimelineProjectCard
        }
        ... on OssesYaml {
          ...TimelineOssCard
        }
      }
    }
  }
`;

interface TimelineItemProps {
  item: TimelineListProps["groups"]["group"][number]["nodes"][number];
}

const TimelineItem = ({ item }: TimelineItemProps): JSX.Element | null => {
  switch (item.__typename) {
    case "ArticlesYaml": {
      return <TimelineArticleCard key={item.id} item={item} />;
    }

    case "CertificationsYaml": {
      return <TimelineCertificationCard key={item.id} item={item} />;
    }

    case "HistoriesYaml": {
      return <TimelineHistoryCard key={item.id} item={item} />;
    }

    case "OssesYaml": {
      return <TimelineOssCard key={item.id} item={item} />;
    }

    case "NotesYaml": {
      return <TimelineNoteCard key={item.id} item={item} />;
    }

    case "ProjectsYaml": {
      return <TimelineProjectCard key={item.id} item={item} />;
    }

    case "SlidesYaml": {
      return <TimelineSlideCard key={item.id} item={item} />;
    }

    case "Mdx": {
      return <TimelineMdxCard key={item.id} item={item} />;
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

export interface TimelineListProps {
  groups:
    | TimelineListTimelineFragment
    | TimelineListHistoryFragment
    | TimelineListOutputFragment
    | TimelineListProjectFragment;
}

export const TimelineList = ({ groups }: TimelineListProps): JSX.Element => {
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
