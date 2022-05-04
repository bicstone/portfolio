const React = require('react');

const styles = require('@mui/material/styles');

// see gatsby-browser.js
const isLoading = 'is-loading';

exports.onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  const theme = styles.createTheme();
  const xs = theme.breakpoints.values.sm - 1;

  setBodyAttributes({
    className: isLoading,
  });

  setHeadComponents([
    React.createElement('style', {
      key: 'loading-style',
      dangerouslySetInnerHTML: {
        __html: `body.${isLoading} { opacity: 0 } @media (max-width: ${xs}px) { body.${isLoading}{ opacity: 1 } }`,
      },
    }),

    React.createElement('noscript', {
      key: 'loading-noscript-style',
      dangerouslySetInnerHTML: {
        __html: `<style>body.${isLoading} { opacity: 1 !important }</style>`,
      },
    }),

    React.createElement('script', {
      key: 'loading-timeout',
      dangerouslySetInnerHTML: {
        __html: `setTimeout(function() { document.body.classList.remove("${isLoading}") }, 2000);`,
      },
    }),
  ]);
};