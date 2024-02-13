import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

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

export const FeaturedList = (): JSX.Element => {
  return (
    <Container as="section">
      {/* StaticImageを使用するためベタ書き :-/ */}
      <FeaturedCard
        title="コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話"
        url="https://zenn.dev/hacobell_dev/articles/code-review-comment-prefix"
      >
        <StaticImage
          src="../../../content/featured/code-review-comment-prefix.png"
          alt="コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話"
          width={1200}
          height={630}
        />
      </FeaturedCard>
      <FeaturedCard
        title="もうブロッカーにしない！コードレビューを爆速にするための組織づくり"
        url="https://zenn.dev/hacobell_dev/articles/code-review-blocker"
      >
        <StaticImage
          src="../../../content/featured/code-review-blocker.png"
          alt="もうブロッカーにしない！コードレビューを爆速にするための組織づくり"
          width={1200}
          height={630}
        />
      </FeaturedCard>
      <FeaturedCard
        title="【GraphQL】スキーマ駆動開発におけるエラーレスポンス設計パターン集"
        url="https://zenn.dev/hacobell_dev/articles/graphql-error-response"
      >
        <StaticImage
          src="../../../content/featured/graphql-error-response.png"
          alt="【GraphQL】スキーマ駆動開発におけるエラーレスポンス設計パターン集"
          width={1200}
          height={630}
        />
      </FeaturedCard>
      <FeaturedCard
        title="backlog-notify"
        url="https://github.com/bicstone/backlog-notify"
      >
        <StaticImage
          src="../../../content/featured/backlog-notify.png"
          alt="backlog-notify"
          width={1200}
          height={630}
        />
      </FeaturedCard>
    </Container>
  );
};
