import fs from "fs";
import path from "path";

import { createOgpImage } from "./src/utils/createOgpImage";
import { fetchLaprasActivity } from "./src/utils/fetchLaprasActivity";
import { isDefined } from "./src/utils/typeguard";

import type {
  Search,
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
 * Add Search nodes
 * Create OGP images
 * Create Zenn articles json
 * Create Speaker Deck Slides json
 */
export const createPagesStatefully: GatsbyNode["createPagesStatefully"] =
  async ({ graphql, reporter, actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;
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
     * Add Search nodes
     */
    const result = await graphql<OnCreatePagesStatefullyQuery>(/* GraphQL */ `
      query OnCreatePagesStatefully {
        blogPosts: allMdx {
          nodes {
            frontmatter {
              title
              slug
              excerpt
            }
          }
        }
        timelineItems: allTimeline {
          nodes {
            __typename
            title
            date
            ... on ArticlesYaml {
              url
            }
            ... on OssesYaml {
              url
            }
            ... on SlidesYaml {
              url
            }
            ... on Mdx {
              slug
              excerpt
            }
          }
        }
      }
    `);

    if (isDefined(result?.errors)) throw result.errors;

    const timelineList: Array<
      Pick<Search, "title" | "slug" | "url" | "excerpt">
    > = [];

    result?.data?.timelineItems?.nodes.forEach((node) => {
      switch (node.__typename) {
        case "ArticlesYaml":
        case "OssesYaml":
        case "SlidesYaml":
          timelineList.push({
            title: node.title,
            // TODO nullable
            slug: "",
            url: node.url,
            excerpt: "",
          });
          break;
        case "Mdx":
          timelineList.push({
            title: node.title,
            slug: node.slug,
            url: `/${node.slug}`,
            excerpt: node.excerpt,
          });
          break;
        case "CertificationsYaml":
          timelineList.push({
            title: node.title,
            slug: "histories",
            url: "/histories",
            excerpt: "",
          });
          break;
        case "HistoriesYaml":
          timelineList.push({
            title: node.title,
            slug: "histories",
            url: "/histories",
            excerpt: "",
          });
          break;
        case "ProjectsYaml":
          timelineList.push({
            title: node.title,
            slug: "projects",
            url: "/projects",
            excerpt: "",
          });
          break;
      }
    });

    if (!isDefined(timelineList)) throw new Error("timelineList is undefined");

    await Promise.all(
      timelineList.map(async (timeline) => {
        const node = {
          ...timeline,
          id: createNodeId(timeline.title),
          parent: null,
          children: [],
          internal: {
            type: "Search",
            contentDigest: createContentDigest(timeline),
          },
        };
        await createNode(node);
      })
    );

    reporter.success(
      `onCreatePagesStatefully: Created ${timelineList.length} search nodes`
    );

    /**
     * Create OGP images
     */

    const blogPostList = result?.data?.blogPosts?.nodes.map((node) => ({
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      excerpt: node.frontmatter.excerpt,
    }));

    if (!isDefined(blogPostList)) throw new Error("blogPostList is undefined");

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
 * Create Search schema
 * see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
 */
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    const typeDefs = /* GraphQL */ `
      interface Timeline implements Node @dontInfer {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      interface Output implements Node & Timeline @dontInfer {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      type ArticlesYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
      }

      type SlidesYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
      }

      type OssesYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        tags: [String!]!
      }

      type Mdx implements Node & Timeline & Output @dontInfer {
        frontmatter: MdxFrontmatter!
        body: String!
        tableOfContents: JSON!
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

      interface Project implements Node & Timeline @dontInfer {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      type OssesYaml implements Node & Timeline & Project @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        tags: [String!]!
      }

      type ProjectsYaml implements Node & Timeline & Project @dontInfer {
        title: String!
        date: Date! @dateformat
        endDate: Date @dateformat
        tags: [String!]!
        icon: String!
      }

      interface History implements Node & Timeline @dontInfer {
        id: ID!
        title: String!
        date: Date! @dateformat
      }

      type CertificationsYaml implements Node & Timeline & History @dontInfer {
        title: String!
        date: Date! @dateformat
        endDate: Date @dateformat
        category: String!
      }

      type HistoriesYaml implements Node & Timeline & History @dontInfer {
        title: String!
        date: Date! @dateformat
        excerpt: String!
        icon: String!
      }

      type Search implements Node @dontInfer {
        id: ID!
        title: String!
        excerpt: String!
        url: String!
        slug: String
      }
    `;

    createTypes(typeDefs);
  };
