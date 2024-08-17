// @ts-check

import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import globals from 'globals'
import love from 'eslint-config-love'
import a11y from 'eslint-plugin-jsx-a11y'
import regexp from 'eslint-plugin-regexp'
import react from 'eslint-plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import("eslint").Linter.Config["files"]} */
const files = ['**/*.{js,mjs,cjs,ts,tsx}']
/** @type {import("eslint").Linter.Config["ignores"]} */
const ignores = [
  '/.cache',
  '/.yarn',
  '/content',
  '/public',
  '/static',
  'src/generated'
]
/** @type {import("eslint").Linter.Config["languageOptions"]} */
const languageOptions = {
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    ...globals.browser
  }
}
/** @type {import("eslint").Linter.Config["rules"]} */
const rules = {
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type'
      ],
      alphabetize: {
        order: 'asc'
      },
      'newlines-between': 'always'
    }
  ],
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxEOF: 1,
      maxBOF: 0
    }
  ],
  'no-restricted-imports': [
    'error',
    {
      patterns: ['@/features/*/*']
    }
  ],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/no-unsafe-argument': 'warn',
  'react/prop-types': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/no-unknown-property': 'off'
}

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.all,
  // ↓ eslint 9に対応していない
  // love,
  a11y.flatConfigs.recommended,
  a11y.flatConfigs.strict,
  regexp.configs['flat/recommended'],
  react.configs.flat.recommended,
  compat.extends('eslint-plugin-react-hooks/recommended'),
  compat.extends('eslint-plugin-import/errors'),
  {
    files,
    ignores,
    languageOptions,
    rules
  }
]
