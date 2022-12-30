import AccessTimeIcon from "@mui/icons-material/AccessTimeRounded";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { graphql, Link as RouterLink } from "gatsby";
import { useMemo } from "react";

import type { BlogPostCardFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment BlogPostCard on ContentfulBlogPost {
    title
    slug
    created
  }
`;

export const BlogPostCard = (props: {
  post: BlogPostCardFragment;
}): JSX.Element => {
  const { post } = props;

  const createdDate = useMemo(
    () => formatDateTime(post.created, "yyyy/MM/dd"),
    [post.created]
  );

  return (
    // use padding because virtuoso does not support margin.
    <article css={(theme) => ({ padding: theme.spacing(0.5, 0) })}>
      <Card elevation={2}>
        <CardActionArea
          component={RouterLink}
          to={`/${post.slug}`}
          title={post.title}
          css={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            css={(theme) => ({
              display: "flex",
              flexDirection: "column",
              margin: theme.spacing(2),
              width: "100%",
              minWidth: "60%", // for overflow-wrap
              overflowWrap: "break-word",
            })}
          >
            <Typography
              variant="caption"
              color="textSecondary"
              component="div"
              css={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon
                fontSize="inherit"
                css={(theme) => ({
                  marginRight: theme.spacing(0.5),
                })}
              />
              <time dateTime={post.created}>{createdDate}</time>
            </Typography>
            <Typography component="h3" variant="h6">
              {post.title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </article>
  );
};
