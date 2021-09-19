const path = require('path');

// gatsby-plugin-webfontsがwebfonts.cssを見に行くが存在しないので無視する
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '/.cache/webfonts/webfonts.css': path.resolve('.gatsby', 'webfonts.css'),
      },
      fallback: {
        fs: false,
      },
    },
  });
};
