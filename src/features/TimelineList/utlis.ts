import type { OutputsPageQuery } from "@/generated/graphqlTypes";

export interface TimelineItem {
  typename: string;
  title: string;
  date: string;
  url: string;
}

// TODO: 型がページに依存
export const getTimelineItems = (data: OutputsPageQuery): TimelineItem[] => {
  const timelineItems: TimelineItem[] = [];

  data.blogPosts.nodes.forEach((node) => {
    timelineItems.push({
      typename: node.__typename,
      title: node.frontmatter.title,
      date: node.frontmatter.created,
      url: node.frontmatter.slug,
    });
  });

  data.outputs.nodes.forEach((node) => {
    timelineItems.push({
      typename: node.__typename,
      title: node.title,
      date: node.date,
      url: node.url,
    });
  });

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
