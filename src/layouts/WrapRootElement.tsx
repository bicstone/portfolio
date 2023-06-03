import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles/CssVarsProvider";

import type Sentry from "@sentry/browser";
import type { ReactNode } from "react";

import { FONT_FAMILY } from "@/components/markdown/constants";
import { useTheme } from "@/hooks/useTheme";

interface WrapRootElementProps {
  children: ReactNode;
}

declare global {
  interface Window {
    Sentry?: typeof Sentry;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle?: any;
  }
}

/**
 * WrapRootElement
 * This is useful to set up any Provider components that will wrap your application.
 */
export const WrapRootElement = ({
  children,
}: WrapRootElementProps): JSX.Element => {
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
