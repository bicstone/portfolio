const Sentry = require('@sentry/gatsby');

// see gatsby-ssr.js
const isLoading = 'is-loading';

exports.onInitialClientRender = () => {
  try {
    window.document.body.classList.remove(isLoading);
  } catch (error) {
    Sentry.captureException(error);
  }
};
