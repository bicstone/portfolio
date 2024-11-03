import createExtendTheme from "@mui/material/styles/experimental_extendTheme";
import { useMemo } from "react";

import { m3Components } from "./M3Components";
import { getDesignTokens } from "./M3Theme";
import { FONT_FAMILY } from "./constants";
import { darkColorTokens, lightColorTokens } from "./defaultColorTokens";

import type { CssVarsTheme, Theme } from "@mui/material/styles";

// css vars types
import type {} from "@mui/material/themeCssVarsAugmentation";

export type CustomTheme = Omit<Theme, "palette"> & CssVarsTheme;

export const useTheme = (): CustomTheme => {
  const lightTheme = getDesignTokens("light", lightColorTokens);
  const darkTheme = getDesignTokens("dark", darkColorTokens);

  const theme = useMemo(
    () =>
      createExtendTheme({
        colorSchemes: {
          light: {
            palette: {
              ...lightTheme.palette,
              Avatar: {
                defaultBg: lightTheme.palette?.onSurfaceVariant?.main,
              },
            },
          },
          dark: {
            palette: {
              ...darkTheme.palette,
              Avatar: {
                defaultBg: darkTheme.palette?.onSurfaceVariant?.main,
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
          ...m3Components,
          MuiCard: {
            ...m3Components.MuiCard,
            defaultProps: {
              ...m3Components.MuiCard?.defaultProps,
              variant: "filled",
            },
          },
          MuiButtonBase: {
            ...m3Components.MuiButtonBase,
            styleOverrides: {
              ...m3Components.MuiButtonBase?.styleOverrides,
              root: {
                userSelect: "auto",
              },
            },
          },
          MuiAccordion: {
            ...m3Components.MuiAccordion,
            styleOverrides: {
              ...m3Components.MuiAccordion?.styleOverrides,
              rounded: ({ theme }) => ({
                "&:first-of-type": {
                  borderTopLeftRadius: theme.spacing(2.5),
                  borderTopRightRadius: theme.spacing(2.5),
                },
                "&:last-of-type": {
                  borderBottomLeftRadius: theme.spacing(2.5),
                  borderBottomRightRadius: theme.spacing(2.5),
                },
              }),
            },
          },
        },
      }),
    [darkTheme.palette, lightTheme.palette],
  );

  return theme;
};
