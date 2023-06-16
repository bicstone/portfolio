export const SITE_METADATA = {
  title: "bicstone.me",
  shortTitle: "bicstone",
  siteUrl: process.env.GATSBY_SITE_URL ?? "https://bicstone.me",
  description:
    "Webエンジニア/機械エンジニア おおいし (@bicstone) のポートフォリオサイトです。",
  author: "bicstone",
  image: "/android-chrome-512x512.png",
  image192: "/android-chrome-192x192.png",
  twitter: "@bicstone_me",
  github: "bicstone",
  firstName: "Takanori",
  lastName: "Oishi",
  gender: "male",
  defaultLanguage: "ja",
  tileColor: "#81c784",
  maskColor: "#2d1e1e",
} as const satisfies Record<string, string>;
