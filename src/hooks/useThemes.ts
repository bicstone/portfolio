import { green, pink } from "@mui/material/colors";
import {
  createTheme,
  CssVarsTheme,
  experimental_extendTheme as createExtendTheme,
  Theme,
} from "@mui/material/styles";
import React from "react";

export const useThemes = (): {
  theme: Omit<Theme, "palette"> & CssVarsTheme;
} => {
  const defaultTheme = React.useMemo(() => createTheme(), []);
  const theme = React.useMemo(() => {
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
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
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
      },
    });
  }, [defaultTheme]);

  return { theme };
};
