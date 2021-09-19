import { NodePluginArgs } from "gatsby";

// gatsby-plugin-webfontsがwebfonts.cssを見に行くが存在しないので無視する
export const onCreateWebpackConfig = ({ actions }: NodePluginArgs ) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '/.cache/webfonts/webfonts.css': `${__dirname}/webfonts.css`,
      },
      fallback: {
        fs: false,
      }
    },
  })
}
