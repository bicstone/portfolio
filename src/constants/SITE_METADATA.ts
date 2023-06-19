export const SITE_METADATA = {
  title: "おおいし (@bicstone)",
  shortTitle: "bicstone",
  siteUrl: process.env.GATSBY_SITE_URL ?? "https://bicstone.me",
  description:
    "Webエンジニア/機械エンジニア おおいし (@bicstone) のポートフォリオサイトです。",
  author: "bicstone",
  image: "/android-chrome-512x512.png",
  firstName: "Takanori",
  lastName: "Oishi",
  defaultLanguage: "ja",
  tileColor: "#81c784",
  maskColor: "#2d1e1e",
} as const satisfies Record<string, string>;
