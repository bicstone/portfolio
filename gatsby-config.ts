import path from "path";

import dotenv from "dotenv";

import siteMetaData from "./src/constants/siteMetaData";

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
        "id" | "title" | "slug" | "excerpt" | "createdAt" | "updatedAt"
      >
    >;
  };
}

const config: GatsbyConfig = {
  trailingSlash,
  pathPrefix,

  siteMetadata: {
    title: siteMetaData.title,
    siteUrl: siteMetaData.siteUrl,
    description: siteMetaData.description,
  },

  jsxRuntime: "automatic",
  jsxImportSource: "@emotion/react",

  plugins: [
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve("src", "layouts", "WrapPageElement.tsx"),
      },
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
      resolve: "gatsby-plugin-react-i18next",
      options: {
        siteUrl: siteMetaData.siteUrl,
        localeJsonSourceName: `locales`,
        languages: siteMetaData.languages,
        defaultLanguage: siteMetaData.defaultLanguage,
        trailingSlash,
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
                  guid: node.id,
                  title: node.title,
                  url: `${siteMetaData.siteUrl}/${node.slug}`,
                  description: node.excerpt,
                  date: node.updatedAt ?? node.createdAt,
                };
              });
            },
            query: `#graphql
              {
                allContentfulBlogPost(sort: { created: DESC }) {
                  nodes {
                    id
                    title
                    slug
                    excerpt
                    createdAt
                    updatedAt
                  }
                }
              }
            `,
            output: "/rss.xml",
            link: `${siteMetaData.siteUrl}/rss.xml`,
            title: siteMetaData.blogTitle,
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
        hostname: new URL(siteMetaData.siteUrl).hostname,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: path.resolve("src", "locales"),
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
};

export default config;
