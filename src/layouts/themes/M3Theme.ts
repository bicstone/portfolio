/**

Forked from https://github.com/ZakAlbert/react-material-you-theme/tree/95d94dcbfe

MIT License

Copyright (c) 2022 @ZakAlbert94

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import type { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    // primary: string,
    onPrimary: PaletteColor;

    primaryContainer: PaletteColor;
    onPrimaryContainer: PaletteColor;

    // secondary: string,
    onSecondary: PaletteColor;

    secondaryContainer: PaletteColor;
    onSecondaryContainer: PaletteColor;

    tertiary: PaletteColor;
    onTertiary: PaletteColor;

    tertiaryContainer: PaletteColor;
    onTertiaryContainer: PaletteColor;

    // error: string,
    onError: PaletteColor;

    errorContainer: PaletteColor;
    onErrorContainer: PaletteColor;

    background2: PaletteColor;
    onBackground: PaletteColor;

    surface: PaletteColor;
    onSurface: PaletteColor;

    surfaceVariant: PaletteColor;
    onSurfaceVariant: PaletteColor;

    inverseSurface: PaletteColor;
    inverseOnSurface: PaletteColor;
    inversePrimary: PaletteColor;

    surfaceTint: string;

    outline: string;
    shadow: string;
  }

  interface PaletteOptions {
    // primary?: string,
    onPrimary?: PaletteColor;

    primaryContainer?: PaletteColor;
    onPrimaryContainer?: PaletteColor;

    // secondary?: string,
    onSecondary?: PaletteColor;

    secondaryContainer?: PaletteColor;
    onSecondaryContainer?: PaletteColor;

    tertiary?: PaletteColor;
    onTertiary?: PaletteColor;

    tertiaryContainer?: PaletteColor;
    onTertiaryContainer?: PaletteColor;

    // error?: string,
    onError?: PaletteColor;

    errorContainer?: PaletteColor;
    onErrorContainer?: PaletteColor;

    background2?: PaletteColor;
    onBackground?: PaletteColor;

    surface?: PaletteColor;
    onSurface?: PaletteColor;

    surfaceVariant?: PaletteColor;
    onSurfaceVariant?: PaletteColor;

    inverseSurface?: PaletteColor;
    inverseOnSurface?: PaletteColor;
    inversePrimary?: PaletteColor;

    surfaceTint?: string;

    outline?: string;
    shadow?: string;
  }
}
declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    tones?: M3ThemeTones;
  }
  interface Theme {
    tones?: M3ThemeTones;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    elevated: true;
    filled: true;
    tonal: true;
  }
  interface ButtonPropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    filled: true;
  }
}

declare module "@mui/material/Fab" {
  interface FabPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    surface: true;
  }
  interface FabPropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

interface M3Tone {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
}
export interface M3ThemeTones {
  primary: M3Tone;
  secondary: M3Tone;
  tertiary: M3Tone;
  neutral: M3Tone;
  neutralVariant: M3Tone;
  error: M3Tone;
}

export interface M3ColorTokens {
  primary: string;
  onPrimary: string;

  primaryContainer: string;
  onPrimaryContainer: string;

  secondary: string;
  onSecondary: string;

  secondaryContainer: string;
  onSecondaryContainer: string;

  tertiary: string;
  onTertiary: string;

  tertiaryContainer: string;
  onTertiaryContainer: string;

  error: string;
  onError: string;

  errorContainer: string;
  onErrorContainer: string;

  background: string;
  onBackground: string;

  surface: string;
  onSurface: string;

  surfaceVariant: string;
  onSurfaceVariant: string;

  inverseSurface: string;
  inverseOnSurface: string;

  inversePrimary: string;
  surfaceTint?: string;

  outline: string;
  shadow: string;
}

export type M3ThemeMode = "dark" | "light";

export interface M3ThemeScheme {
  light: M3ColorTokens;
  dark: M3ColorTokens;
  tones?: M3ThemeTones;
}

export const getDesignTokens = (
  mode: M3ThemeMode,
  scheme: M3ColorTokens,
  tones?: M3ThemeTones
): ThemeOptions => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    palette: {
      mode,
      primary: {
        main: scheme.primary,
        contrastText: scheme.onPrimary,
      },
      onPrimary: {
        main: scheme.onPrimary,
        contrastText: scheme.primary,
      },
      primaryContainer: {
        main: scheme.primaryContainer,
        contrastText: scheme.onPrimaryContainer,
      },
      onPrimaryContainer: {
        main: scheme.onPrimaryContainer,
        contrastText: scheme.primaryContainer,
      },
      secondary: {
        main: scheme.secondary,
        contrastText: scheme.onSecondary,
      },
      onSecondary: {
        main: scheme.onSecondary,
        contrastText: scheme.secondary,
      },
      secondaryContainer: {
        main: scheme.secondaryContainer,
        contrastText: scheme.onSecondaryContainer,
      },
      onSecondaryContainer: {
        main: scheme.onSecondaryContainer,
        contrastText: scheme.secondaryContainer,
      },
      tertiary: {
        main: scheme.tertiary,
        contrastText: scheme.onTertiary,
      },
      onTertiary: {
        main: scheme.onTertiary,
        contrastText: scheme.tertiary,
      },
      tertiaryContainer: {
        main: scheme.tertiaryContainer,
        contrastText: scheme.onTertiaryContainer,
      },
      onTertiaryContainer: {
        main: scheme.onTertiaryContainer,
        contrastText: scheme.tertiary,
      },
      error: {
        main: scheme.error,
        contrastText: scheme.onError,
      },
      onError: {
        main: scheme.onError,
        contrastText: scheme.error,
      },
      errorContainer: {
        main: scheme.errorContainer,
        contrastText: scheme.onErrorContainer,
      },
      onErrorContainer: {
        main: scheme.onErrorContainer,
        contrastText: scheme.errorContainer,
      },
      background2: {
        main: scheme.background,
        contrastText: scheme.onBackground,
      },
      onBackground: {
        main: scheme.onBackground,
        contrastText: scheme.background,
      },
      surface: {
        main: scheme.surface,
        contrastText: scheme.onSurface,
      },
      onSurface: {
        main: scheme.onSurface,
        contrastText: scheme.surface,
      },
      surfaceVariant: {
        main: scheme.surfaceVariant,
        contrastText: scheme.onSurfaceVariant,
      },
      onSurfaceVariant: {
        main: scheme.onSurfaceVariant,
        contrastText: scheme.surfaceVariant,
      },
      inverseSurface: {
        main:
          scheme.inverseSurface ??
          (mode === "light" ? tones?.neutral[20] : tones?.neutral[90]),
        contrastText:
          scheme.inverseOnSurface ??
          (mode === "light" ? tones?.neutral[95] : tones?.neutral[20]),
      },
      inverseOnSurface: {
        main:
          scheme.inverseOnSurface ??
          (mode === "light" ? tones?.neutral[95] : tones?.neutral[20]),
        contrastText:
          scheme.inverseSurface ??
          (mode === "light" ? tones?.neutral[20] : tones?.neutral[90]),
      },
      inversePrimary: {
        main:
          scheme.inversePrimary ??
          (mode === "light" ? tones?.neutral[80] : tones?.neutral[40]),
        contrastText: scheme.primary,
      },

      surfaceTint: scheme.primary,
      outline: scheme.outline,
      shadow: scheme.shadow,

      background: {
        default: scheme.background,
        paper: scheme.surface,
      },
      common: {
        white: scheme.background,
        black: scheme.onBackground,
      },
      text: {
        primary: scheme.onSurface,
        secondary: scheme.onSecondaryContainer,
      },
      divider: scheme.outline,
    },
    tones,
  } as ThemeOptions;
};
