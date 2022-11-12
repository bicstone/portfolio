import { promises as fs } from "fs";
import path from "path";

import Fuse from "fuse.js";

import {
  BLOG_POST_LIST_INDEX_JSON_FILENAME,
  BLOG_POST_LIST_JSON_FILENAME,
  BLOG_POST_SEARCH_FIELDS,
} from "./src/features/BlogPostSearch/constants";
import { isDefined } from "./src/utils/typeguard";

import type { OnCreatePagesStatefullyQuery } from "./src/generated/graphqlTypes";
import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // see tsconfig.json
        "@/constants": path.resolve("src/constants"),
        "@/components": path.resolve("src/components"),
        "@/features": path.resolve("src/features"),
        "@/generated": path.resolve("src/generated"),
        "@/hooks": path.resolve("src/hooks"),
        "@/utils": path.resolve("src/utils"),
        "@/layouts": path.resolve("src/layouts"),
      },
    },
  });
};

export const createPagesStatefully: GatsbyNode["createPagesStatefully"] =
  async ({ graphql, reporter }) => {
    const result = await graphql<OnCreatePagesStatefullyQuery>(`
      query OnCreatePagesStatefully {
        allContentfulBlogPost(sort: { created: DESC }) {
          nodes {
            # see BLOG_POST_SEARCH_FIELDS
            title
            slug
            excerpt
          }
        }
      }
    `);

    if (isDefined(result?.errors)) throw result.errors;

    const blogPostList = result?.data?.allContentfulBlogPost?.nodes;

    if (!isDefined(blogPostList)) throw new Error();

    const blogPostListIndex = Fuse.createIndex(
      Array.from(BLOG_POST_SEARCH_FIELDS),
      blogPostList
    ).toJSON();

    const dir = path.resolve(process.cwd(), "static");

    await Promise.all([
      fs.writeFile(
        path.resolve(dir, BLOG_POST_LIST_JSON_FILENAME),
        JSON.stringify(blogPostList)
      ),
      fs.writeFile(
        path.resolve(dir, BLOG_POST_LIST_INDEX_JSON_FILENAME),
        JSON.stringify(blogPostListIndex)
      ),
    ]);

    reporter.success(
      `onCreatePagesStatefully: Created ${blogPostList.length} blog posts index`
    );
  };
