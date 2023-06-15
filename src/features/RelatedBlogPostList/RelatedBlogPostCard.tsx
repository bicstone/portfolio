import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { graphql, Link as RouterLink } from "gatsby";

import type { RelatedBlogPostCardFragment } from "@/generated/graphqlTypes";

import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  fragment RelatedBlogPostCard on Mdx {
    frontmatter {
      title
      slug
    }
  }
`;

export const RelatedBlogPostCard = (props: {
  post: RelatedBlogPostCardFragment;
}): JSX.Element => {
  const { post } = props;

  return (
    <Grid item component="article" xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea
          component={RouterLink}
          to={`/${post.frontmatter.slug}`}
          title={post.frontmatter.title}
        >
          <CardHeader
            title={
              <Typography
                component="div"
                variant="subtitle2"
                css={(theme) => {
                  const typography = theme.typography.subtitle2;
                  const fontSize = typography.fontSize;
                  const lineHeight = typography.lineHeight;

                  return {
                    wordBreak: "break-all",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    ...(isDefined(fontSize) &&
                      isDefined(lineHeight) && {
                        height: `calc(${fontSize} * ${lineHeight} * 2)`,
                      }),
                  };
                }}
              >
                {post.frontmatter.title}
              </Typography>
            }
            disableTypography
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
