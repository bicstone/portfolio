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
  "speakerdeck",
  "zenn",
  "note",
  "qiita",
  "featured",
  "presentations",
  "others",
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
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({
              query: { allTimeline },
            }: {
              query: GatsbyPluginFeedQuery;
            }) =>
              allTimeline.nodes.map((node) => ({
                guid: node.url,
                title: node.title,
                url: node.url,
                description: "",
                date: node.date,
              })),
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
          }
        `,
        resolvePages: ({ site }: GatsbyPluginSitemapQuery) => {
          const home = {
            path: `/`,
            lastmod: site.buildTime,
            changefreq: `daily`,
            priority: 1.0,
          };

          const pages = ["outputs"].map((page) => ({
            path: `/${page}`,
            lastmod: site.buildTime,
            changefreq: `daily`,
            priority: 1.0,
          }));

          return [home, ...pages];
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
        }) => ({
          url: path,
          lastmod,
          changefreq,
          priority,
        }),
      },
    },
    ...contentPaths.map((contentPath) => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve("content", contentPath),
        name: contentPath,
      },
    })),
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
  ],
};

export default config;
