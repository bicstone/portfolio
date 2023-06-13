import styled from "@emotion/styled";
import TextSnippetIcon from "@mui/icons-material/TextSnippetRounded";
import Avatar from "@mui/material/Avatar";
import { type CardProps } from "@mui/material/Card";
import { graphql } from "gatsby";

import { TimelineCardBase } from "./TimelineCardBase";

import { type TimelineMdxCardFragment } from "@/generated/graphqlTypes";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment TimelineMdxCard on Mdx {
    title
    date
    slug
  }
`;

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: theme.spacing(4),
  width: theme.spacing(4),
}));

export type TimelineMdxCardProps = {
  item: TimelineMdxCardFragment;
} & CardProps;

export const TimelineMdxCard = ({
  item,
  ...props
}: TimelineMdxCardProps): JSX.Element => {
  const date = formatDateTime(item.date, "M月d日");

  return (
    <TimelineCardBase
      avatar={
        <StyledAvatar variant="rounded">
          <TextSnippetIcon />
        </StyledAvatar>
      }
      title={item.title}
      subTitle={<time dateTime={item.date}>{date}</time>}
      slug={item.slug}
      {...props}
    />
  );
};
