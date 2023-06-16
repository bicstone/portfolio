import styled, { type CSSObject } from "@emotion/styled";
import { Link } from "gatsby";
import { type HTMLAttributes } from "react";

const activeClassName = "active";

const StyledAnchorLinkGroup = styled("nav")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  alignItems: "center",
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: theme.spacing(10),
  color: theme.vars.palette.text.secondary,
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
    borderLeft: "1px solid transparent",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  "&:hover": {
    background: theme.vars.palette.action.hover,
  },

  [`&.${activeClassName}`]: {
    color: theme.vars.palette.text.primary,
    background: `rgba(${theme.vars.palette.secondary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`,

    "&:hover": {
      background: `rgba(${theme.vars.palette.secondary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})`,
    },
  },
}));

export const TimelineTabList = (
  props: HTMLAttributes<HTMLElement>
): JSX.Element => {
  return (
    <StyledAnchorLinkGroup {...props}>
      <StyledLink to="/" activeClassName={activeClassName}>
        All
      </StyledLink>
      <StyledLink to="/outputs" activeClassName={activeClassName}>
        Outputs
      </StyledLink>
      <StyledLink to="/projects" activeClassName={activeClassName}>
        Projects
      </StyledLink>
      <StyledLink to="/histories" activeClassName={activeClassName}>
        Histories
      </StyledLink>
    </StyledAnchorLinkGroup>
  );
};
