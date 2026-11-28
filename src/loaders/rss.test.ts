import { describe, expect, it } from "vitest";

import { parseRss } from "./rss";

const PUB_DATE = "Mon, 22 Dec 2025 03:00:00 GMT";

const toRss = (items: string): string =>
  `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>feed</title>${items}</channel></rss>`;

const toItem = (title: string, link: string, pubDate = PUB_DATE): string =>
  `<item><title><![CDATA[${title}]]></title><link>${link}</link><pubDate>${pubDate}</pubDate></item>`;

describe(parseRss, () => {
  it("returns the items", () => {
    expect.hasAssertions();

    const xml = toRss(
      toItem("First & <one>", "https://example.com/1") +
        toItem("Second", "https://example.com/2"),
    );

    expect(parseRss(xml)).toStrictEqual([
      {
        title: "First & <one>",
        link: "https://example.com/1",
        pubDate: new Date(PUB_DATE),
      },
      {
        title: "Second",
        link: "https://example.com/2",
        pubDate: new Date(PUB_DATE),
      },
    ]);
  });

  it("returns a single item as an array", () => {
    expect.hasAssertions();
    expect(
      parseRss(toRss(toItem("Only", "https://example.com/1"))),
    ).toStrictEqual([
      {
        title: "Only",
        link: "https://example.com/1",
        pubDate: new Date(PUB_DATE),
      },
    ]);
  });

  it("keeps numeric titles as strings", () => {
    expect.hasAssertions();
    expect(
      parseRss(toRss(toItem("007", "https://example.com/1"))),
    ).toStrictEqual([
      {
        title: "007",
        link: "https://example.com/1",
        pubDate: new Date(PUB_DATE),
      },
    ]);
  });

  it("returns an empty array when there are no items", () => {
    expect.hasAssertions();
    expect(parseRss(toRss(""))).toStrictEqual([]);
  });

  it("throws when the XML is not RSS", () => {
    expect.hasAssertions();
    expect(() => parseRss("<html><body>Not Found</body></html>")).toThrow(
      "rss",
    );
  });

  it("throws when a link is not a URL", () => {
    expect.hasAssertions();
    expect(() => parseRss(toRss(toItem("Broken", "not a url")))).toThrow(
      "link",
    );
  });

  it("throws when a publication date is invalid", () => {
    expect.hasAssertions();
    expect(() =>
      parseRss(toRss(toItem("Broken", "https://example.com/1", "not a date"))),
    ).toThrow("pubDate");
  });
});
