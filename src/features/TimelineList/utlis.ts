import type {
  JourneyPageQuery,
  OutputsPageQuery,
  ProjectsPageQuery,
} from "@/generated/graphqlTypes";

export type TimelineItem =
  | {
      typename: "Mdx";
      title: string;
      date: string;
      url: string;
    }
  | {
      typename: "OssesYaml" | "ArticlesYaml" | "SlidesYaml";
      title: string;
      date: string;
      url: string;
    }
  | {
      typename: "ProjectsYaml";
      title: string;
      date: string;
      endDate: string;
    }
  | {
      typename: "CertificationsYaml";
      title: string;
      date: string;
      endDate: string;
    }
  | {
      typename: "HistoriesYaml";
      title: string;
      date: string;
    };

// TODO: 型がページに依存している
export const getTimelineItems = (
  data: OutputsPageQuery | ProjectsPageQuery | JourneyPageQuery
): TimelineItem[] => {
  const timelineItems: TimelineItem[] = [];

  if ("blogPosts" in data) {
    data.blogPosts.nodes.forEach((node) => {
      timelineItems.push({
        typename: node.__typename,
        title: node.frontmatter.title,
        date: node.frontmatter.created,
        url: node.frontmatter.slug,
      });
    });
  }

  if ("outputs" in data) {
    data.outputs.nodes.forEach((node) => {
      timelineItems.push({
        typename: node.__typename,
        title: node.title,
        date: node.date,
        url: node.url,
      });
    });
  }

  if ("projects" in data) {
    data.projects.nodes.forEach((node) => {
      switch (node.__typename) {
        case "OssesYaml":
          timelineItems.push({
            typename: node.__typename,
            title: node.title,
            date: node.date,
            url: node.url,
          });
          break;
        case "ProjectsYaml":
          timelineItems.push({
            typename: node.__typename,
            title: node.title,
            date: node.date,
            endDate: node.endDate,
          });
          break;
      }
    });
  }

  if ("journeys" in data) {
    data.journeys.nodes.forEach((node) => {
      switch (node.__typename) {
        case "CertificationsYaml":
          timelineItems.push({
            typename: node.__typename,
            title: node.title,
            date: node.date,
            endDate: node.endDate,
          });
          break;
        case "HistoriesYaml":
          timelineItems.push({
            typename: node.__typename,
            title: node.title,
            date: node.date,
          });
          break;
      }
    });
  }

  const sortedTimelineItems = Array.from(timelineItems).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  });

  return sortedTimelineItems;
};
