import styled from "@emotion/styled";

import { CONSOLE_FONT_FAMILY } from "./constants";

export const QuotingCodeWrap = styled("div")(({ theme }) => ({
  background: "#1e1e1e",
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  overflow: "auto",
  border: `1px solid ${theme.vars.palette.divider}`,
}));

export const QuotingCode = styled("pre")(({ theme }) => ({
  // fork from https://github.com/PrismJS/prism-themes/blob/v1.9.0/themes/prism-vsc-dark-plus.css
  // MIT License https://github.com/PrismJS/prism-themes/blob/v1.9.0/LICENSE
  color: "#d4d4d4",
  whiteSpace: "pre",
  tabSize: 2,
  margin: 0,
  padding: 0,
  float: "left",
  minWidth: "100%",

  code: {
    fontFamily: CONSOLE_FONT_FAMILY,
  },

  [`.namespace`]: { opacity: 0.7 },
  [`
    .token.boolean,
    .token.doctype .token.doctype-tag,
    .token.entity,
    .token.important,
    .token.keyword,
    .token.operator.arrow,
    .token.punctuation.interpolation-punctuation,
    .token.tag
  `]: {
    color: "#569cd6",
  },
  [`
    .language-javascript,
    .language-jsx,
    .language-tsx,
    .language-typescript,
    .token.atrule .token.url,
    .token.attr-name,
    .token.console,
    .token.constant,
    .token.doctype .token.name,
    .token.exports .token.maybe-class-name,
    .token.imports .token.maybe-class-name,
    .token.interpolation,
    .token.parameter,
    .token.property,
    .token.variable
  `]: {
    color: "#9cdcfe",
  },
  [`
    .token.comment,
    .token.prolog
  `]: { color: "#6a9955" },
  [`
    .language-html,
    .language-html .language-css .token.punctuation,
    .language-html .language-javascript .token.punctuation,
    .token.atrule .token.url .token.punctuation,
    .token.attr-value .token.punctuation.attr-equals,
    .token.entity,
    .token.operator,
    .token.punctuation
  `]: {
    color: "#d4d4d4",
  },
  [`
    .token.boolean,
    .token.constant,
    .token.inserted,
    .token.number,
    .token.property,
    .token.symbol,
    .token.tag,
    .token.unit
  `]: {
    color: "#b5cea8",
  },
  [`
    .language-css,
    .token.atrule,
    .token.attr-name,
    .token.attr-value,
    .token.attr-value .token.punctuation,
    .token.builtin,
    .token.char,
    .token.deleted,
    .token.selector,
    .token.string
  `]: {
    color: "#ce9178",
  },
  [`.language-css .token.string.url`]: { textDecoration: "underline" },
  [`
    .token.atrule .token.rule,
    .token.keyword.control-flow,
    .token.keyword.module
  `]: {
    color: "#c586c0",
  },
  [`
  .language-regex .token.anchor,
  .token.atrule .token.url .token.function,
  .token.function,
  .token.function .token.maybe-class-name
  `]: {
    color: "#dcdcaa",
  },
  [`.token.regex`]: { color: "#d16969" },
  [`.token.italic`]: { fontStyle: "italic" },
  [`
    .token.class-name,
    .token.maybe-class-name,
    .token.namespace
  `]: {
    color: "#4ec9b0",
  },
  [`
    .token.escape,
    .token.selector
  `]: { color: "#d7ba7d" },
  [`
    .language-html .token.punctuation,
    .token.cdata,
    .token.tag .token.punctuation
  `]: {
    color: "gray",
  },

  // https://github.com/gatsbyjs/gatsby/tree/v2.20.0/packages/gatsby-remark-prismjs
  [`.gatsby-highlight-code-line`]: {
    display: "block",
    backgroundColor: "#373d29",
    margin: theme.spacing(0, -2),
    padding: theme.spacing(0, 2),

    "::selection": {
      backgroundColor: "#4d5645",
    },
    "& ::selection": {
      backgroundColor: "#4d5645",
    },
  },
}));
