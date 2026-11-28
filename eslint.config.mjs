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
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    ignores: [".astro/", ".wrangler/", "dist/"],
  },
];
