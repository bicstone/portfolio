export interface Feature {
  title: string;
  ogImage: string;
  url: string;
}

export const FEATURES = [
  {
    title: "コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話",
    ogImage: "./assets/code-review-comment-prefix.png",
    url: "https://zenn.dev/hacobell_dev/articles/code-review-comment-prefix",
  },
  {
    title: "もうブロッカーにしない！コードレビューを爆速にするための組織づくり",
    ogImage: "./assets/code-review-blocker.png",
    url: "https://zenn.dev/hacobell_dev/articles/code-review-blocker",
  },
  {
    title: "【GraphQL】スキーマ駆動開発におけるエラーレスポンス設計パターン集",
    ogImage: "./assets/graphql-error-response.png",
    url: "https://zenn.dev/hacobell_dev/articles/graphql-error-response",
  },
  {
    title: "backlog-notify",
    ogImage: "./assets/backlog-notify.png",
    url: "https://github.com/bicstone/backlog-notify",
  },
] as const satisfies Feature[];
