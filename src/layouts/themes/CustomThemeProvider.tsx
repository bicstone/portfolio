import { ThemeProvider as EmotionThemeProvider, Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles/CssVarsProvider";

import { useTheme, type CustomTheme } from "./useTheme";

import type { ReactNode } from "react";

import type {} from "@mui/material/themeCssVarsAugmentation";

import { FONT_FAMILY } from "@/components/markdown/constants";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({
  children,
}: CustomThemeProviderProps): JSX.Element => {
  const theme = useTheme();

  return (
    <EmotionThemeProvider theme={theme}>
      <CssVarsProvider defaultMode="system" theme={theme}>
        <Global
          styles={{
            html: {
              height: "100%",
            },
            body: {
              height: "100%",
              cursor: "default",
              fontFamily: FONT_FAMILY,
              overflowWrap: "break-word",
            },
            "#___gatsby": {
              height: "100%",
            },
            "#gatsby-focus-wrapper": {
              display: "flex",
              flexDirection: "column",
              height: "100%",
            },
          }}
        />
        <CssBaseline enableColorScheme />
        {children}
      </CssVarsProvider>
    </EmotionThemeProvider>
  );
};
