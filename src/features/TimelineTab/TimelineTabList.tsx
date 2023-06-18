import styled, { type CSSObject } from "@emotion/styled";
import Button from "@mui/material/Button";
import { darken, lighten } from "@mui/material/styles";
import { Link } from "gatsby";
import { type HTMLAttributes } from "react";

import {
  outputColorTokens,
  historyColorTokens,
  projectColorTokens,
  type M3ColorTokens,
} from "@/layouts/themes";

const activeClassName = "active";

const StyledAnchorLinkGroup = styled("nav")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));

const adoptColorTokens = (colorTokens: M3ColorTokens): CSSObject => {
  const background = colorTokens.surface;
  const color = colorTokens.onSurface;
  const activeBackground = colorTokens.secondaryContainer;
  const activeColor = colorTokens.onSecondaryContainer;

  return {
    background,
    color,
    "&:hover": {
      background: darken(background, 0.08),
    },
    [`&.${activeClassName}`]: {
      background: activeBackground,
      color: activeColor,
      "&:hover": {
        background: darken(activeBackground, 0.08),
      },
    },
  };
};

const adoptDarkColorTokens = (colorTokens: M3ColorTokens): CSSObject => {
  const background = colorTokens.surface;
  const color = colorTokens.onSurface;
  const activeBackground = colorTokens.secondaryContainer;
  const activeColor = colorTokens.onSecondaryContainer;

  return {
    background,
    color,
    "&:hover": {
      background: lighten(background, 0.08),
    },
    [`&.${activeClassName}`]: {
      background: activeBackground,
      color: activeColor,
      "&:hover": {
        background: lighten(activeBackground, 0.08),
      },
    },
  };
};

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
        css={(theme) => {
          return {
            ...adoptColorTokens(outputColorTokens.lightColorTokens),
            [theme.getColorSchemeSelector("dark")]: adoptDarkColorTokens(
              outputColorTokens.darkColorTokens
            ),
          };
        }}
      >
        Outputs
      </StyledLink>
      <StyledLink
        component={Link}
        to="/projects"
        activeClassName={activeClassName}
        css={(theme) => {
          return {
            ...adoptColorTokens(projectColorTokens.lightColorTokens),
            [theme.getColorSchemeSelector("dark")]: adoptDarkColorTokens(
              projectColorTokens.darkColorTokens
            ),
          };
        }}
      >
        Projects
      </StyledLink>
      <StyledLink
        component={Link}
        to="/histories"
        activeClassName={activeClassName}
        css={(theme) => {
          return {
            ...adoptColorTokens(historyColorTokens.lightColorTokens),
            [theme.getColorSchemeSelector("dark")]: adoptDarkColorTokens(
              historyColorTokens.darkColorTokens
            ),
          };
        }}
      >
        Histories
      </StyledLink>
    </StyledAnchorLinkGroup>
  );
};
