import path from "path";

import dotenv from "dotenv";

import siteMetaData from "./src/constants/siteMetaData";

import type { GatsbyConfig } from "gatsby";

dotenv.config({ path: `.env` });

const isDevelopment = process.env.NODE_ENV === "development";
const isCI = process.env.CI !== undefined;
const isAllPagesToNoIndex = process.env.ALL_PAGES_TO_NO_INDEX === "true";
const pathPrefix = process.env.PATH_PREFIX ?? "/";
const trailingSlash = "never";

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
      resolve: `gatsby-plugin-next-seo`,
      options: {
        dangerouslySetAllPagesToNoFollow: isAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex: isAllPagesToNoIndex,
        twitter: {
          cardType: "summary_large_image",
          site: siteMetaData.twitter,
          handle: siteMetaData.twitter,
        },
        openGraph: {
          site_name: siteMetaData.title,
          profile: {
            firstName: siteMetaData.firstName,
            lastName: siteMetaData.lastName,
            username: siteMetaData.author,
            gender: siteMetaData.gender,
          },
        },
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
        localeFilter: (locale: { code: string }) => locale.code === "ja",
        pageLimit: isCI ? 50 : 100,
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
      resolve: "gatsby-transformer-inline-svg",
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
};

export default config;
