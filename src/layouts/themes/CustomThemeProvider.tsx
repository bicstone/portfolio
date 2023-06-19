import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles/CssVarsProvider";

import { useTheme } from "./useTheme";

import type { ReactNode } from "react";

import { FONT_FAMILY } from "@/components/markdown/constants";

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({
  children,
}: CustomThemeProviderProps): JSX.Element => {
  const theme = useTheme();

  return (
    <CssVarsProvider defaultMode="system" theme={theme}>
      <GlobalStyles
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
  );
};
