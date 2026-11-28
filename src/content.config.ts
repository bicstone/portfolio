import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";

const parseWithUrlId =
  (getUrl: (entry: Record<string, unknown>) => unknown) =>
  (text: string): Array<Record<string, unknown>> => {
    const entries: unknown = parse(text, { customTags: ["timestamp"] });
    if (!Array.isArray(entries)) {
      throw new TypeError("The top level of the YAML file must be an array");
    }
    const ids = new Set<unknown>();
    return entries.map((entry: Record<string, unknown>) => {
      const id = getUrl(entry);
      if (ids.has(id)) {
        throw new Error(`Duplicate URL: ${String(id)}`);
      }
      ids.add(id);
      return { ...entry, id };
    });
  };

const getEventUrl = (entry: Record<string, unknown>): unknown => {
  const { event } = entry;
  return typeof event === "object" && event !== null && "url" in event
    ? event.url
    : undefined;
};

const talks = defineCollection({
  loader: file("src/data/talks.yaml", {
    parser: parseWithUrlId(getEventUrl),
  }),
  schema: z.object({
    title: z.string().optional(),
    date: z.date(),
    role: z.enum(["speaker", "organizer"]),
    event: z.object({
      name: z.string(),
      url: z.url(),
    }),
    slides: z.url().optional(),
    video: z.url().optional(),
    featured: z.boolean().default(false),
    thumbnail: z.url().optional(),
  }),
});

const outputs = defineCollection({
  loader: file("src/data/outputs.yaml", {
    parser: parseWithUrlId((entry) => entry.url),
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    kind: z.enum([
      "media",
      "blog",
      "book",
      "contribution",
      "advent-calendar",
      "award",
    ]),
    site: z.string(),
    url: z.url(),
  }),
});

export const collections = { talks, outputs };
