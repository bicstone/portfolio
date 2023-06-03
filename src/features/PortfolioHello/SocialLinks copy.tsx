import styled from "@emotion/styled";
import Button, { type ButtonProps } from "@mui/material/Button";
import { useLocation } from "@reach/router";
import { Link, withPrefix } from "gatsby";

import { TRANSLATION } from "@/constants/TRANSLATION";

const StyledButton = styled(Button)(({ theme }) => ({
marginTop: theme.spacing(1),
marginRight: theme.spacing(1),
}));

const SocialLink = (props: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      variant="outlined"
      color="secondary"
      size="small"
      rel="external noopener"
      {...props}
    />
  );
};

export const SocialLinks = (): JSX.Element => {
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
