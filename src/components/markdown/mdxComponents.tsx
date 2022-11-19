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
import { Image } from "./Image";
import { InlineCode } from "./InlineCode";
import { LinkCard } from "./LinkCard";
import { Paragraph } from "./Paragraph";
import { QuotingCode } from "./QuotingCode";
import { Table } from "./Table";
import { Video } from "./Video";

const notImplemented = (name: string): null => {
  captureException(new Error(`Not implemented: ${name}`));
  return null;
};

type MdxComponents = Record<string, (props: any) => JSX.Element | null>;

export const mdxComponents: MdxComponents = {
  p: ({ ref, ...props }: JSX.IntrinsicElements["p"]) => (
    <Paragraph {...props} />
  ),
  h1: () => notImplemented("h1"),
  h2: ({ ref, ...props }: JSX.IntrinsicElements["h2"]) => (
    <Heading variant="h5" component="h2" {...props} />
  ),
  h3: ({ ref, ...props }: JSX.IntrinsicElements["h3"]) => (
    <Heading variant="h6" component="h3" {...props} />
  ),
  h4: ({ ref, ...props }: JSX.IntrinsicElements["h4"]) => (
    <Heading variant="subtitle1" component="h4" {...props} />
  ),
  h5: () => notImplemented("h5"),
  h6: () => notImplemented("h6"),
  blockquote: ({ ref, ...props }: JSX.IntrinsicElements["blockquote"]) => (
    <Blockquote {...props} />
  ),
  table: ({ ref, ...props }: JSX.IntrinsicElements["table"]) => (
    <Table {...props} />
  ),
  thead: ({ ref, ...props }: JSX.IntrinsicElements["thead"]) => (
    <TableHead {...props} />
  ),
  tbody: ({ ref, ...props }: JSX.IntrinsicElements["tbody"]) => (
    <TableBody {...props} />
  ),
  tr: ({ ref, ...props }: JSX.IntrinsicElements["tr"]) => (
    <TableRow {...props} />
  ),
  th: ({ ref, align, ...props }: JSX.IntrinsicElements["th"]) => {
    if (align === "char") {
      notImplemented("th align=char");
      return null;
    }
    return <TableCell align={align ?? "inherit"} component="th" {...props} />;
  },
  td: ({ ref, align, ...props }: JSX.IntrinsicElements["td"]) => {
    if (align === "char") {
      notImplemented("td align=char");
      return null;
    }
    return <TableCell align={align ?? "inherit"} component="td" {...props} />;
  },
  inlineCode: ({ ref, ...props }: JSX.IntrinsicElements["code"]) => (
    <InlineCode {...props} />
  ),
  pre: ({ ref, ...props }: JSX.IntrinsicElements["pre"]) => (
    <QuotingCode {...props} />
  ),
  hr: ({ ref, ...props }: JSX.IntrinsicElements["hr"]) => (
    <Divider {...props} />
  ),
  a: ({ ref, ...props }: JSX.IntrinsicElements["a"]) => (
    <AnchorLink {...props} />
  ),
  anchor: ({ ref, ...props }: any) => <AnchorIcon {...props} />,
  link: ({ ref, ...props }: JSX.IntrinsicElements["a"]) => (
    <LinkCard {...props} />
  ),
  video: ({ ref, ...props }: JSX.IntrinsicElements["video"]) => (
    <Video controls {...props} />
  ),
  img: ({ ref, ...props }: JSX.IntrinsicElements["img"]) => (
    <Image {...props} />
  ),
};
