import {
  Divider,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { captureException } from "@sentry/gatsby";

import { AnchorIcon } from "./AnchorIcon";
import { AnchorLink } from "./AnchorLink";
import { Blockquote } from "./Blockquote";
import { Heading } from "./Heading";
import { InlineCode } from "./InlineCode";
import { LinkCard } from "./LinkCard";
import { Paragraph } from "./Paragraph";
import { QuotingCode } from "./QuotingCode";
import { Table } from "./Table";
import { Video } from "./Video";

import type { Components } from "@mdx-js/react/lib";

const notImplemented = (name: string): null => {
  captureException(new Error(`Not implemented: ${name}`));
  return null;
};

export const mdxComponents: Components = {
  p: ({ ref, ...props }) => <Paragraph {...props} />,
  h1: () => notImplemented("h1"),
  h2: ({ ref, ...props }) => <Heading variant="h4" component="h2" {...props} />,
  h3: ({ ref, ...props }) => <Heading variant="h5" component="h3" {...props} />,
  h4: ({ ref, ...props }) => <Heading variant="h6" component="h4" {...props} />,
  h5: () => notImplemented("h5"),
  h6: () => notImplemented("h6"),
  blockquote: ({ ref, ...props }) => <Blockquote {...props} />,
  table: ({ ref, ...props }) => <Table {...props} />,
  thead: ({ ref, ...props }) => <TableHead {...props} />,
  tbody: ({ ref, ...props }) => <TableBody {...props} />,
  tr: ({ ref, ...props }) => <TableRow {...props} />,
  th: ({ align, ref, ...props }) => {
    if (align === "char") {
      notImplemented("th align=char");
      return null;
    }
    return <TableCell align={align ?? "inherit"} component="th" {...props} />;
  },
  td: ({ align, ref, ...props }) => {
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
  anchor: ({ ref, ...props }) => <AnchorIcon {...props} />,
  // @ts-expect-error -- TODO: Rename
  link: ({ ref, ...props }) => <LinkCard {...props} />,
  video: ({ ref, ...props }) => <Video controls {...props} />,
};
