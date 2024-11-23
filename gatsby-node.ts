import path from "path";

import { formatInTimeZone } from "date-fns-tz";

import { isDefined } from "./src/utils/typeguard";

import type {
  Search,
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
        "@/content": path.resolve("content"),
        "@/components": path.resolve("src/components"),
        "@/features": path.resolve("src/features"),
        "@/generated": path.resolve("src/generated"),
        "@/utils": path.resolve("src/utils"),
        "@/layouts": path.resolve("src/layouts"),
      },
    },
  });
};

/**
 * Add Search nodes
 */
export const createPagesStatefully: GatsbyNode["createPagesStatefully"] =
  async ({ graphql, reporter, actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    /**
     * Add Search nodes
     */
    const result = await graphql<OnCreatePagesStatefullyQuery>(/* GraphQL */ `
      query OnCreatePagesStatefully {
        timelineItems: allTimeline {
          nodes {
            __typename
            title
            date
            ... on ArticlesYaml {
              url
            }
            ... on SlidesYaml {
              url
            }
            ... on NotesYaml {
              url
            }
            ... on PresentationsYaml {
              url
            }
            ... on OthersYaml {
              url
            }
          }
        }
        qiitaItems: allQiitaJson {
          nodes {
            title
            url
          }
        }
      }
    `);

    if (isDefined(result.errors)) throw result.errors;

    const timelineList: Array<
      Pick<Search, "title" | "slug" | "url" | "excerpt">
    > = [];

    result.data?.timelineItems.nodes.forEach((node) => {
      timelineList.push({
        title: node.title,
        slug: "",
        url: node.url,
        excerpt: "",
      });
    });

    result.data?.qiitaItems.nodes.forEach((node) => {
      timelineList.push({
        title: node.title,
        slug: "",
        url: node.url,
        excerpt: "",
      });
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
      }),
    );

    reporter.success(
      `onCreatePagesStatefully: Created ${timelineList.length} search nodes`,
    );
  };

/**
 * GraphQL Schema
 * see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
 */
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    const typeDefs = /* GraphQL */ `
      type TimelineFields {
        dateYear: Int!
        endDateYear: Int
      }

      interface Timeline implements Node @dontInfer {
        id: ID!
        title: String!
        date: Date! @dateformat
        fields: TimelineFields!
      }

      interface Output implements Node & Timeline @dontInfer {
        id: ID!
        title: String!
        date: Date! @dateformat
        fields: TimelineFields!
      }

      type ArticlesYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        fields: TimelineFields!
      }

      type SlidesYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        fields: TimelineFields!
      }

      type NotesYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        fields: TimelineFields!
      }

      type PresentationsYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        fields: TimelineFields!
      }

      type OthersYaml implements Node & Timeline & Output @dontInfer {
        title: String!
        date: Date! @dateformat
        url: String!
        fields: TimelineFields!
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

/**
 * Add `dateYear` field to nodes
 * Add `endDateYear` field to nodes
 */
export const onCreateNode: GatsbyNode<{
  frontmatter: Record<string, unknown>;
}>["onCreateNode"] = ({ node, actions }) => {
  const { createNodeField } = actions;
  const date =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- date is nullable
    node?.date ?? node?.frontmatter?.date;

  const endDate =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- endDate is nullable
    node?.endDate ?? node?.frontmatter?.endDate;

  if (typeof date === "string" || date instanceof Date) {
    const dateYear = formatInTimeZone(date, "Asia/Tokyo", "yyyy");
    createNodeField({ node, name: "dateYear", value: Number(dateYear) });
  }
  if (typeof endDate === "string" || endDate instanceof Date) {
    const endDateYear = formatInTimeZone(endDate, "Asia/Tokyo", "yyyy");
    createNodeField({ node, name: "endDateYear", value: Number(endDateYear) });
  }
};
