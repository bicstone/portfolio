import {
  Update as UpdateIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";
import { Typography, CardActionArea, Card, Collapse } from "@mui/material";
import { graphql, Link as RouterLink } from "gatsby";

import type { BlogPostCardFragment } from "@/generated/graphqlTypes";
import type { Breakpoint } from "@mui/material";

import { useBreakPoint } from "@/hooks/useBreakPoint";
import { isDefined } from "@/utils/typeguard";

export const blogPostCardFragment = graphql`
  fragment BlogPostCard on ContentfulBlogPost {
    title
    slug
    created
    createdDate: created(formatString: "yyyy/MM/DD")
    updated
    updatedDate: updated(formatString: "yyyy/MM/DD")
    excerpt
    tags {
      name
    }
    category {
      name
    }
    thumbnail {
      title
      gatsbyImageData(width: 400)
    }
  }
`;

/**
 * ブログ記事一覧
 * カテゴリー別に表示する
 */
export const BlogPostCard = (props: {
  post: BlogPostCardFragment;
}): JSX.Element => {
  const breakpoints: Breakpoint[] = ["xs"];
  const width = useBreakPoint();
  const mobile = breakpoints.includes(width);
  const post = props.post;

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
                    {post.updatedDate}
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
                  <time dateTime={post.created}>{post.createdDate}</time>
                </>
              )}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </article>
  );
};
