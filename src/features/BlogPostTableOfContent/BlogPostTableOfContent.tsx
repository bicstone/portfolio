import Timeline from "@mui/lab/Timeline";
import { graphql } from "gatsby";

import { TimelineItem } from "./TimelineItem";

import type { BlogPostTableOfContentFragment } from "@/generated/graphqlTypes";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const query = graphql`
  fragment BlogPostTableOfContent on Mdx {
    tableOfContents
  }
`;

interface TableOfContentItem {
  url: string;
  title: string;
}

export const BlogPostTableOfContent = (props: {
  post: BlogPostTableOfContentFragment;
}): JSX.Element => {
  const items = props.post.tableOfContents.items as
    | TableOfContentItem[]
    | undefined;

  return (
    <nav role="navigation" aria-label={TRANSLATION.blog.tableOfContentsTitle}>
      <Timeline>
        <TimelineItem
          href={`#${TRANSLATION.blog.introductionTitle}`}
          isFirstItem
        >
          {TRANSLATION.blog.introductionTitle}
        </TimelineItem>
        {items?.map((item, index) => (
          <TimelineItem
            key={index}
            href={item.url}
            isLastItem={items.length - 1 === index}
          >
            {item.title}
          </TimelineItem>
        ))}
      </Timeline>
    </nav>
  );
};
