import { SelfImprovement as SelfImprovementIcon } from "@mui/icons-material";
import { Typography, Container, Button } from "@mui/material";
import { graphql, PageProps, Link as RouterLink, HeadFC } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import { NotFoundPageQuery } from "src/types";

import { HeadTemplate } from "@/templates/HeadTemplate";

const NotFound: React.FC<PageProps<NotFoundPageQuery>> = () => {
  const { t } = useI18next();

  return (
    <Container maxWidth="md">
      <div css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}>
        {/* 見つかりませんでした */}
        <SelfImprovementIcon
          css={(theme) => ({
            width: theme.spacing(20),
            height: theme.spacing(20),
          })}
        />
        <Typography variant="h4" component="h1" paragraph>
          {t("not-found.title")}
        </Typography>
        <Typography variant="body1">{t("not-found.description")}</Typography>
      </div>
      <div css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}>
        {/* ホームに戻る */}
        <Button component={RouterLink} variant="contained" to="/" size="large">
          {t("not-found.back-to-home")}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;

export const query = graphql`
  query NotFoundPage($language: String!) {
    # 原稿を取得する
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    # Bicstoneアイコンを取得する
    # "5qVePilXXNs2WxxIcvndga"は、contentful assetsのアイコンのID
    icon: contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
      title
      svg {
        content
      }
    }
  }
`;

export const Head: HeadFC = () => {
  return <HeadTemplate />;
};
