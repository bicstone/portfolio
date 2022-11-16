import { StickyNote2Rounded as StickyNote2Icon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { graphql, Link } from "gatsby";
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

  return (
    <>
      <Button
        component={Link}
        to="/blog"
        variant="outlined"
        color="secondary"
        size="small"
        startIcon={<StickyNote2Icon />}
        css={(theme) => ({
          marginTop: theme.spacing(1),
          marginRight: theme.spacing(1),
        })}
      >
        {t("blog.title")}
      </Button>

      {links.map((link) => (
        <Button
          key={link.id}
          href={link.href}
          variant="outlined"
          color="secondary"
          size="small"
          rel="external noreferrer noopener"
          target="_blank"
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
