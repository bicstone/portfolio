/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config();

const languages = require('./languages');
const t = {
  en: require('./src/locales/en/translation.json'),
  ja: require('./src/locales/ja/translation.json'),
};

module.exports = {
  siteMetadata: {
    siteUrl: 'https://masshiro-portfolio.netlify.app/',
  },
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-image`,
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {},
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: path.join(__dirname, 'src', 'locales'),
        languages: languages.languages,
        defaultLanguage: languages.defaultLanguage,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          'Referrer-Policy: unsafe-url',
          'X-Frame-Options: DENY',
          "X-Hello-Human: Hey there! I'm Takanori Oishi.",
          'X-Content-Type-Options: nosniff',
          'X-XSS-Protection: 1; mode=block',
          'X-UA-Compatible: IE=edge',
          // "Content-Security-Policy: default-src "self" "unsafe-inline" object-src "none"",
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
    },
    {
      resolve: 'gatsby-plugin-root-import',
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'UA-165073691-2',
          anonymize: false,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: 'en',
        name: t.en.siteMetadata.title,
        short_name: t.en.siteMetadata.shortTitle,
        description: t.en.siteMetadata.description,
        start_url: '/en/',
        display: 'minimal-ui',
        icons: [
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        localize: [
          {
            lang: 'ja',
            name: t.ja.siteMetadata.title,
            short_name: t.ja.siteMetadata.shortTitle,
            description: t.ja.siteMetadata.description,
            start_url: '/',
          },
        ],
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/offline-plugin-app-shell-fallback`],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        // precachePages: ["/about-us/", "/projects/*"],
        workboxConfig: {
          globPatterns: ['**/*.png', '**/*.ico', '**/*.svg'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    },
    {
      resolve: 'gatsby-transformer-inline-svg',
    },
  ],
};
