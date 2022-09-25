import {
  Update as UpdateIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";
import { Typography, CardActionArea, Card, Collapse } from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useBreakPoint } from "src/hooks";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { Breakpoint } from "@mui/material";

import { isDefined } from "@/utils/typeguard";

export interface BlogPostIndexProps {
  posts: BlogPageQuery["posts"]["group"];
}

/**
 * ブログ記事一覧
 * カテゴリー別に表示する
 */
export const BlogPostIndex = ({ posts }: BlogPostIndexProps): JSX.Element => {
  const breakpoints: Breakpoint[] = ["xs"];
  const width = useBreakPoint();
  const mobile = breakpoints.includes(width);

  return (
    <>
      {posts.map(({ edges }) => {
        const categoryName = edges[0].node.category.name;

        return (
          <section
            css={(theme) => ({ margin: theme.spacing(4, 0) })}
            key={categoryName}
          >
            <Typography component="h2" variant="h5" paragraph>
              {categoryName}
            </Typography>
            {edges.map(({ node }) => (
              <article
                key={categoryName + node.id}
                css={(theme) => ({ margin: theme.spacing(1, 0) })}
              >
                <Card>
                  <CardActionArea
                    component={RouterLink}
                    to={`/${node.slug}`}
                    title={node.title}
                    css={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    {/*
                      サムネ未設定が多すぎるので一度コメントアウト
                      <CardMedia>
                        <GatsbyImage
                          css={theme => ({
                            width: mobile ? theme.spacing(10) : theme.spacing(14),
                            height: mobile ? theme.spacing(10) : theme.spacing(14),
                            margin: mobile ? theme.spacing(1) : theme.spacing(2),
                            objectFit: 'cover',
                          })}
                          image={node.thumbnail.gatsbyImageData}
                          alt={node.thumbnail.title}
                        />
                      </CardMedia>
                      */}
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
                        {node.title}
                      </Typography>
                      <Collapse in={!mobile}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {node.excerpt}
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
                        {isDefined(node.updated) && (
                          <>
                            <UpdateIcon
                              fontSize="inherit"
                              css={(theme) => ({
                                marginRight: theme.spacing(0.5),
                              })}
                            />
                            <time
                              dateTime={node.updated}
                              css={(theme) => ({
                                marginRight: theme.spacing(1),
                              })}
                            >
                              {node.updatedDate}
                            </time>
                          </>
                        )}
                        {isDefined(node.created) && (
                          <>
                            <AccessTimeIcon
                              fontSize="inherit"
                              css={(theme) => ({
                                marginRight: theme.spacing(0.5),
                              })}
                            />
                            <time dateTime={node.created}>
                              {node.createdDate}
                            </time>
                          </>
                        )}
                      </Typography>
                    </div>
                  </CardActionArea>
                </Card>
              </article>
            ))}
          </section>
        );
      })}
    </>
  );
};
