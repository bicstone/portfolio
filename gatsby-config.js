/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const languages = require('./languages');

const title = {
  ja: 'Takanori Oishi Portfolio',
  en: 'Takanori Oishi Portfolio',
};
const shortTitle = {
  ja: 'まっしろ',
  en: 'masshiro',
};
const url = {
  ja: 'https://masshiro.me/',
  en: 'https://masshiro.me/en/',
};
const description = {
  ja:
    'Webディベロッパー/機械エンジニア Takanori Oishi (オオイシ タカノリ) のポートフォリオサイトです。',
  en: "Web developer / Mechanical engineer Takanori Oishi's Portfolio site.",
};
const author = {
  ja: 'Takanori Oishi',
  en: 'Takanori Oishi',
};
const icon = {
  src: '/android-chrome-512x512.png',
  sizes: '512x512',
  type: 'image/png',
};
const backgroundColor = '#ffffff';
const themeColor = '#ffffff';

module.exports = {
  siteMetadata: {
    // gatsby-plugin-react-i18next で必要なパラメータ
    siteUrl: url.ja,
    title,
    shortTitle,
    url,
    description,
    author,
    icon,
    backgroundColor,
    themeColor,
  },
  plugins: [
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
          "X-Hello-Human: I'm Takanori Oishi. see humans.txt.",
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
        lang: 'ja',
        name: title.ja,
        short_name: shortTitle.ja,
        description: description.ja,
        start_url: url.ja,
        display: 'standalone',
        icons: [
          {
            src: icon.src,
            sizes: icon.sizes,
            type: icon.type,
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        theme_color: themeColor,
        background_color: backgroundColor,
        localize: [
          {
            lang: 'en',
            name: title.en,
            short_name: shortTitle.en,
            description: description.en,
            start_url: url.en,
          },
        ],
        cache_busting_mode: 'none',
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
  ],
};
