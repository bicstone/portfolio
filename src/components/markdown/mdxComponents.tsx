import Divider from "@mui/material/Divider";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { AnchorIcon } from "./AnchorIcon";
import { AnchorLink } from "./AnchorLink";
import { Blockquote } from "./Blockquote";
import { Heading } from "./Heading";
import { Image } from "./Image";
import { InlineCode } from "./InlineCode";
import { LinkCard } from "./LinkCard";
import { Paragraph } from "./Paragraph";
import { QuotingCode } from "./QuotingCode";
import { Table } from "./Table";
import { Video } from "./Video";

import type { MDXProviderComponentsProp } from "@mdx-js/react";

import { isDefined } from "@/utils/typeguard";

const notImplemented = (name: string): null => {
  isDefined(window.Sentry) &&
    window.Sentry.captureException(new Error(`Not implemented: ${name}`));
  return null;
};

export const mdxComponents: MDXProviderComponentsProp = {
  p: (props) => <Paragraph {...props} />,
  h1: () => notImplemented("h1"),
  h2: (props) => <Heading variant="h5" component="h2" {...props} />,
  h3: (props) => <Heading variant="subtitle1" component="h3" {...props} />,
  h4: (props) => <Heading variant="subtitle2" component="h4" {...props} />,
  h5: () => notImplemented("h5"),
  h6: () => notImplemented("h6"),
  blockquote: (props) => <Blockquote {...props} />,
  table: (props) => <Table {...props} />,
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
  pre: (props) => <QuotingCode {...props} />,
  hr: (props) => <Divider {...props} />,
  a: (props) => <AnchorLink {...props} />,
  anchor: (props) => <AnchorIcon {...props} />,
  link: (props) => <LinkCard {...props} />,
  video: (props) => <Video controls {...props} />,
  img: (props) => <Image {...props} />,
};
