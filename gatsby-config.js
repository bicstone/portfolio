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
  ],
};
