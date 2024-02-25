const siteUrl = process.env.GATSBY_SITE_URL ?? "https://bicstone.me";

export const SITE_METADATA = {
  title: "大石 貴則 (@bicstone)",
  shortTitle: "bicstone",
  siteUrl,
  description:
    "Webエンジニア/機械エンジニア 大石 貴則 (@bicstone) のポートフォリオサイトです。",
  author: "bicstone",
  logoImage: `${siteUrl}/images/icon_circular.png`,
  ogpImage: `${siteUrl}/images/og_image.png`,
  firstName: "Takanori",
  lastName: "Oishi",
  defaultLanguage: "ja",
  tileColor: "#81c784",
  maskColor: "#2d1e1e",
  profileLink:
    "https://bicstone.notion.site/Oishi-Takanori-8d96378d367e4d61833cd01a5357b4bc",
} as const satisfies Record<string, string>;
