import love from "eslint-config-love";
import astro from "eslint-plugin-astro";

export default [
  {
    ...love,
    files: ["**/*.js", "**/*.mjs", "**/*.ts"],
  },
  // https://github.com/ota-meshi/eslint-plugin-astro
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-strict"],
  {
    ignores: [".astro/", ".wrangler/", "dist/"],
  },
];
