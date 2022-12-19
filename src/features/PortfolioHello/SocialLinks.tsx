import { Button } from "@mui/material";
import { graphql, Link, withPrefix } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { SocialLinksFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment SocialLinks on ContentfulHello {
    id
    href
    name
  }
`;

export const SocialLinks = (props: {
  links: readonly SocialLinksFragment[];
}): JSX.Element => {
  const { links } = props;

  const { t } = useI18next();
  const isHome = location.pathname === withPrefix("/");

  return (
    <>
      {isHome ? (
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          color="secondary"
          size="small"
          css={(theme) => ({
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
          })}
        >
          {t("blog.title")}
        </Button>
      ) : (
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
          size="small"
          css={(theme) => ({
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
          })}
        >
          {t("hello.go-to-portfolio")}
        </Button>
      )}

      {links.map((link) => (
        <Button
          key={link.id}
          href={link.href}
          variant="outlined"
          color="secondary"
          size="small"
          rel="external noreferrer noopener"
          css={(theme) => ({
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
          })}
        >
          {link.name}
        </Button>
      ))}
    </>
  );
};
