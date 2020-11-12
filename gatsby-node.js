// ソースマップを作らない
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
