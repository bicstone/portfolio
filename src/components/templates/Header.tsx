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
  Breakpoint,
  IconButton,
  useColorScheme,
} from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import { SvgIcon } from "src/components";
import { useBreakPoint, useSiteMetadata } from "src/hooks";

export interface HeaderProps {
  icon: string;
  iconAlt: string;
  isHome: boolean;
}

/**
 * ヘッダー部
 */
export const Header: React.FC<HeaderProps> = ({ icon, iconAlt, isHome }) => {
  const { t } = useI18next();
  const { mode: paletteMode, setMode: setPaletteMode } = useColorScheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const siteMetaData = useSiteMetadata();
  const width = useBreakPoint();
  const expandedBreakpoints: Breakpoint[] = ["xl", "lg", "md"];
  const isExpanded = expandedBreakpoints.includes(width);

  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? "default" : "transparent"}
      elevation={scrollTrigger ? 4 : 0}
      role="banner"
    >
      <Toolbar variant="dense" css={{ flexWrap: "wrap" }}>
        {isHome ? (
          <div css={{ display: "flex", alignItems: "center" }}>
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              css={(theme) => ({ margin: theme.spacing(0, 0.5) })}
              gutterBottom
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
            <div css={{ display: "flex", alignItems: "center" }}>
              <SvgIcon
                width={20}
                height={20}
                icon={icon}
                alt={iconAlt}
                css={(theme) => ({
                  marginRight: theme.spacing(0.5),
                  display: "inline-flex",
                })}
              />
              <Typography
                color="textPrimary"
                variant="h6"
                component="span"
                css={(theme) => ({ margin: theme.spacing(0, 0.5) })}
                gutterBottom
              >
                {t("header.title-home")}
              </Typography>
            </div>
          </Link>
        )}
        <div css={{ flexGrow: 1 }} />
        <nav>
          {isExpanded && (
            <>
              <Button
                css={(theme) => ({
                  backgroundColor: theme.vars.palette.background.default,
                  marginRight: theme.spacing(0.5),
                })}
                variant="outlined"
                color="inherit"
                size="small"
                component={RouterLink}
                to="/blog"
                title={t("blog.title")}
                startIcon={<StickyNote2Icon />}
              >
                {t("blog.title")}
              </Button>
              <Button
                css={(theme) => ({
                  backgroundColor: theme.vars.palette.background.default,
                  marginRight: theme.spacing(0.5),
                })}
                variant="outlined"
                color="inherit"
                size="small"
                href={`https://github.com/${siteMetaData.github}`}
                title={t("header.github-title")}
                startIcon={<GitHubIcon />}
                rel="external noreferrer noopener nofollow"
                target="_blank"
              >
                {t("header.github-title")}
              </Button>
            </>
          )}
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
