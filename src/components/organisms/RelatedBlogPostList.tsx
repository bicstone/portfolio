import {
  Typography,
  CardActionArea,
  Card,
  Grid,
  CardHeader,
} from "@mui/material";
import { Link as RouterLink } from "gatsby";

import type { ContentfulBlogPost, Maybe } from "src/types";

import { isDefined } from "@/utils/typeguard";

export interface RelatedBlogPostListProps {
  posts: Maybe<Array<Maybe<Pick<ContentfulBlogPost, "id" | "title" | "slug">>>>;
}

/**
 * 関連記事一覧
 */
export const RelatedBlogPostList = ({
  posts,
}: RelatedBlogPostListProps): JSX.Element => {
  return (
    <Grid container spacing={1}>
      {posts.map((post) => {
        return (
          <Grid item component="article" xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardActionArea
                component={RouterLink}
                to={`/${post.slug}`}
                title={post.title}
              >
                <CardHeader
                  title={
                    <Typography
                      component="div"
                      variant="subtitle2"
                      css={(theme) => {
                        const typography = theme.typography.subtitle2;
                        return {
                          wordBreak: "break-all",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          ...(isDefined(typography.fontSize) &&
                            isDefined(typography.lineHeight) && {
                              height: `calc(${typography.fontSize} * ${typography.lineHeight} * 2)`,
                            }),
                        };
                      }}
                    >
                      {post.title}
                    </Typography>
                  }
                  disableTypography
                />
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
