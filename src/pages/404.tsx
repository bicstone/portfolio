import { SelfImprovementRounded as SelfImprovementIcon } from "@mui/icons-material";
import { Typography, Container, Button } from "@mui/material";
import { graphql, Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import { Head } from "@/layouts/Head";

export const query = graphql`
  query NotFoundPage($language: String!) {
    # gatsby-plugin-react-i18next
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ...UseUrl
        }
      }
    }
  }
`;

export { Head };

const NotFound = (): JSX.Element => {
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
        <Button
          component={RouterLink}
          variant="contained"
          to="/"
          color="secondary"
        >
          {t("not-found.back-to-home")}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
