import type {
  OutputsPageQuery,
  ProjectsPageQuery,
} from "@/generated/graphqlTypes";

export type TimelineItem =
  | {
      typename: "Mdx";
      title: string;
      date: string;
      endDate?: null;
      url: string;
    }
  | {
      typename: "OssesYaml" | "ArticlesYaml" | "SlidesYaml";
      title: string;
      date: string;
      endDate?: null;
      url: string;
    }
  | {
      typename: "ProjectsYaml";
      title: string;
      date: string;
      endDate: string;
      url?: null;
    };

// TODO: 型がページに依存している
export const getTimelineItems = (
  data: OutputsPageQuery | ProjectsPageQuery
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
      timelineItems.push({
        typename: node.__typename,
        title: node.title,
        date: node.date,
        url:
          "url" in node && typeof node?.url === "string" ? node.url : undefined,
      });
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
