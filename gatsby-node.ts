import path from "path";

import { isDefined } from "./src/utils/typeguard";

import type { BlogPostsQuery } from "./src/generated/graphqlTypes";
import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve("src"),
        "@/components": path.resolve("src/components"),
        "@/features": path.resolve("src/features"),
        "@/generated": path.resolve("src/generated"),
        "@/hooks": path.resolve("src/hooks"),
        "@/utils": path.resolve("src/utils"),
        "@/layouts": path.resolve("src/layouts"),
        "@/templates": path.resolve("src/templates"),
      },
    },
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result = await graphql<BlogPostsQuery>(`
    query BlogPosts {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (!isDefined(result.data)) throw new Error();

  result.data.allContentfulBlogPost.edges.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.slug,
      component: path.resolve("./src/templates/BlogPost.tsx"),
      context: {
        id: post.node.id,
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};
