import path from "path";

import dotenv from "dotenv";

import { SITE_METADATA } from "./src/constants/SITE_METADATA";

import type {
  GatsbyPluginSitemapQuery,
  GatsbyPluginFeedQuery,
} from "@/generated/graphqlTypes";
import type Sentry from "@sentry/browser";
import type { GatsbyConfig } from "gatsby";

// Google Tag Manager types
declare global {
  interface Window {
    Sentry?: typeof Sentry;
  }
}

dotenv.config({ path: `.env` });

const pathPrefix = process.env.PATH_PREFIX ?? "/";
const trailingSlash = "never";
const contentPaths = [
  "articles",
  "images",
  "certifications",
  "histories",
  "osses",
  "projects",
  "speakerdeck",
  "zenn",
  "note",
  "qiita",
  "featured",
];

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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
      },
    },
    `gatsby-plugin-image`,
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
              query: { allTimeline },
            }: {
              query: GatsbyPluginFeedQuery;
            }) => {
              return allTimeline.nodes.map((node) => {
                switch (node.__typename) {
                  case "Mdx":
                    return {
                      guid: `${SITE_METADATA.siteUrl}/${node.slug}`,
                      title: node.title,
                      url: `${SITE_METADATA.siteUrl}/${node.slug}`,
                      description: node.frontmatter.excerpt,
                      date: node.date,
                    };
                  case "ArticlesYaml":
                  case "SlidesYaml":
                  case "OssesYaml":
                  case "NotesYaml":
                    return {
                      guid: node.url ?? "",
                      title: node.title,
                      url: node.url ?? "",
                      description: "",
                      date: node.date,
                    };
                  default:
                    return {
                      guid: node.title,
                      title: node.title,
                      url: SITE_METADATA.siteUrl,
                      description: "",
                      date: node.date,
                    };
                }
              });
            },
            query: /* GraphQL */ `
              query GatsbyPluginFeed {
                allTimeline(sort: { date: DESC }) {
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
                    ... on OssesYaml {
                      url
                    }
                    ... on NotesYaml {
                      url
                    }
                    ... on Mdx {
                      slug
                      frontmatter {
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            link: `${SITE_METADATA.siteUrl}/rss.xml`,
            title: SITE_METADATA.title,
          },
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: false,
        resolveSiteUrl: () => SITE_METADATA.siteUrl,
        query: /* GraphQL */ `
          query GatsbyPluginSitemap {
            site {
              buildTime
            }
            allMdx(sort: { frontmatter: { date: DESC } }) {
              nodes {
                frontmatter {
                  slug
                  date
                  updateDate
                }
              }
            }
          }
        `,
        resolvePages: ({ allMdx, site }: GatsbyPluginSitemapQuery) => {
          const home = {
            path: `/`,
            lastmod: site.buildTime,
            changefreq: `daily`,
            priority: 1.0,
          };

          const posts = allMdx.nodes.map(({ frontmatter }) => {
            return {
              path: `/${frontmatter.slug}`,
              lastmod: frontmatter.updateDate ?? frontmatter.date,
              changefreq: `weekly`,
              priority: 0.6,
            };
          });

          const pages = ["histories", "outputs", "projects"].map((page) => ({
            path: `/${page}`,
            lastmod: site.buildTime,
            changefreq: `daily`,
            priority: 1.0,
          }));

          return [home, ...posts, ...pages];
        },
        serialize: ({
          path,
          lastmod,
          changefreq,
          priority,
        }: {
          path: string;
          lastmod: string;
          changefreq: string;
          priority: number;
        }) => {
          return {
            url: path,
            lastmod,
            changefreq,
            priority,
          };
        },
      },
    },
    ...contentPaths.map((contentPath) => {
      return {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.resolve("content", contentPath),
          name: contentPath,
        },
      };
    }),
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
  ],
};

export default config;
