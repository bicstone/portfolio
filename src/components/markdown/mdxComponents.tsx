import Divider from "@mui/material/Divider";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { AnchorIcon } from "./AnchorIcon";
import { AnchorLink } from "./AnchorLink";
import { Blockquote } from "./Blockquote";
import { CodeSandbox } from "./CodeSandbox";
import { Heading } from "./Heading";
import { Image } from "./Image";
import { InlineCode } from "./InlineCode";
import { LinkCard } from "./LinkCard";
import { Paragraph } from "./Paragraph";
import { QuotingCode } from "./QuotingCode";
import { Table } from "./Table";
import { Video } from "./Video";

import type { MDXComponents } from "mdx/types";

import { isDefined } from "@/utils/typeguard";

const notImplemented = (name: string): null => {
  isDefined(window.Sentry) &&
    window.Sentry.captureException(new Error(`Not implemented: ${name}`));
  return null;
};

export const mdxComponents: MDXComponents = {
  p: ({ ref, ...props }) => <Paragraph {...props} />,
  h1: () => notImplemented("h1"),
  h2: ({ ref, ...props }) => <Heading variant="h5" component="h2" {...props} />,
  h3: ({ ref, ...props }) => <Heading variant="h6" component="h3" {...props} />,
  h4: ({ ref, ...props }) => (
    <Heading variant="subtitle1" component="h4" {...props} />
  ),
  h5: () => notImplemented("h5"),
  h6: () => notImplemented("h6"),
  blockquote: ({ ref, ...props }) => <Blockquote {...props} />,
  table: ({ ref, ...props }) => <Table {...props} />,
  thead: ({ ref, ...props }) => <TableHead {...props} />,
  tbody: ({ ref, ...props }) => <TableBody {...props} />,
  tr: ({ ref, ...props }) => <TableRow {...props} />,
  th: ({ ref, align, ...props }) => {
    if (align === "char") {
      notImplemented("th align=char");
      return null;
    }
    return <TableCell align={align ?? "inherit"} component="th" {...props} />;
  },
  td: ({ ref, align, ...props }) => {
    if (align === "char") {
      notImplemented("td align=char");
      return null;
    }
    return <TableCell align={align ?? "inherit"} component="td" {...props} />;
  },
  inlineCode: ({ ref, ...props }) => <InlineCode {...props} />,
  pre: ({ ref, ...props }) => <QuotingCode {...props} />,
  hr: ({ ref, ...props }) => <Divider {...props} />,
  a: ({ ref, ...props }) => <AnchorLink {...props} />,
  video: ({ ref, ...props }) => <Video controls {...props} />,
  img: ({ ref, ...props }) => <Image {...props} />,
  // custom components
  anchor: ({ ref, ...props }) => <AnchorIcon {...props} />,
  LinkCard: ({ ref, ...props }) => <LinkCard {...props} />,
  CodeSandbox: ({ ref, ...props }) => <CodeSandbox {...props} />,
};
