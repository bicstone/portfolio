import styled, { type CSSObject } from "@emotion/styled";
import CheckIcon from "@mui/icons-material/CheckRounded";
import Button from "@mui/material/Button";
import { darken, lighten } from "@mui/material/styles";
import { Link } from "gatsby";
import { type HTMLAttributes } from "react";

import {
  defaultColorTokens,
  outputColorTokens,
  historyColorTokens,
  projectColorTokens,
  type M3ColorTokens,
} from "@/layouts/themes";

const activeClassName = "active";

const StyledAnchorLinkGroup = styled("nav")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  position: "sticky",
  top: theme.spacing(7),
  width: "100%",
  zIndex: theme.zIndex.appBar,
}));

const adoptColorTokens = (colorTokens: M3ColorTokens): CSSObject => {
  const background = colorTokens.surfaceVariant;
  const color = colorTokens.onSurface;
  const outline = colorTokens.outline;
  const activeBackground = colorTokens.secondaryContainer;
  const activeColor = colorTokens.onSecondaryContainer;

  return {
    background,
    border: `1px solid ${outline}`,
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
  const background = colorTokens.surfaceVariant;
  const color = colorTokens.onSurface;
  const outline = colorTokens.outline;
  const activeBackground = colorTokens.secondaryContainer;
  const activeColor = colorTokens.onSecondaryContainer;

  return {
    background,
    color,
    outline,
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
  boxShadow: theme.shadows[1],
  color: theme.vars.palette.onSurface.main,
  cursor: "pointer",
  display: "inline-flex",
  gap: theme.spacing(1),
  justifyContent: "center",
  padding: theme.spacing(2),
  whiteSpace: "nowrap",
  width: "100%",

  ...(theme.typography.button as CSSObject),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
    ...(theme.typography.caption as CSSObject),
  },

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
    fontWeight: "bold",
  },
})) as typeof Button;

const StyledCheckIcon = styled(CheckIcon)(({ theme }) => ({
  fontSize: "inherit",
  display: "none",
  [`.${activeClassName} &`]: {
    display: "inline-block",
  },
}));

export const TimelineTabList = (
  props: HTMLAttributes<HTMLElement>
): JSX.Element => {
  return (
    <StyledAnchorLinkGroup {...props}>
      <StyledLink
        component={Link}
        to="/"
        activeClassName={activeClassName}
        css={(theme) => {
          return {
            ...adoptColorTokens(defaultColorTokens.lightColorTokens),
            [theme.getColorSchemeSelector("dark")]: adoptDarkColorTokens(
              defaultColorTokens.darkColorTokens
            ),
          };
        }}
      >
        <StyledCheckIcon />
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
        <StyledCheckIcon />
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
        <StyledCheckIcon />
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
        <StyledCheckIcon />
        Histories
      </StyledLink>
    </StyledAnchorLinkGroup>
  );
};
