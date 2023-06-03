import Button from "@mui/material/Button";
import { useLocation } from "@reach/router";
import { graphql, Link, withPrefix } from "gatsby";

import type { SocialLinksFragment } from "@/generated/graphqlTypes";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const query = graphql`
  fragment SocialLinks on LinksYaml {
    id
    href
    name
  }
`;

export const SocialLinks = (props: {
  links: readonly SocialLinksFragment[];
}): JSX.Element => {
  const { links } = props;

  const location = useLocation();
  const isHome = location.pathname === withPrefix("/");

  return (
    <>
      {!isHome && (
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
          {TRANSLATION.hello.goToPortfolio}
        </Button>
      )}

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
        {TRANSLATION.blog.title}
      </Button>

      {links.map((link) => (
        <Button
          key={link.id}
          href={link.href}
          variant="outlined"
          color="secondary"
          size="small"
          rel="external noopener"
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
