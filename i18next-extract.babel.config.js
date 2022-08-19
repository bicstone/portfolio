const languages = require('./src/constants/languages');
module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        locales: languages.languages,
        useI18nextDefaultValue: true,
        // 整理する場合は外す(存在しない翻訳が消える)
        // discardOldKeys: true,
        outputPath: 'src/locales/{{locale}}/{{ns}}.json',
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
