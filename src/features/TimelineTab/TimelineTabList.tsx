import styled, { type CSSObject } from "@emotion/styled";
import Button from "@mui/material/Button";
import { Link } from "gatsby";
import { type HTMLAttributes } from "react";

const activeClassName = "active";

const StyledAnchorLinkGroup = styled("nav")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));

const StyledLink = styled(Button)(({ theme }) => ({
  alignItems: "center",
  background: theme.vars.palette.surface.main,
  border: `1px solid ${theme.vars.palette.outline}`,
  borderRadius: theme.spacing(10),
  color: theme.vars.palette.onSurface.main,
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  width: "100%",

  ...(theme.typography.button as CSSObject),
  fontWeight: "bold",
  textTransform: "none",
  textDecoration: "none",

  "&:not(:last-of-type)": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "&:not(:first-of-type)": {
    marginLeft: -1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  [`&.${activeClassName}`]: {
    color: theme.vars.palette.onSecondaryContainer.main,
    background: theme.vars.palette.secondaryContainer.main,
  },
})) as typeof Button;

export const TimelineTabList = (
  props: HTMLAttributes<HTMLElement>
): JSX.Element => {
  return (
    <StyledAnchorLinkGroup {...props}>
      <StyledLink component={Link} to="/" activeClassName={activeClassName}>
        All
      </StyledLink>
      <StyledLink
        component={Link}
        to="/outputs"
        activeClassName={activeClassName}
      >
        Outputs
      </StyledLink>
      <StyledLink
        component={Link}
        to="/projects"
        activeClassName={activeClassName}
      >
        Projects
      </StyledLink>
      <StyledLink
        component={Link}
        to="/histories"
        activeClassName={activeClassName}
      >
        Histories
      </StyledLink>
    </StyledAnchorLinkGroup>
  );
};
