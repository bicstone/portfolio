import siteMetaData from './src/constants/siteMetaData';

import type { TransformOptions, ConfigAPI } from '@babel/core';

const config = (api: ConfigAPI): TransformOptions => {
  api.cache.forever();

  return {
    presets: ['babel-preset-gatsby'],
    plugins: [
      [
        'i18next-extract',
        {
          locales: siteMetaData.languages,
          useI18nextDefaultValue: true,
          // 整理する場合は外す(存在しない翻訳が消える)
          // discardOldKeys: true,
          outputPath: 'src/locales/{{locale}}/{{ns}}.json',
        },
      ],
    ],
    overrides: [
      {
        test: [`src/**/*.ts`, `src/**/*.tsx`],
        plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
      },
    ],
  };
};

export default config;
