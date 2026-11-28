import vitest from "@vitest/eslint-plugin";
import love from "eslint-config-love";
import astro from "eslint-plugin-astro";

export default [
  {
    ...love,
    files: ["**/*.js", "**/*.mjs", "**/*.ts"],
  },
  // https://github.com/ota-meshi/eslint-plugin-astro
  ...astro.configs.all,
  ...astro.configs["jsx-a11y-strict"],
  {
    files: ["**/*.astro"],
    plugins: love.plugins,
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: love.rules,
  },
  // https://github.com/vitest-dev/eslint-plugin-vitest
  {
    ...vitest.configs.all,
    files: ["**/*.test.ts"],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    rules: {
      ...vitest.configs.all.rules,
      // allには逆の指定をするルールが対で含まれるので、片方を無効にする
      "vitest/no-importing-vitest-globals": "off",
      "vitest/prefer-called-once": "off",
      "vitest/prefer-to-be-falsy": "off",
      "vitest/prefer-to-be-truthy": "off",
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    ignores: [".astro/", ".wrangler/", "dist/"],
  },
];
