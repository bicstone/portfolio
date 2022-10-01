import { Link as LinkIcon } from "@mui/icons-material";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { captureException } from "@sentry/gatsby";

import { AnchorLink } from "./AnchorLink";
import { Blockquote } from "./Blockquote";
import { Heading } from "./Heading";
import { InlineCode } from "./InlineCode";
import { LinkCard } from "./LinkCard";
import { QuotingCode, QuotingCodeWrap } from "./QuotingCode";

import type { MDXProviderComponentsProp } from "@mdx-js/react";

const notImplemented = (name: string): null => {
  captureException(new Error(`Not implemented: ${name}`));
  return null;
};

export const mdxComponents: MDXProviderComponentsProp = {
  p: (props) => (
    <Typography
      component="div"
      css={(theme) => ({ margin: theme.spacing(0, 2, 2) })}
      {...props}
    />
  ),
  h1: notImplemented,
  h2: (props) => <Heading variant="h5" component="h2" {...props} />,
  h3: (props) => <Heading variant="h6" component="h3" {...props} />,
  h4: (props) => <Heading variant="subtitle1" component="h4" {...props} />,
  h5: notImplemented,
  h6: notImplemented,
  blockquote: (props) => <Blockquote {...props} />,
  table: ({ children, ...props }) => (
    <TableContainer
      {...props}
      css={(theme) => ({ margin: theme.spacing(1, 0) })}
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
  inlineCode: (props) => <InlineCode {...props} />,
  pre: (props) => (
    <QuotingCodeWrap>
      <QuotingCode {...props} />
    </QuotingCodeWrap>
  ),
  hr: () => <Divider />,
  a: (props) => <AnchorLink {...props} />,
  anchor: (props) => (
    <LinkIcon
      {...props}
      css={(theme) => ({ paddingLeft: theme.spacing(0.5) })}
    />
  ),
  link: (props) => <LinkCard {...props} />,
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
};
