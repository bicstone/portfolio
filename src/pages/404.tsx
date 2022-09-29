import { SelfImprovement as SelfImprovementIcon } from "@mui/icons-material";
import { Typography, Container, Button } from "@mui/material";
import { graphql, Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { NotFoundPageQuery } from "@/generated/graphqlTypes";
import type { PageProps } from "gatsby";

import { WrapPageElement } from "@/layouts/WrapPageElement";
import { Head } from "@/templates/Head";

const NotFound = ({ data }: PageProps<NotFoundPageQuery>): JSX.Element => {
  const { t } = useI18next();

  return (
    <WrapPageElement>
      <Container maxWidth="md">
        <div
          css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}
        >
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
        <div
          css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}
        >
          {/* ホームに戻る */}
          <Button
            component={RouterLink}
            variant="contained"
            to="/"
            size="large"
          >
            {t("not-found.back-to-home")}
          </Button>
        </div>
      </Container>
    </WrapPageElement>
  );
};

export default NotFound;

export const query = graphql`
  query NotFoundPage($language: String!) {
    # gatsby-plugin-react-i18next
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export { Head };
