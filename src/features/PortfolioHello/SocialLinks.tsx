import { Button } from "@mui/material";
import { graphql, Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import type { SocialLinksFragment } from "@/generated/graphqlTypes";

export const SocialLinksQuery = graphql`
  fragment SocialLinks on ContentfulHello {
    id
    href
    name
  }
`;

export const SocialLinks = (props: {
  links: SocialLinksFragment[];
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        component={Link}
        to="/blog"
        variant="outlined"
        color="secondary"
        size="small"
        css={(theme) => ({
          marginTop: theme.spacing(1),
          marginRight: theme.spacing(1),
        })}
      >
        {t("blog.title")}
      </Button>

      {props.links.map((link) => (
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