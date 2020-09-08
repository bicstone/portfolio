/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-theme-material-ui',
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: path.join(__dirname, 'src', 'locales'),
        languages: ['ja', 'en'],
        defaultLanguage: 'ja',
        i18nextOptions: {
          saveMissing: true,
        },
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
          // "Content-Security-Policy: default-src 'self' 'unsafe-inline' object-src 'none'",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Takanori Oishi's portfolio`,
        short_name: `masshiro`,
        description: `Takanori Oishi's portfolio site.`,
        lang: `ja`,
        display: `standalone`,
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: `/`,
        theme_color: '#ffffff',
        background_color: '#ffffff',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        // precachePages: [`/about-us/`, `/projects/*`],
        workboxConfig: {
          globPatterns: ['**/*.png', '**/*.ico', '**/*.svg'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
  ],
};
