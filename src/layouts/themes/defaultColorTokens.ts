import type { M3ColorTokens, M3ThemeTones } from "./M3Theme";

// https://m3.material.io/theme-builder#/custom
// core primary: `#81c784`

export const lightColorTokens: M3ColorTokens = {
  primary: "#1f6c2f",
  onPrimary: "#ffffff",
  primaryContainer: "#a6f5a8",
  onPrimaryContainer: "#002106",
  secondary: "#526350",
  onSecondary: "#ffffff",
  secondaryContainer: "#d4e8d0",
  onSecondaryContainer: "#0f1f10",
  tertiary: "#39656c",
  onTertiary: "#ffffff",
  tertiaryContainer: "#bdebf2",
  onTertiaryContainer: "#001f23",
  error: "#ba1b1b",
  onError: "#ffffff",
  errorContainer: "#ffdad4",
  onErrorContainer: "#410001",
  background: "#fcfdf7",
  onBackground: "#1a1c19",
  surface: "#fcfdf7",
  onSurface: "#1a1c19",
  surfaceVariant: "#dee5d9",
  onSurfaceVariant: "#424840",
  outline: "#72796f",
  shadow: "#000000",
  inverseSurface: "#2e312d",
  inverseOnSurface: "#f0f1eb",
  inversePrimary: "#8ad98e",
};

export const darkColorTokens: M3ColorTokens = {
  primary: "#8ad98e",
  onPrimary: "#00390e",
  primaryContainer: "#005319",
  onPrimaryContainer: "#a6f5a8",
  secondary: "#b9ccb5",
  onSecondary: "#243424",
  secondaryContainer: "#3a4b39",
  onSecondaryContainer: "#d4e8d0",
  tertiary: "#a0ced5",
  onTertiary: "#00363c",
  tertiaryContainer: "#1f4d53",
  onTertiaryContainer: "#bdebf2",
  error: "#ffb4a9",
  onError: "#680003",
  errorContainer: "#930006",
  onErrorContainer: "#ffb4a9",
  background: "#1a1c19",
  onBackground: "#e2e3dd",
  surface: "#1a1c19",
  onSurface: "#e2e3dd",
  surfaceVariant: "#424840",
  onSurfaceVariant: "#c2c9be",
  outline: "#8b9388",
  shadow: "#000000",
  inverseSurface: "#e2e3dd",
  inverseOnSurface: "#2e312d",
  inversePrimary: "#1f6c2f",
};

export const tones: M3ThemeTones = {
  primary: {
    "0": "#000000",
    "10": "#002106",
    "20": "#00390e",
    "30": "#005319",
    "40": "#1f6c2f",
    "50": "#3b8645",
    "60": "#56a15d",
    "70": "#70bc75",
    "80": "#8ad98e",
    "90": "#a6f5a8",
    "95": "#c4ffc5",
    "99": "#f4ffef",
    "100": "#ffffff",
  },
  secondary: {
    "0": "#000000",
    "10": "#0f1f10",
    "20": "#243424",
    "30": "#3a4b39",
    "40": "#526350",
    "50": "#6a7c68",
    "60": "#849681",
    "70": "#9db09a",
    "80": "#b9ccb5",
    "90": "#d4e8d0",
    "95": "#e3f6de",
    "99": "#f4ffef",
    "100": "#ffffff",
  },
  tertiary: {
    "0": "#000000",
    "10": "#001f23",
    "20": "#00363c",
    "30": "#1f4d53",
    "40": "#39656c",
    "50": "#527e85",
    "60": "#6b989f",
    "70": "#86b3ba",
    "80": "#a0ced5",
    "90": "#bdebf2",
    "95": "#cbf9ff",
    "99": "#f2feff",
    "100": "#ffffff",
  },
  neutral: {
    "0": "#000000",
    "10": "#1a1c19",
    "20": "#2e312d",
    "30": "#454843",
    "40": "#5c5f5a",
    "50": "#767873",
    "60": "#8f918c",
    "70": "#aaaca6",
    "80": "#c5c7c1",
    "90": "#e2e3dd",
    "95": "#f0f1eb",
    "99": "#fcfdf7",
    "100": "#ffffff",
  },
  neutralVariant: {
    "0": "#000000",
    "10": "#171d16",
    "20": "#2b322a",
    "30": "#424840",
    "40": "#596057",
    "50": "#72796f",
    "60": "#8b9388",
    "70": "#a5ada2",
    "80": "#c2c9be",
    "90": "#dee5d9",
    "95": "#ecf3e7",
    "99": "#f7fef2",
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
