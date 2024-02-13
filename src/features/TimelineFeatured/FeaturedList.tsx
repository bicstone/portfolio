import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { type ComponentProps } from "react";

import { FeaturedCard } from "./FeaturedCard";

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

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

const staticImageProps = {
  width: 1200,
  height: 630,
  decoding: "async",
  loading: "eager",
} as const satisfies Partial<ComponentProps<typeof StaticImage>>;

export const FeaturedList = (): JSX.Element => {
  return (
    <Container as="section">
      {/* StaticImageを使用するためベタ書き :-/ */}
      <FeaturedCard
        title="コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話"
        url="https://zenn.dev/hacobell_dev/articles/code-review-comment-prefix"
      >
        <StaticImage
          src="./assets/code-review-comment-prefix.png"
          alt="コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話"
          {...staticImageProps}
        />
      </FeaturedCard>
    </Container>
  );
};
