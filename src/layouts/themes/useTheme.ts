import { createTheme } from "@mui/material/styles";
import createExtendTheme from "@mui/material/styles/experimental_extendTheme";
import { useMemo } from "react";

import { components } from "./M3Components";
import { getDesignTokens } from "./M3Theme";
import { darkColorTokens, lightColorTokens, tones } from "./defaultColorTokens";

import type { CssVarsTheme, Theme } from "@mui/material/styles";

import { FONT_FAMILY } from "@/components/markdown/constants";

export const useTheme = (): Omit<Theme, "palette"> & CssVarsTheme => {
  const lightTheme = createTheme(
    getDesignTokens("light", lightColorTokens, tones)
  );
  const darkTheme = createTheme(
    getDesignTokens("dark", darkColorTokens, tones)
  );

  const theme = useMemo(() => {
    return createExtendTheme({
      colorSchemes: {
        light: {
          palette: lightTheme.palette,
        },
        dark: {
          palette: darkTheme.palette,
        },
      },
      typography: {
        fontFamily: FONT_FAMILY,
      },
      shape: {
        borderRadius: 8, // defaultTheme.spacing(1)
      },
      components: {
        ...components,
        //   MuiButton: {
        //     styleOverrides: {
        //       root: {
        //         borderRadius: "50px",
        //         textTransform: "none",
        //         fontWeight: "bold",
        //       },
        //       sizeSmall: {
        //         padding: defaultTheme.spacing(0.5, 1.5),
        //       },
        //     },
        //   },
        //   MuiButtonBase: {
        //     styleOverrides: {
        //       root: {
        //         userSelect: "auto",
        //       },
        //     },
        //   },
        //   MuiChip: {
        //     styleOverrides: {
        //       root: {
        //         marginRight: defaultTheme.spacing(0.5),
        //         marginTop: defaultTheme.spacing(0.5),
        //       },
        //     },
        //   },
        //   MuiLinearProgress: {
        //     styleOverrides: {
        //       root: {
        //         height: defaultTheme.spacing(0.5),
        //       },
        //     },
        //   },
        //   MuiLink: {
        //     defaultProps: {
        //       color: "inherit",
        //     },
        //   },
        //   MuiPaper: {
        //     styleOverrides: {
        //       rounded: {
        //         borderRadius: defaultTheme.spacing(1.5),
        //       },
        //     },
        //   },
        //   MuiAccordion: {
        //     styleOverrides: {
        //       rounded: {
        //         "&:before": {
        //           display: "none",
        //         },
        //         "&:not(:last-of-type)": {
        //           borderBottom: `1px solid ${defaultTheme.palette.divider}`,
        //         },
        //         "&:first-of-type": {
        //           borderTopLeftRadius: defaultTheme.spacing(1.5),
        //           borderTopRightRadius: defaultTheme.spacing(1.5),
        //         },
        //         "&:last-of-type": {
        //           borderBottomLeftRadius: defaultTheme.spacing(1.5),
        //           borderBottomRightRadius: defaultTheme.spacing(1.5),
        //         },
        //       },
        //     },
        //   },
        //   MuiToggleButton: {
        //     styleOverrides: {
        //       root: {
        //         borderRadius: "50px",
        //         textTransform: "none",
        //         fontWeight: "bold",
        //       },
        //     },
        //   },
      },
    });
  }, [darkTheme.palette, lightTheme.palette]);

  return theme;
};
