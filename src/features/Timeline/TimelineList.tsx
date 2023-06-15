import { Typography } from "@mui/material";
import { graphql } from "gatsby";

import { TimelineArticleCard } from "./TimelineArticleCard";
import { TimelineCertificationCard } from "./TimelineCertificationCard";
import { TimelineHistoryCard } from "./TimelineHistoryCard";
import { TimelineMdxCard } from "./TimelineMdxCard";
import { TimelineOssCard } from "./TimelineOssCard";
import { TimelineProjectCard } from "./TimelineProjectCard";
import { TimelineSlideCard } from "./TimelineSlideCard";

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

export const TimelineList = (props: {
  groups:
    | TimelineListTimelineFragment
    | TimelineListHistoryFragment
    | TimelineListOutputFragment
    | TimelineListProjectFragment;
}): JSX.Element => {
  const { groups } = props;
  const sortedGroups = Array.from(groups.group).sort(
    (a, b) => Number(b.dateYear) - Number(a.dateYear)
  );

  return (
    <>
      {sortedGroups.map(({ dateYear, nodes }) => (
        <section
          key={dateYear}
          id={dateYear}
          css={(theme) => ({
            display: "grid",
            gap: theme.spacing(3),
            // marginTop = (AppBar height) 6 + (div margin) 6 = 12
            // negative top margin for anchor link
            marginTop: theme.spacing(-6),
            paddingTop: theme.spacing(12),
            gridTemplateColumns: "repeat(2, 1fr)",
            width: "100%",
            [theme.breakpoints.down("md")]: {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          })}
        >
          <Typography
            variant="h6"
            component="h2"
            css={{ gridColumn: "1 / -1" }}
          >
            {dateYear}
          </Typography>
          {nodes.map((item) => {
            switch (item.__typename) {
              case "ArticlesYaml":
                return <TimelineArticleCard key={item.id} item={item} />;

              case "CertificationsYaml":
                return <TimelineCertificationCard key={item.id} item={item} />;

              case "HistoriesYaml":
                return <TimelineHistoryCard key={item.id} item={item} />;

              case "OssesYaml":
                return <TimelineOssCard key={item.id} item={item} />;

              case "ProjectsYaml":
                return <TimelineProjectCard key={item.id} item={item} />;

              case "SlidesYaml":
                return <TimelineSlideCard key={item.id} item={item} />;

              case "Mdx":
                return <TimelineMdxCard key={item.id} item={item} />;

              default:
                return null;
            }
          })}
        </section>
      ))}
    </>
  );
};
