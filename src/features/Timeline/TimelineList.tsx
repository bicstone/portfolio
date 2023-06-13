import { Typography } from "@mui/material";
import { graphql } from "gatsby";

import { TimelineCard } from "./TimelineCard";

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
        title
        date
        ... on ArticlesYaml {
          url
        }
        ... on CertificationsYaml {
          endDate
        }
        ... on OssesYaml {
          url
        }
        ... on ProjectsYaml {
          endDate
        }
        ... on SlidesYaml {
          url
        }
        ... on Mdx {
          slug
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
        title
        date
        ... on CertificationsYaml {
          endDate
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
        title
        date
        ... on ArticlesYaml {
          url
        }
        ... on SlidesYaml {
          url
        }
        ... on OssesYaml {
          url
        }
        ... on Mdx {
          slug
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
        title
        date
        ... on ProjectsYaml {
          endDate
        }
        ... on OssesYaml {
          url
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
        <div
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
          {nodes.map((item) => (
            <TimelineCard key={item.id} item={item} />
          ))}
        </div>
      ))}
    </>
  );
};
