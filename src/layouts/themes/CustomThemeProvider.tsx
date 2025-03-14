import { ThemeProvider as EmotionThemeProvider, Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles/CssVarsProvider";

import { FONT_FAMILY } from "./constants";
import { useTheme } from "./useTheme";

import type { Theme as MuiTheme } from "@mui/material/styles";
import type { ReactNode } from "react";

// emotion types
declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({
  children,
}: CustomThemeProviderProps): React.JSX.Element => {
  const theme = useTheme();

  return (
    <EmotionThemeProvider theme={theme}>
      <CssVarsProvider
        defaultMode="light"
        modeStorageKey="mui-mode-disabled"
        theme={theme}
      >
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
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionThemeProvider>
  );
};
