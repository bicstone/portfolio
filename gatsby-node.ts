import { promises as fs } from "fs";
import path from "path";

import Fuse from "fuse.js";

import {
  BLOG_POST_LIST_INDEX_JSON_FILENAME,
  BLOG_POST_LIST_JSON_FILENAME,
  BLOG_POST_SEARCH_FIELDS,
} from "./src/features/BlogPostSearch/constants";
import { createOgpImage } from "./src/utils/createOgpImage";
import { isDefined } from "./src/utils/typeguard";

import type {
  OnCreatePagesQuery,
  OnCreatePagesStatefullyQuery,
} from "./src/generated/graphqlTypes";
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

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const result = await graphql<OnCreatePagesQuery>(/* GraphQL */ `
    query OnCreatePages {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (isDefined(result?.errors)) throw result.errors;

  const blogPostList = result?.data?.allMdx?.nodes;

  if (!isDefined(blogPostList)) throw new Error("blogPostList is undefined");

  const TemplatePath = path.resolve(
    process.cwd(),
    "src",
    "templates",
    "BlogPost.tsx"
  );

  blogPostList.forEach((node) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: `${TemplatePath}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};

export const createPagesStatefully: GatsbyNode["createPagesStatefully"] =
  async ({ graphql, reporter }) => {
    const result = await graphql<OnCreatePagesStatefullyQuery>(/* GraphQL */ `
      query OnCreatePagesStatefully {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              excerpt
            }
          }
        }
      }
    `);

    if (isDefined(result?.errors)) throw result.errors;

    const blogPostList = result?.data?.allMdx?.nodes;

    if (!isDefined(blogPostList)) throw new Error("blogPostList is undefined");

    const blogPostListIndex = Fuse.createIndex(
      Array.from(BLOG_POST_SEARCH_FIELDS),
      blogPostList
    ).toJSON();

    const dir = path.resolve(process.cwd(), "static");

    // MEMO: Writing files in parallel can speed up the process,
    // but will cause non-reproducible errors, so write in series.
    await fs.writeFile(
      path.resolve(dir, BLOG_POST_LIST_JSON_FILENAME),
      JSON.stringify(blogPostList)
    );
    await fs.writeFile(
      path.resolve(dir, BLOG_POST_LIST_INDEX_JSON_FILENAME),
      JSON.stringify(blogPostListIndex)
    );

    reporter.success(
      `onCreatePagesStatefully: Created ${blogPostList.length} blog posts index`
    );

    // MEMO: Writing files in parallel can speed up the process,
    // but will cause non-reproducible errors, so write in series.
    for (const blogPost of blogPostList) {
      await createOgpImage({
        title: blogPost.frontmatter.title,
        slug: blogPost.frontmatter.slug,
      });
    }

    reporter.success(
      `onCreatePagesStatefully: Created ${blogPostList.length} blog ogp images`
    );
  };
