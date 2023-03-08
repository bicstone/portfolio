import path from "path";

import dotenv from "dotenv";

import { SITE_METADATA } from "./src/constants/SITE_METADATA";

import type { MdxFrontmatter } from "@/generated/graphqlTypes";
import type { GatsbyConfig } from "gatsby";

dotenv.config({ path: `.env` });

const isDevelopment = process.env.NODE_ENV === "development";
const pathPrefix = process.env.PATH_PREFIX ?? "/";
const trailingSlash = "never";

interface GatsbyPluginFeedQuery {
  readonly allMdx: {
    readonly nodes: ReadonlyArray<{
      frontmatter: Pick<
        MdxFrontmatter,
        "title" | "slug" | "excerpt" | "created" | "updated" | "redirect"
      >;
    }>;
  };
}

interface GatsbyPluginSitemapQuery {
  readonly allMdx: {
    readonly nodes: ReadonlyArray<{
      frontmatter: Pick<
        MdxFrontmatter,
        "slug" | "created" | "updated" | "redirect"
      >;
    }>;
  };
}
const config: GatsbyConfig = {
  trailingSlash,
  pathPrefix,

  siteMetadata: {
    title: SITE_METADATA.title,
    siteUrl: SITE_METADATA.siteUrl,
    description: SITE_METADATA.description,
  },

  jsxRuntime: "automatic",
  jsxImportSource: "@emotion/react",

  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
    },
    {
      resolve: `gatsby-plugin-fix-fouc`,
      options: {
        attributeName: "is-loading",
        timeout: 0,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: true,
              backgroundColor: "none",
              withWebp: !isDevelopment,
              withAvif: !isDevelopment,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
              aliases: {
                sh: "bash",
                bat: "batch",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({
              query: { allMdx },
            }: {
              query: GatsbyPluginFeedQuery;
            }) => {
              return allMdx.nodes.map(({ frontmatter }) => {
                return {
                  guid: `${SITE_METADATA.siteUrl}/${frontmatter.slug}`,
                  title: frontmatter.title,
                  url:
                    frontmatter.redirect ??
                    `${SITE_METADATA.siteUrl}/${frontmatter.slug}`,
                  description: frontmatter.excerpt,
                  date: frontmatter.created,
                };
              });
            },
            query: `#graphql
              query FeedQuery {
                allMdx(sort: {frontmatter: {created: DESC}}) {
                  nodes {
                    frontmatter{
                      title
                      slug
                      excerpt
                      created
                      updated
                      redirect
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            link: `${SITE_METADATA.siteUrl}/rss.xml`,
            title: SITE_METADATA.blogTitle,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_S3_BUCKET_NAME,
        region: process.env.AWS_REGION,
        protocol: "https",
        hostname: new URL(SITE_METADATA.siteUrl).hostname,
        acl: null,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `#graphql
        query SitemapQuery{
          allMdx(sort: {frontmatter: {created: DESC}}) {
            nodes {
              frontmatter{
                slug
                created
                updated
                redirect
              }
            }
          }
        }
      `,
        serialize: ({
          query: { allMdx },
        }: {
          query: GatsbyPluginSitemapQuery;
        }) => {
          return allMdx.nodes.map(({ frontmatter }) => {
            return {
              url:
                frontmatter.redirect ??
                `${SITE_METADATA.siteUrl}/${frontmatter.slug}`,
              lastmod: frontmatter.updated ?? frontmatter.created,
            };
          });
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: isDevelopment ? "preview.contentful.com" : "cdn.contentful.com",
        localeFilter: (locale: { code: string }) => locale.code === "ja",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve("content", "articles"),
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve("content", "images"),
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
};

export default config;
