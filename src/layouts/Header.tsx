import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import StickyNote2Icon from "@mui/icons-material/StickyNote2Rounded";
import AppBar from "@mui/material/AppBar";
import Button, { buttonClasses } from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles/CssVarsProvider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useLocation } from "@reach/router";
import { Link as RouterLink, withPrefix } from "gatsby";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { SearchButton } from "@/features/BlogPostSearch";

/**
 * Header Layout
 */
export const Header = (): JSX.Element => {
  const location = useLocation();
  const { mode: paletteMode, setMode: setPaletteMode } = useColorScheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const isHome = location.pathname === withPrefix("/");
  const isBlogHome = location.pathname === withPrefix("/blog");

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={scrollTrigger ? 4 : 0}
      role="banner"
      css={(theme) => ({
        background: scrollTrigger
          ? theme.vars.palette.background.paper
          : "transparent",
      })}
    >
      <Toolbar variant="dense" css={{ flexWrap: "wrap" }}>
        {isHome ? (
          <div css={{ display: "flex", alignItems: "center" }}>
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              css={(theme) => ({ margin: theme.spacing(0, 0.5) })}
            >
              <Link
                component={RouterLink}
                to="/"
                title={TRANSLATION.header.goToPortfolio}
              >
                {TRANSLATION.header.titleHome}
              </Link>
            </Typography>
          </div>
        ) : (
          <Link
            component={RouterLink}
            to="/"
            title={TRANSLATION.header.goToPortfolio}
          >
            <div
              css={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(0.5),
              })}
            >
              <img
                width={20}
                height={20}
                src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
                alt={TRANSLATION.header.avatar}
                loading="eager"
                decoding="async"
                css={(theme) => ({
                  marginRight: theme.spacing(0.5),
                  display: "inline-flex",
                })}
              />
              <Typography color="textPrimary" variant="h6" component="span">
                {TRANSLATION.header.titleHome}
              </Typography>
            </div>
          </Link>
        )}
        <div css={{ flexGrow: 1 }} />
        <nav>
          {isBlogHome ? (
            <SearchButton />
          ) : (
            <Button
              css={(theme) => ({
                backgroundColor: theme.vars.palette.background.default,
                marginRight: theme.spacing(0.5),
                "&:hover": {
                  backgroundColor: theme.vars.palette.background.default,
                },
                [theme.breakpoints.down("sm")]: {
                  [`& .${buttonClasses.startIcon}`]: {
                    display: "none",
                  },
                },
              })}
              variant="outlined"
              color="inherit"
              size="small"
              component={RouterLink}
              to="/blog"
              title={TRANSLATION.blog.title}
              startIcon={<StickyNote2Icon />}
            >
              <>
                <span
                  css={(theme) => ({
                    display: "inline",
                    [theme.breakpoints.down("sm")]: {
                      display: "none",
                    },
                  })}
                >
                  {TRANSLATION.blog.title}
                </span>
                <StickyNote2Icon
                  css={(theme) => ({
                    display: "none",
                    [theme.breakpoints.down("sm")]: {
                      display: "inline-block",
                    },
                  })}
                />
              </>
            </Button>
          )}
          <IconButton
            size="small"
            onClick={() => {
              setPaletteMode(paletteMode === "light" ? "dark" : "light");
            }}
            css={(theme) => ({ margin: theme.spacing(0, 1) })}
            title={TRANSLATION.header.toggleDarkThemeTitle}
          >
            {paletteMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
