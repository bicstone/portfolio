export const SITE_METADATA = {
  title: "おおいし (@bicstone)",
  shortTitle: "bicstone",
  siteUrl: process.env.GATSBY_SITE_URL ?? "https://bicstone.me",
  description:
    "Webエンジニア/機械エンジニア おおいし (@bicstone) のポートフォリオサイトです。",
  author: "bicstone",
  logoImage: "https://static.bicstone.me/icon_circular.png",
  ogpImage: "https://static.bicstone.me/og_image.png",
  firstName: "Takanori",
  lastName: "Oishi",
  defaultLanguage: "ja",
  tileColor: "#81c784",
  maskColor: "#2d1e1e",
} as const satisfies Record<string, string>;
