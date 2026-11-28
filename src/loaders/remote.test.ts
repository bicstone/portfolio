import { describe, expect, it, vi } from "vitest";

import {
  fetchOk,
  loadWithFallback,
  type RemoteEntry,
  type RemoteLoaderContext,
} from "./remote";

interface TestContext {
  context: RemoteLoaderContext;
  store: Map<string, Record<string, unknown>>;
  warnings: string[];
}

const createContext = (
  cached: Record<string, Record<string, unknown>>,
): TestContext => {
  const store = new Map(Object.entries(cached));
  const warnings: string[] = [];
  const context = {
    store: {
      keys: () => [...store.keys()],
      clear: () => {
        store.clear();
      },
      set: ({ id, data }: { id: string; data: Record<string, unknown> }) => {
        store.set(id, data);
        return true;
      },
    },
    logger: {
      warn: (message: string) => {
        warnings.push(message);
      },
    },
    parseData: async ({ data }: { data: Record<string, unknown> }) => {
      if (typeof data["title"] !== "string") {
        throw new TypeError("Invalid data");
      }
      return await Promise.resolve(data);
    },
    generateDigest: () => "digest",
  };
  return { context, store, warnings };
};

const fetched: RemoteEntry[] = [{ id: "new", data: { title: "New" } }];
const cached = { old: { title: "Old" } };
const NOT_FOUND = 404;

describe(loadWithFallback, () => {
  it("replaces the stored entries with the fetched entries", async () => {
    expect.hasAssertions();

    const { context, store } = createContext(cached);

    await loadWithFallback(context, async () => await Promise.resolve(fetched));

    expect(Object.fromEntries(store)).toStrictEqual({ new: { title: "New" } });
  });

  it("keeps the previous entries and warns when fetching fails", async () => {
    expect.hasAssertions();

    const { context, store, warnings } = createContext(cached);

    await loadWithFallback(
      context,
      async () => await Promise.reject(new Error("Network error")),
    );

    expect(Object.fromEntries(store)).toStrictEqual(cached);
    expect(warnings).toStrictEqual([expect.stringContaining("Network error")]);
  });

  it("throws when fetching fails and there are no previous entries", async () => {
    expect.hasAssertions();

    const { context } = createContext({});

    await expect(
      loadWithFallback(
        context,
        async () => await Promise.reject(new Error("Network error")),
      ),
    ).rejects.toThrow("Network error");
  });

  it("treats zero fetched entries as a failure", async () => {
    expect.hasAssertions();

    const { context, store } = createContext(cached);

    await loadWithFallback(context, async () => await Promise.resolve([]));

    expect(Object.fromEntries(store)).toStrictEqual(cached);
  });

  it("leaves the stored entries unchanged when some fetched entries are invalid", async () => {
    expect.hasAssertions();

    const { context, store } = createContext(cached);
    const clear = vi.spyOn(context.store, "clear");

    await loadWithFallback(
      context,
      async () =>
        await Promise.resolve([...fetched, { id: "broken", data: {} }]),
    );

    expect(clear).not.toHaveBeenCalled();
    expect(Object.fromEntries(store)).toStrictEqual(cached);
  });
});

describe(fetchOk, () => {
  it("throws with the status and URL when the response is not OK", async () => {
    expect.hasAssertions();

    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: NOT_FOUND, statusText: "Not Found" }),
    );

    await expect(fetchOk("https://example.com/feed")).rejects.toThrow(
      "404 Not Found: https://example.com/feed",
    );
  });
});
