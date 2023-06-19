import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles/CssVarsProvider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link as RouterLink } from "gatsby";

import { BicstoneLogo } from "@/components/logos/BicstoneLogo";
import { TimelineSearchButton } from "@/features/TimelineSearch";

/**
 * Header Layout
 */
export const Header = (): JSX.Element => {
  const { mode: paletteMode, setMode: setPaletteMode } = useColorScheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? "primary" : "transparent"}
      elevation={0}
      role="banner"
      enableColorOnDark
      css={{
        ...(!scrollTrigger && {
          "&&": {
            // && is required to override theme CSS specificity
            background: "transparent",
          },
        }),
      }}
    >
      <Toolbar variant="dense" css={{ flexWrap: "wrap" }}>
        <Link
          component={RouterLink}
          to="/"
          title="ホームに移動"
          underline="hover"
        >
          <div
            css={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(1),
            })}
          >
            <BicstoneLogo
              aria-hidden="true"
              css={(theme) => ({
                display: "inline-flex",
                width: theme.spacing(3),
                height: theme.spacing(3),
              })}
            />
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              fontWeight="bold"
            >
              おおいし（@bicstone）
            </Typography>
          </div>
        </Link>
        <div css={{ flexGrow: 1 }} />
        <nav css={(theme) => ({ display: "flex", gap: theme.spacing(1) })}>
          <TimelineSearchButton />
          <IconButton
            size="small"
            onClick={() => {
              setPaletteMode(paletteMode === "light" ? "dark" : "light");
            }}
            title="ダークモード切り替え"
          >
            {paletteMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
