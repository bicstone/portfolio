import { describe, expect, it, vi } from "vitest";

import { fetchZennArticles } from "./zenn";

const FEED = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>feed</title><item><title><![CDATA[Article]]></title><link>https://zenn.dev/bicstone/articles/article</link><pubDate>Mon, 22 Dec 2025 03:00:00 GMT</pubDate></item></channel></rss>`;

describe(fetchZennArticles, () => {
  it("fetches every article from the feed", async () => {
    expect.hasAssertions();

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(FEED));

    await expect(fetchZennArticles("bicstone")).resolves.toStrictEqual([
      {
        id: "https://zenn.dev/bicstone/articles/article",
        data: {
          title: "Article",
          url: "https://zenn.dev/bicstone/articles/article",
          date: new Date("2025-12-22T03:00:00Z"),
        },
      },
    ]);
    expect(fetchMock.mock.calls.map(([input]) => input)).toStrictEqual([
      "https://zenn.dev/bicstone/feed?all=1",
    ]);
  });
});
