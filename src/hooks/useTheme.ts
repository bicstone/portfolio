import green from "@mui/material/colors/green";
import pink from "@mui/material/colors/pink";
import createTheme from "@mui/material/styles/createTheme";
import createExtendTheme from "@mui/material/styles/experimental_extendTheme";
import { useMemo } from "react";

import type { CssVarsTheme, Theme } from "@mui/material/styles";

import { FONT_FAMILY } from "@/components/markdown/constants";

export const useTheme = (): Omit<Theme, "palette"> & CssVarsTheme => {
  const defaultTheme = useMemo(() => createTheme(), []);
  const theme = useMemo(() => {
    return createExtendTheme({
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: green[300],
            },
            secondary: {
              main: pink.A700,
            },
            text: {
              secondary: "rgba(0, 0, 0, 0.65)",
            },
            Avatar: {
              defaultBg: green[300],
            },
          },
        },
        dark: {
          palette: {
            // ダークテーマでは彩度を200以下にする
            // @SEE: https://material.io/design/color/dark-theme.html
            primary: {
              main: green[200],
            },
            secondary: {
              main: pink[200],
            },
            text: {
              secondary: "rgba(255, 255, 255, 0.7)",
            },
            Avatar: {
              defaultBg: green[200],
            },
          },
        },
      },
      typography: {
        fontFamily: FONT_FAMILY,
      },
      shape: {
        borderRadius: 8, // defaultTheme.spacing(1)
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: "bold",
            },
            sizeSmall: {
              padding: defaultTheme.spacing(0.5, 1.5),
            },
          },
        },
        MuiButtonBase: {
          styleOverrides: {
            root: {
              userSelect: "auto",
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              marginRight: defaultTheme.spacing(0.5),
              marginTop: defaultTheme.spacing(0.5),
            },
          },
        },
        MuiLinearProgress: {
          styleOverrides: {
            root: {
              height: defaultTheme.spacing(0.5),
            },
          },
        },
        MuiLink: {
          defaultProps: {
            color: "inherit",
          },
        },
        MuiPaper: {
          styleOverrides: {
            rounded: {
              borderRadius: defaultTheme.spacing(1.5),
            },
          },
        },
        MuiAccordion: {
          styleOverrides: {
            rounded: {
              "&:before": {
                display: "none",
              },
              "&:not(:last-of-type)": {
                borderBottom: `1px solid ${defaultTheme.palette.divider}`,
              },
              "&:first-of-type": {
                borderTopLeftRadius: defaultTheme.spacing(1.5),
                borderTopRightRadius: defaultTheme.spacing(1.5),
              },
              "&:last-of-type": {
                borderBottomLeftRadius: defaultTheme.spacing(1.5),
                borderBottomRightRadius: defaultTheme.spacing(1.5),
              },
            },
          },
        },
        MuiToggleButton: {
          styleOverrides: {
            root: {
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: "bold",
            },
          },
        },
      },
    });
  }, [defaultTheme]);

  return theme;
};
