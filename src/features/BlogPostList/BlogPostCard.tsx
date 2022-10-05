import {
  Update as UpdateIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";
import {
  Typography,
  CardActionArea,
  Card,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import { graphql, Link as RouterLink } from "gatsby";
import { useMemo } from "react";

import type { BlogPostCardFragment } from "@/generated/graphqlTypes";

import { useTheme } from "@/hooks/useTheme";
import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  fragment BlogPostCard on ContentfulBlogPost {
    title
    slug
    created
    updated
    excerpt
  }
`;

export const BlogPostCard = (props: {
  post: BlogPostCardFragment;
}): JSX.Element => {
  const { post } = props;

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const createdDate = useMemo(
    () => formatDateTime(post.created, "yyyy/MM/dd"),
    [post.created]
  );
  const updatedDate = useMemo(
    () => formatDateTime(post.updated, "yyyy/MM/dd"),
    [post.updated]
  );

  return (
    <article css={(theme) => ({ margin: theme.spacing(1, 0) })}>
      <Card>
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
            <Typography component="h3" variant="h6">
              {post.title}
            </Typography>
            <Collapse in={!mobile}>
              <Typography variant="body2" color="text.secondary" paragraph>
                {post.excerpt}
              </Typography>
            </Collapse>
            <Typography
              variant="caption"
              color="textSecondary"
              component="div"
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {isDefined(post.updated) && (
                <>
                  <UpdateIcon
                    fontSize="inherit"
                    css={(theme) => ({
                      marginRight: theme.spacing(0.5),
                    })}
                  />
                  <time
                    dateTime={post.updated}
                    css={(theme) => ({
                      marginRight: theme.spacing(1),
                    })}
                  >
                    {updatedDate}
                  </time>
                </>
              )}
              {isDefined(post.created) && (
                <>
                  <AccessTimeIcon
                    fontSize="inherit"
                    css={(theme) => ({
                      marginRight: theme.spacing(0.5),
                    })}
                  />
                  <time dateTime={post.created}>{createdDate}</time>
                </>
              )}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </article>
  );
};
