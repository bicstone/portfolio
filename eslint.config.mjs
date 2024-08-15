import { fixupConfigRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.cache",
        "**/.yarn",
        "**/public",
        "src/generated",
        "**/static",
        "**/content",
    ],
}, ...fixupConfigRules(compat.extends(
    "love",
    "plugin:jsx-a11y/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:regexp/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
)), {
    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
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

        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "react/no-unknown-property": "off",

        "no-restricted-imports": ["error", {
            patterns: ["@/features/*/*"],
        }],

        "@typescript-eslint/no-unsafe-argument": "warn",
    },
}];