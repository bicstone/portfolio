import fs from "fs";
import path from "path";

import Fuse from "fuse.js";

import {
  BLOG_POST_LIST_INDEX_JSON_FILENAME,
  BLOG_POST_LIST_JSON_FILENAME,
  BLOG_POST_SEARCH_FIELDS,
} from "./src/features/BlogPostSearch/constants";
import { createOgpImage } from "./src/utils/createOgpImage";
import { fetchLaprasActivity } from "./src/utils/fetchLaprasActivity";
import { isDefined } from "./src/utils/typeguard";

import type {
  OnCreatePagesQuery,
  OnCreatePagesStatefullyQuery,
} from "./src/generated/graphqlTypes";
import type { GatsbyNode } from "gatsby";

/*
  Add import alias
*/
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

/**
 * Create blog post pages
 */
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const result = await graphql<OnCreatePagesQuery>(/* GraphQL */ `
    query OnCreatePages {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            # for relatedPosts
            tags
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
        // for relatedPosts
        tags: node.frontmatter.tags,
      },
    });
  });

  reporter.success(
    `createPages: Created ${blogPostList.length} blog post pages`
  );
};

/**
 * Copy assets to public
 * Create fuse index
 * Create OGP images
 * Create Zenn articles json
 * Create Speaker Deck Slides json
 */
export const createPagesStatefully: GatsbyNode["createPagesStatefully"] =
  async ({ graphql, reporter }) => {
    /**
     *  Copy assets to public
     */
    const sourcePath = path.resolve(process.cwd(), "content", "assets");
    const destPath = path.resolve(process.cwd(), "public", "assets");

    fs.cpSync(sourcePath, destPath, { recursive: true, force: true });

    reporter.success(
      `onCreatePagesStatefully: Copied assets from ${sourcePath} to ${destPath}`
    );

    /**
     * Fetch blog post list
     */
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

    const blogPostList = result?.data?.allMdx?.nodes.map((node) => ({
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      excerpt: node.frontmatter.excerpt,
    }));

    if (!isDefined(blogPostList)) throw new Error("blogPostList is undefined");

    /**
     * Create fuse index
     */
    const blogPostListIndex = Fuse.createIndex(
      Array.from(BLOG_POST_SEARCH_FIELDS),
      blogPostList
    ).toJSON();

    const dir = path.resolve(process.cwd(), "static");

    fs.writeFileSync(
      path.resolve(dir, BLOG_POST_LIST_JSON_FILENAME),
      JSON.stringify(blogPostList)
    );
    fs.writeFileSync(
      path.resolve(dir, BLOG_POST_LIST_INDEX_JSON_FILENAME),
      JSON.stringify(blogPostListIndex)
    );

    reporter.success(
      `onCreatePagesStatefully: Created ${blogPostList.length} blog posts index`
    );

    /**
     * Create OGP images
     */
    for (const blogPost of blogPostList) {
      await createOgpImage({
        title: blogPost.title,
        slug: blogPost.slug,
      });
    }

    reporter.success(
      `onCreatePagesStatefully: Created ${blogPostList.length} blog ogp images`
    );

    /**
     * Create Zenn articles json
     * Create Speaker Deck Slides json
     */
    await fetchLaprasActivity();

    reporter.success(
      `onCreatePagesStatefully: Created Zenn articles and Speaker Deck Slides json`
    );
  };

/**
 * Create timeline schema
 * see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
 */
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = /* GraphQL */ `
      interface Timeline implements Node {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      interface Output implements Node & Timeline {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      type ArticlesYaml implements Node & Timeline & Output {
        title: String!
        date: Date! @dateformat
        url: String!
      }

      type SlidesYaml implements Node & Timeline & Output {
        title: String!
        date: Date! @dateformat
        url: String!
      }

      type OssesYaml implements Node & Timeline & Output {
        title: String!
        date: Date! @dateformat
        url: String!
      }

      type Mdx implements Node & Timeline & Output {
        frontmatter: MdxFrontmatter
        category: String! @proxy(from: "frontmatter.category")
        date: Date! @dateformat @proxy(from: "frontmatter.date")
        excerpt: String! @proxy(from: "frontmatter.excerpt")
        redirect: String @proxy(from: "frontmatter.redirect")
        slug: String! @proxy(from: "frontmatter.slug")
        tags: [String!] @proxy(from: "frontmatter.tags")
        title: String! @proxy(from: "frontmatter.title")
        updateDate: Date @dateformat @proxy(from: "frontmatter.updateDate")
      }

      type MdxFrontmatter {
        category: String!
        date: Date! @dateformat
        excerpt: String!
        redirect: String
        slug: String!
        tags: [String!]
        title: String!
        updateDate: Date @dateformat
      }

      interface Project implements Node & Timeline {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      type OssesYaml implements Node & Timeline & Project {
        title: String!
        date: Date! @dateformat
        url: String!
      }

      type ProjectsYaml implements Node & Timeline & Project {
        title: String!
        date: Date! @dateformat
        endDate: Date @dateformat
      }

      interface History implements Node & Timeline {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      type CertificationsYaml implements Node & Timeline & History {
        title: String!
        date: Date! @dateformat
      }

      type HistoriesYaml implements Node & Timeline & History {
        title: String!
        date: Date! @dateformat
      }
    `;

    createTypes(typeDefs);
  };
