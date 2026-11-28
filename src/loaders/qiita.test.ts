import { describe, expect, it, vi } from "vitest";

import { fetchQiitaArticles } from "./qiita";

const PER_PAGE = 100;
const CREATED_AT = "2024-09-19T13:42:13+09:00";

const toItem = (id: string): Record<string, string> => ({
  title: `Article ${id}`,
  url: `https://qiita.com/bicstone/items/${id}`,
  created_at: CREATED_AT,
});

const toEntry = (id: string): Record<string, unknown> => ({
  id: `https://qiita.com/bicstone/items/${id}`,
  data: {
    title: `Article ${id}`,
    url: `https://qiita.com/bicstone/items/${id}`,
    date: new Date(CREATED_AT),
  },
});

describe(fetchQiitaArticles, () => {
  it("fetches the articles", async () => {
    expect.hasAssertions();

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(Response.json([toItem("only")]));

    await expect(fetchQiitaArticles("bicstone")).resolves.toStrictEqual([
      toEntry("only"),
    ]);
    expect(fetchMock.mock.calls.map(([input]) => input)).toStrictEqual([
      "https://qiita.com/api/v2/users/bicstone/items?page=1&per_page=100",
    ]);
  });

  it("fetches the next page while a page is full", async () => {
    expect.hasAssertions();

    const ids = Array.from({ length: PER_PAGE }, (_, index) => String(index));
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(Response.json(ids.map((id) => toItem(id))))
      .mockResolvedValueOnce(Response.json([toItem("last")]));

    await expect(fetchQiitaArticles("bicstone")).resolves.toStrictEqual([
      ...ids.map((id) => toEntry(id)),
      toEntry("last"),
    ]);
    expect(fetchMock.mock.calls.map(([input]) => input)).toStrictEqual([
      "https://qiita.com/api/v2/users/bicstone/items?page=1&per_page=100",
      "https://qiita.com/api/v2/users/bicstone/items?page=2&per_page=100",
    ]);
  });
});
