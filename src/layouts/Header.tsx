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
  NoSsr,
} from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { SvgIcon } from "src/components";
import { useBreakPoint, useSiteMetadata } from "src/hooks";

import type { Breakpoint } from "@mui/material";

import { Search } from "@/features/search";

export interface HeaderProps {
  icon: string;
  iconAlt: string;
  isHome: boolean;
}

/**
 * Header Layout
 */
export const Header = ({ icon, iconAlt, isHome }: HeaderProps): JSX.Element => {
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
              <Typography color="textPrimary" variant="h6" component="span">
                {t("header.title-home")}
              </Typography>
            </div>
          </Link>
        )}
        <div css={{ flexGrow: 1 }} />
        <nav>
          {/* NoSSr to prevent FOUC */}
          <NoSsr>
            {isHome ? (
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
                startIcon={isExpanded ? <StickyNote2Icon /> : undefined}
              >
                {isExpanded ? t("blog.title") : <StickyNote2Icon />}
              </Button>
            ) : (
              <Search isExpanded={isExpanded} />
            )}
            {isExpanded && (
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
          </NoSsr>
        </nav>
      </Toolbar>
    </AppBar>
  );
};