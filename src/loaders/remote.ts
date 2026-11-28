import type { Loader } from "astro/loaders";

export interface RemoteEntry {
  id: string;
  data: Record<string, unknown>;
}

interface Store {
  keys: () => string[];
  clear: () => void;
  set: (entry: {
    id: string;
    data: Record<string, unknown>;
    digest: string;
  }) => boolean;
}

export interface RemoteLoaderContext {
  store: Store;
  logger: { warn: (message: string) => void };
  parseData: (props: {
    id: string;
    data: Record<string, unknown>;
  }) => Promise<Record<string, unknown>>;
  generateDigest: (data: Record<string, unknown>) => string;
}

const REQUEST_TIMEOUT_MS = 30_000;

export const fetchOk = async (url: string): Promise<Response> => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response;
};

const fetchAndParse = async (
  context: RemoteLoaderContext,
  fetchEntries: () => Promise<RemoteEntry[]>,
): Promise<Array<{ id: string; data: Record<string, unknown> }>> => {
  const entries = await fetchEntries();
  const [first] = entries;
  if (first === undefined) {
    throw new Error("No entries were fetched");
  }
  return await Promise.all(
    entries.map(async ({ id, data }) => ({
      id,
      data: await context.parseData({ id, data }),
    })),
  );
};

export const loadWithFallback = async (
  context: RemoteLoaderContext,
  fetchEntries: () => Promise<RemoteEntry[]>,
): Promise<void> => {
  const { store, logger, generateDigest } = context;

  const parsed = await fetchAndParse(context, fetchEntries).catch(
    (error: unknown) => {
      const [cached] = store.keys();
      if (cached === undefined) {
        throw error;
      }
      logger.warn(
        `Failed to fetch entries. Using the entries from the previous build: ${String(error)}`,
      );
      return undefined;
    },
  );
  if (parsed === undefined) {
    return;
  }

  store.clear();
  for (const { id, data } of parsed) {
    store.set({ id, data, digest: generateDigest(data) });
  }
};

export const remoteLoader = (
  name: string,
  fetchEntries: () => Promise<RemoteEntry[]>,
): Loader => ({
  name,
  load: async (context) => {
    await loadWithFallback(context, fetchEntries);
  },
});
