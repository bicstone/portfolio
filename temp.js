// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import globals from "globals"
import love from 'eslint-config-love';
import a11y from "eslint-plugin-jsx-a11y";
import regexp from "eslint-plugin-regexp";
import react from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname
});

/** @type {import("eslint").Linter.Config["files"]} */
const commonFiles = ['**/*.{js,mjs,cjs,ts,tsx}']

/** @type {import("eslint").Linter.Config["ignores"]} */
const commonIgnores = [
  "/.cache",
  "/.yarn",
  "/content",
  "/public",
  "/static",
  "src/generated",
]

/** @type {import("eslint").Linter.ParserOptions}*/
const commonParserOptions = {
  project: "./tsconfig.json",
  ecmaFeatures: {
    jsx: true,
  },
}

/** @type {import("eslint").Linter.Globals}*/
const commonGlobals = {
  ...globals.browser,
}

/** @type {import("eslint").Linter.Config} */
const jsConfig = {
  ...js.configs.all,
  files: commonFiles,
  ignores: commonIgnores,
  languageOptions: {
    parserOptions: commonParserOptions,
    globals: commonGlobals,
  },
  rules: {
    "import/order": ["error", {
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
    }],
    "no-multiple-empty-lines": ["error", {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    "no-restricted-imports": ["error", {
      patterns: ["@/features/*/*"],
    }],
  }
}

/** @type {import("eslint").Linter.Config} */
const loveConfig = {
  ...love,
  files: commonFiles,
  ignores: commonIgnores,
  // @ts-expect-error
  languageOptions: {
    ...love.languageOptions,
    parserOptions: {
      ...love.languageOptions?.parserOptions,
      ...commonParserOptions,
    },
    globals: {
      ...love.languageOptions?.globals,
      ...commonGlobals,
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-unsafe-argument": "warn",
  }
}

/** @type {import("eslint").Linter.Config}*/
const a11yConfig = {
  ...a11y.flatConfigs.recommended,
  ...a11y.flatConfigs.strict,
  files: commonFiles,
  ignores: commonIgnores,
  languageOptions: {
    ...a11y.flatConfigs.recommended.languageOptions,
    ...a11y.flatConfigs.strict.languageOptions,
    parserOptions: {
      ...a11y.flatConfigs.recommended.languageOptions.parserOptions,
      ...a11y.flatConfigs.strict.languageOptions.parserOptions,
      ...commonParserOptions,
    },
    globals: {
      ...a11y.flatConfigs.recommended.languageOptions.globals,
      ...a11y.flatConfigs.strict.languageOptions.globals,
      ...commonGlobals,
    },
  }
}

/** @type {import("eslint").Linter.Config}*/
const regexpConfig = {
  ...regexp.configs["flat/recommended"],
  files: commonFiles,
  ignores: commonIgnores,
  languageOptions: {
    parserOptions: commonParserOptions,
    globals: commonGlobals,
  },
}

/** @type {import("eslint").Linter.Config}*/
const reactConfig = {
  ...react.configs.flat.recommended,
  files: commonFiles,
  ignores: commonIgnores,
  languageOptions: {
    ...react.configs.flat.recommended.languageOptions,
    parserOptions: {
      ...react.configs.flat.recommended.languageOptions.parserOptions,
      ...commonParserOptions,
    },
    globals: {
      ...react.configs.flat.recommended.languageOptions.globals,
      ...commonGlobals,
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "off",
  }
}

/** @type {import("eslint").Linter.Config[]} */
export default [
  // jsConfig,
  // loveConfig,
  // a11yConfig,
  // regexpConfig,
  // reactConfig,
  // ...hooks,
  // ...compat.extends("eslint-plugin-react-hooks/recommended"),
  js.configs.all
]
