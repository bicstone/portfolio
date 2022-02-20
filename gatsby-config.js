require('dotenv').config({ path: `.env` });
const path = require('path');

const languages = require('./src/configs/languages');
const siteMetaData = require('./src/configs/site-meta-data');
module.exports = {
  siteMetadata: {
    title: siteMetaData.title,
    siteUrl: siteMetaData.siteUrl,
    description: siteMetaData.description,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        localeFilter: locale => locale.code === 'ja',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: path.resolve('src', 'locales'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        siteUrl: siteMetaData.siteUrl,
        localeJsonSourceName: `locales`,
        languages: languages.languages,
        defaultLanguage: languages.defaultLanguage,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-165073691-2',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: 'ja',
        name: siteMetaData.title,
        short_name: siteMetaData.shortTitle,
        description: siteMetaData.description,
        start_url: '/',
        display: 'minimal-ui',
        icons: [
          {
            src: siteMetaData.image,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: siteMetaData.image192,
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetaData.siteUrl,
      },
    },
    {
      resolve: 'gatsby-transformer-inline-svg',
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.resolve('src'),
      },
    },
    {
      resolve: 'gatsby-plugin-remove-serviceworker',
    },
    {
      resolve: 'gatsby-plugin-emotion',
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_S3_BUCKET_NAME,
        region: process.env.AWS_REGION,
        protocol: 'https',
        hostname: new URL(siteMetaData.siteUrl).hostname,
        acl: null,
      },
    },
    {
      // ハッシュ取得を行うため最下部に設置すること
      resolve: 'gatsby-plugin-csp',
      options: {
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: false,
        directives: {
          'child-src': "'none'",
          'connect-src': "'self' https://www.google-analytics.com",
          'default-src': "'none'",
          'font-src': "'none'",
          'frame-src': "'none'",
          'img-src': "'self' data: https://www.google-analytics.com",
          'manifest-src': "'self'",
          'media-src': "'self'",
          'object-src': "'none'",
          'prefetch-src': "'self' https://www.google-analytics.com",
          'script-src': "'self' https://www.google-analytics.com https://ssl.google-analytics.com",
          // emotionで動的に設定されるため、inlineあり。
          'style-src': "'self' 'unsafe-inline'",
          'worker-src': "'none'",
          'base-uri': "'none'",
          'form-action': "'none'",
          'frame-ancestors': "'none'",
        },
      },
    },
  ],
};
