const siteUrl = process.env.GATSBY_SITE_URL ?? "https://bicstone.me";

export const SITE_METADATA = {
  title: "大石 貴則 (@bicstone)",
  shortTitle: "bicstone",
  siteUrl,
  description:
    "Webエンジニア/機械エンジニア 大石 貴則 (@bicstone) のポートフォリオサイトです。",
  author: "bicstone",
  logoImage: "https://static.bicstone.me/icon_circular.png",
  ogpImage: "https://static.bicstone.me/og_image.png",
  firstName: "Takanori",
  lastName: "Oishi",
  defaultLanguage: "ja",
  tileColor: "#81c784",
  maskColor: "#2d1e1e",
  profileLink: "https://bicstone.me/cv",
} as const satisfies Record<string, string>;
