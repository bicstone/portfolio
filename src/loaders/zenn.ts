import { fetchOk, type RemoteEntry } from "./remote";
import { parseRss } from "./rss";

export const fetchZennArticles = async (
  username: string,
): Promise<RemoteEntry[]> => {
  const response = await fetchOk(
    `https://zenn.dev/${encodeURIComponent(username)}/feed?all=1`,
  );
  return parseRss(await response.text()).map(({ title, link, pubDate }) => ({
    id: link,
    data: { title, url: link, date: pubDate },
  }));
};
