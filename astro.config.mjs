// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://bicstone.me",
  // 既存の URL（/outputs など）に合わせて末尾のスラッシュを付けない。
  // Astro のドキュメントの推奨どおり、build.format: "file" と組み合わせる。
  trailingSlash: "never",
  build: {
    format: "file",
  },
});
