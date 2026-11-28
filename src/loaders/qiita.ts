import { z } from "astro/zod";

import { fetchOk, type RemoteEntry } from "./remote";

const FIRST_PAGE = 1;
const PER_PAGE = 100;
const PAGE_INCREMENT = 1;

const itemsSchema = z.array(
  z.object({
    title: z.string(),
    url: z.url(),
    created_at: z.coerce.date(),
  }),
);

const fetchPage = async (
  username: string,
  page: number,
): Promise<RemoteEntry[]> => {
  const response = await fetchOk(
    `https://qiita.com/api/v2/users/${encodeURIComponent(username)}/items?page=${page}&per_page=${PER_PAGE}`,
  );
  const json: unknown = await response.json();
  const entries = itemsSchema.parse(json).map((item) => ({
    id: item.url,
    data: { title: item.title, url: item.url, date: item.created_at },
  }));
  return entries.length < PER_PAGE
    ? entries
    : [...entries, ...(await fetchPage(username, page + PAGE_INCREMENT))];
};

export const fetchQiitaArticles = async (
  username: string,
): Promise<RemoteEntry[]> => await fetchPage(username, FIRST_PAGE);
