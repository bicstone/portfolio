import AccessTimeIcon from "@mui/icons-material/AccessTimeRounded";
import Card from "@mui/material/Card";
import CardActionArea, {
  type CardActionAreaProps,
} from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { graphql, Link as RouterLink } from "gatsby";
import { useMemo } from "react";

import type { BlogPostCardFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  fragment BlogPostCard on Mdx {
    frontmatter {
      title
      slug
      created
      redirect
    }
  }
`;

export type BlogPostCardProps = {
  post: BlogPostCardFragment;
} & React.HTMLAttributes<HTMLElement>;

export const BlogPostCard = ({
  post,
  ...props
}: BlogPostCardProps): JSX.Element => {
  const createdDate = useMemo(
    () => formatDateTime(post.frontmatter.created, "yyyy/MM/dd"),
    [post.frontmatter.created]
  );

  const linkProps: CardActionAreaProps = useMemo(() => {
    if (isDefined(post.frontmatter.redirect)) {
      return {
        LinkComponent: "a" as const,
        href: post.frontmatter.redirect,
        rel: "external noopener",
      };
    } else {
      return {
        component: RouterLink,
        to: `/${post.frontmatter.slug}`,
      };
    }
  }, [post.frontmatter.redirect, post.frontmatter.slug]);

  return (
    <article {...props}>
      <Card elevation={2}>
        <CardActionArea
          {...linkProps}
          title={post.frontmatter.title}
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
              <time dateTime={post.frontmatter.created}>{createdDate}</time>
            </Typography>
            <Typography component="h3" variant="h6">
              {post.frontmatter.title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </article>
  );
};
