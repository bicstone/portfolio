import { z } from "astro/zod";
import { XMLParser } from "fast-xml-parser";

const rssSchema = z.object({
  rss: z.object({
    channel: z.object({
      item: z
        .array(
          z.object({
            title: z.string(),
            link: z.url(),
            pubDate: z.coerce.date(),
          }),
        )
        .default([]),
    }),
  }),
});

export type RssItem = z.infer<
  typeof rssSchema
>["rss"]["channel"]["item"][number];

const parser = new XMLParser({
  parseTagValue: false,
  isArray: (tagName) => tagName === "item",
});

export const parseRss = (xml: string): RssItem[] => {
  const parsed: unknown = parser.parse(xml);
  return rssSchema.parse(parsed).rss.channel.item;
};
