// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://bicstone.me",
  // 既定の build.format: "directory" と組み合わせる。開発サーバーと本番で
  // 末尾スラッシュの扱いを揃えるための、Astro のドキュメントの推奨設定。
  trailingSlash: "always",
});
