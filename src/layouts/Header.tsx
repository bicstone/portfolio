import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  GitHub as GitHubIcon,
  StickyNote2 as StickyNote2Icon,
} from "@mui/icons-material";
import {
  Toolbar,
  AppBar,
  Typography,
  useScrollTrigger,
  Link,
  Button,
  IconButton,
  useColorScheme,
  buttonClasses,
} from "@mui/material";
import { useLocation } from "@reach/router";
import { Link as RouterLink, withPrefix } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import siteMetaData from "@/constants/siteMetaData";
import { SearchButton } from "@/features/BlogPostSearch";

/**
 * Header Layout
 */
export const Header = (): JSX.Element => {
  const { t } = useI18next();
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
                title={t("header.back-to-home")}
              >
                {t("header.title-home")}
              </Link>
            </Typography>
          </div>
        ) : (
          <Link component={RouterLink} to="/" title={t("header.back-to-home")}>
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
                src={`${siteMetaData.siteUrl}${siteMetaData.imageAvatar}`}
                alt={t("header.avatar")}
                loading="eager"
                decoding="async"
                css={(theme) => ({
                  marginRight: theme.spacing(0.5),
                  display: "inline-flex",
                })}
              />
              <Typography color="textPrimary" variant="h6" component="span">
                {t("header.title-home")}
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
              title={t("blog.title")}
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
                  {t("blog.title")}
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
          <Button
            css={(theme) => ({
              backgroundColor: theme.vars.palette.background.default,
              marginRight: theme.spacing(0.5),
              "&:hover": {
                backgroundColor: theme.vars.palette.background.default,
              },
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            })}
            variant="outlined"
            color="inherit"
            size="small"
            href={`https://github.com/${siteMetaData.github}`}
            title={t("header.github-title")}
            startIcon={<GitHubIcon />}
            rel="external noreferrer noopener"
          >
            {t("header.github-title")}
          </Button>
          <IconButton
            size="small"
            onClick={() =>
              setPaletteMode(paletteMode === "light" ? "dark" : "light")
            }
            css={(theme) => ({ margin: theme.spacing(0, 1) })}
            title={t("header.toggleDarkTheme-title")}
          >
            {paletteMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
