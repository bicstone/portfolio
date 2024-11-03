import type { M3ColorTokens, M3ThemeTones } from "./M3Theme";

// https://m3.material.io/theme-builder#/custom
// core primary: `#e6ee9c`

export const lightColorTokens: M3ColorTokens = {
  primary: "#5b6400",
  onPrimary: "#ffffff",
  primaryContainer: "#dfeb77",
  onPrimaryContainer: "#1a1e00",
  secondary: "#5e6144",
  onSecondary: "#ffffff",
  secondaryContainer: "#e3e5c1",
  onSecondaryContainer: "#1b1d07",
  tertiary: "#3c665a",
  onTertiary: "#ffffff",
  tertiaryContainer: "#beeddd",
  onTertiaryContainer: "#002019",
  error: "#ba1b1b",
  onError: "#ffffff",
  errorContainer: "#ffdad4",
  onErrorContainer: "#410001",
  background: "#fffcf3",
  onBackground: "#1c1c17",
  surface: "#fffcf3",
  onSurface: "#1c1c17",
  surfaceVariant: "#e5e3d2",
  onSurfaceVariant: "#47483b",
  outline: "#78786a",
  shadow: "#000000",
  inverseSurface: "#31312b",
  inverseOnSurface: "#f4f1e9",
  inversePrimary: "#c3cf5e",
};

export const darkColorTokens: M3ColorTokens = {
  primary: "#c3cf5e",
  onPrimary: "#2e3400",
  primaryContainer: "#434b00",
  onPrimaryContainer: "#dfeb77",
  secondary: "#c7c9a6",
  onSecondary: "#30321a",
  secondaryContainer: "#46492e",
  onSecondaryContainer: "#e3e5c1",
  tertiary: "#a3d0c1",
  onTertiary: "#07372d",
  tertiaryContainer: "#234e43",
  onTertiaryContainer: "#beeddd",
  error: "#ffb4a9",
  onError: "#680003",
  errorContainer: "#930006",
  onErrorContainer: "#ffb4a9",
  background: "#1c1c17",
  onBackground: "#e5e2da",
  surface: "#1c1c17",
  onSurface: "#e5e2da",
  surfaceVariant: "#47483b",
  onSurfaceVariant: "#c8c7b7",
  outline: "#929282",
  shadow: "#000000",
  inverseSurface: "#e5e2da",
  inverseOnSurface: "#31312b",
  inversePrimary: "#5b6400",
};

export const tones: M3ThemeTones = {
  primary: {
    "0": "#000000",
    "10": "#1a1e00",
    "20": "#2e3400",
    "30": "#434b00",
    "40": "#5b6400",
    "50": "#737d11",
    "60": "#8d982d",
    "70": "#a7b245",
    "80": "#c3cf5e",
    "90": "#dfeb77",
    "95": "#edf983",
    "99": "#fdffd0",
    "100": "#ffffff",
  },
  secondary: {
    "0": "#000000",
    "10": "#1b1d07",
    "20": "#30321a",
    "30": "#46492e",
    "40": "#5e6144",
    "50": "#77795c",
    "60": "#919373",
    "70": "#acae8d",
    "80": "#c7c9a6",
    "90": "#e3e5c1",
    "95": "#f2f3cf",
    "99": "#feffda",
    "100": "#ffffff",
  },
  tertiary: {
    "0": "#000000",
    "10": "#002019",
    "20": "#07372d",
    "30": "#234e43",
    "40": "#3c665a",
    "50": "#547f72",
    "60": "#6d9a8c",
    "70": "#88b4a6",
    "80": "#a3d0c1",
    "90": "#beeddd",
    "95": "#ccfbeb",
    "99": "#f1fff9",
    "100": "#ffffff",
  },
  neutral: {
    "0": "#000000",
    "10": "#1c1c17",
    "20": "#31312b",
    "30": "#474741",
    "40": "#5f5e58",
    "50": "#787770",
    "60": "#929189",
    "70": "#adaba4",
    "80": "#c9c7be",
    "90": "#e5e2da",
    "95": "#f4f1e9",
    "99": "#fffcf3",
    "100": "#ffffff",
  },
  neutralVariant: {
    "0": "#000000",
    "10": "#1b1c11",
    "20": "#303125",
    "30": "#47483b",
    "40": "#5f5f52",
    "50": "#78786a",
    "60": "#929282",
    "70": "#adac9c",
    "80": "#c8c7b7",
    "90": "#e5e3d2",
    "95": "#f3f2e0",
    "99": "#fffdeb",
    "100": "#ffffff",
  },
  error: {
    "0": "#000000",
    "10": "#410001",
    "20": "#680003",
    "30": "#930006",
    "40": "#ba1b1b",
    "50": "#dd3730",
    "60": "#ff5449",
    "70": "#ff897a",
    "80": "#ffb4a9",
    "90": "#ffdad4",
    "95": "#ffede9",
    "99": "#fcfcfc",
    "100": "#ffffff",
  },
};
