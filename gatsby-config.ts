import dotenv from "dotenv";

import { SITE_METADATA } from "./src/constants/SITE_METADATA";

import type { ContentfulBlogPost } from "@/generated/graphqlTypes";
import type { GatsbyConfig } from "gatsby";

dotenv.config({ path: `.env` });

const isDevelopment = process.env.NODE_ENV === "development";
const pathPrefix = process.env.PATH_PREFIX ?? "/";
const trailingSlash = "never";

interface GatsbyPluginFeedQuery {
  readonly allContentfulBlogPost: {
    readonly nodes: ReadonlyArray<
      Pick<
        ContentfulBlogPost,
        "title" | "slug" | "excerpt" | "created" | "updated"
      >
    >;
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
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              icon: "<anchor />",
            },
          },
          ...(isDevelopment
            ? []
            : [
                {
                  resolve: `gatsby-remark-images-contentful`,
                  options: {
                    maxWidth: 600,
                    showCaptions: true,
                    withWebp: true,
                  },
                },
              ]),
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
          {
            resolve: `gatsby-plugin-mdx-embed`,
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
              query: { allContentfulBlogPost },
            }: {
              query: GatsbyPluginFeedQuery;
            }) => {
              return allContentfulBlogPost.nodes.map((node) => {
                return {
                  guid: `${SITE_METADATA.siteUrl}/${node.slug}`,
                  title: node.title,
                  url: `${SITE_METADATA.siteUrl}/${node.slug}`,
                  description: node.excerpt,
                  date: node.created,
                };
              });
            },
            query: `#graphql
              {
                allContentfulBlogPost(sort: { created: DESC }) {
                  nodes {
                    title
                    slug
                    excerpt
                    created
                    updated
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
      resolve: `gatsby-transformer-sharp`,
    },
  ],
};

export default config;
