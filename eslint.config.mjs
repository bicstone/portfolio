import love from "eslint-config-love";
import jsxA11y from "eslint-plugin-jsx-a11y";
import regexp from "eslint-plugin-regexp";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const files = ["**/*.js", "**/*.ts", "**/*.tsx"];

export default [
  {
    ...love,
    files,
  },
  {
    ...jsxA11y.flatConfigs.recommended,
    files,
  },
  {
    ...jsxA11y.flatConfigs.strict,
    files,
  },
  {
    ...regexp.configs["flat/recommended"],
    files,
  },
  {
    ...react.configs.flat.recommended,
    files,
  },
  {
    ...react.configs.flat["jsx-runtime"],
    files,
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // import order
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          alphabetize: {
            order: "asc",
          },
          "newlines-between": "always",
        },
      ],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
      // prop-types is not used because use typescript
      "react/prop-types": "off",
      // unnecessary import react because use new JSX transform
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // prefer import type / export type
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      // Disabled for guarding in Typescript.
      "react/no-unknown-property": "off",
      // Feature should be imported from the index.ts file
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@/features/*/*"],
        },
      ],
      // TODO: Remove this rule when the following issue is resolved.
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/unbound-method": "warn",
      // Tentatively changed from error to warn due to migration
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/only-throw-error": "warn",
      "@typescript-eslint/prefer-destructuring": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    files,
  },
  {
    ignores: [
      ".cache/",
      "pnpm-lock.yaml",
      "public/",
      "src/generated/",
      "static/",
      "content/",
    ],
  },
];
