import { MDXProvider } from "@mdx-js/react";
import { Link as LinkIcon } from "@mui/icons-material";
import {
  Card,
  Divider,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CardActionArea,
  CardHeader,
  NoSsr,
} from "@mui/material";
import { captureException } from "@sentry/gatsby";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { BlogPostDetailFragment } from "@/generated/graphqlTypes";
import type { MDXProviderComponentsProp } from "@mdx-js/react";

import { InarticleAd } from "@/components/InarticleAd";
import { isDefined } from "@/utils/typeguard";

const consoleFontFamily = "HackGen, PlemolJP, Consolas, Courier, monospace";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "block",
  position: "relative",
  // AppBar height = 6
  // negative top margin for anchor link
  marginTop: theme.spacing(-2),
  padding: theme.spacing(8, 2, 3, 2),
  fontWeight: "bold",
  "&::before": {
    content: '""',
    position: "absolute",
    top: theme.spacing(6 + 2),
    bottom: theme.spacing(3),
    left: 0,
    height: "auto",
    width: theme.spacing(0.5),
    backgroundColor: theme.vars.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));

const StyledBlockquote = styled("blockquote")(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(0, 1),
  borderLeft: `${theme.vars.palette.divider} solid ${theme.spacing(0.5)}`,
}));

const StyledInlineCode = styled("span")(({ theme }) => ({
  display: "inline-block",
  fontFamily: consoleFontFamily,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  backgroundColor: theme.vars.palette.divider,
  borderRadius: theme.shape.borderRadius,
}));

const StyledPreWrap = styled("div")(({ theme }) => ({
  background: "#1e1e1e",
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  overflow: "auto",
  border: `1px solid ${theme.vars.palette.divider}`,
}));

const StyledPre = styled("pre")(({ theme }) => ({
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
    fontFamily: consoleFontFamily,
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

// FIXME: refactor
const components: MDXProviderComponentsProp = {
  p: (props) => (
    <Typography
      component="div"
      css={(theme) => ({ margin: theme.spacing(0, 2, 2) })}
      {...props}
    />
  ),
  h1: () => null,
  h2: (props) => <StyledTypography variant="h5" component="h2" {...props} />,
  h3: (props) => <StyledTypography variant="h6" component="h3" {...props} />,
  h4: () => null,
  h5: () => null,
  h6: () => null,
  blockquote: (props) => <StyledBlockquote {...props} />,
  table: ({ children, ...props }) => (
    <TableContainer
      {...props}
      css={(theme) => ({
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      })}
    >
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: (props) => <TableHead {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: ({ align, ...props }) => (
    <TableCell align={align ?? "inherit"} component="th" {...props} />
  ),
  td: ({ align, ...props }) => (
    <TableCell align={align ?? "inherit"} component="td" {...props} />
  ),
  inlineCode: (props) => <StyledInlineCode {...props} />,
  pre: (props) => (
    <StyledPreWrap>
      <StyledPre {...props} />
    </StyledPreWrap>
  ),
  hr: () => <Divider />,
  a: (props) => {
    const href = props?.href;
    if (typeof href === "string" && href.startsWith("#")) {
      // anchor links
      return (
        <Link
          {...props}
          color="text.secondary"
          tabIndex={-1}
          css={{ verticalAlign: "middle" }}
        />
      );
    }
    return (
      // other links
      <Link
        {...props}
        rel="external noreferrer noopener nofollow"
        target="_blank"
      />
    );
  },
  anchor: (props) => (
    <LinkIcon
      {...props}
      css={(theme) => ({
        paddingLeft: theme.spacing(0.5),
      })}
    />
  ),
  link: (props) => {
    if (!isDefined(props.title) || !isDefined(props.href)) {
      captureException(
        new Error(
          `Cannot provide both title: ${String(props.title)} and href: ${String(
            props.href
          )}`
        )
      );
    }
    return (
      <Card
        component="figure"
        css={(theme) => ({ margin: theme.spacing(2) })}
        elevation={2}
      >
        <CardActionArea
          rel="external noreferrer noopener nofollow"
          target="_blank"
          {...props}
        >
          <CardHeader
            title={
              <Typography variant="subtitle1" css={{ wordBreak: "break-all" }}>
                {props.title}
              </Typography>
            }
            subheader={
              <Typography
                variant="caption"
                css={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <LinkIcon
                  css={(theme) => ({
                    marginRight: theme.spacing(0.5),
                    flexShrink: 0,
                  })}
                />
                <div
                  css={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    wordBreak: "normal",
                  }}
                >
                  {props.href}
                </div>
              </Typography>
            }
            disableTypography
            css={{ "& .MuiCardHeader-content": { overflow: "hidden" } }}
          />
        </CardActionArea>
      </Card>
    );
  },
  video: (props) => (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      controls
      css={{
        position: "relative",
        display: "block",
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      {...props}
    />
  ),
  ad: () => (
    <aside>
      {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) &&
        isDefined(process.env.GATSBY_ADSENSE_INARTICLE_AD_ID) && (
          <NoSsr defer>
            <Typography variant="subtitle1">広告</Typography>
            <InarticleAd
              pubId={process.env.GATSBY_ADSENSE_PUB_ID}
              adId={process.env.GATSBY_ADSENSE_INARTICLE_AD_ID}
            />
          </NoSsr>
        )}
    </aside>
  ),
};

export const BlogPostDetailQuery = graphql`
  fragment BlogPostDetail on ContentfulBlogPost {
    content {
      childMdx {
        body
      }
    }
  }
`;

export const BlogPostDetail = (props: {
  post: BlogPostDetailFragment;
}): JSX.Element => {
  const { t } = useI18next();

  return (
    <Card
      css={(theme) => ({
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2, 0),
      })}
    >
      <MDXProvider components={components}>
        <MDXRenderer components={components}>
          {props.post.content.childMdx.body}
        </MDXRenderer>
      </MDXProvider>
      <aside>
        {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) &&
          isDefined(process.env.GATSBY_ADSENSE_INARTICLE_AD_ID) && (
            <NoSsr defer>
              <StyledTypography variant="h5" as="h2" paragraph>
                {t("blog.ad-label")}
              </StyledTypography>
              <InarticleAd
                pubId={process.env.GATSBY_ADSENSE_PUB_ID}
                adId={process.env.GATSBY_ADSENSE_INARTICLE_AD_ID}
              />
            </NoSsr>
          )}
      </aside>
    </Card>
  );
};
