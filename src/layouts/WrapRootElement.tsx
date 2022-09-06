import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Script } from "gatsby";
import { HelmetProvider } from "react-helmet-async";
import { useThemes } from "src/hooks";

import BackgroundImage from "./background.svg";

import type { ReactNode } from "react";

import { isDefined } from "@/commons/typeguard";

interface WrapRootElementProps {
  children: ReactNode;
}

/**
 * WrapRootElement
 * This is useful to set up any Provider components that will wrap your application.
 */
export const WrapRootElement = ({
  children,
}: WrapRootElementProps): JSX.Element => {
  const { theme } = useThemes();

  return (
    <HelmetProvider>
      <EmotionThemeProvider theme={theme}>
        <CssVarsProvider
          defaultMode="system"
          enableColorScheme
          disableTransitionOnChange
          theme={theme}
        >
          <Global
            styles={{
              body: {
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: "repeat",
                backgroundSize: "400px 400px",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                overflowWrap: "break-word",
              },
            }}
          />
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </EmotionThemeProvider>
      {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GATSBY_ADSENSE_PUB_ID}`}
          async
          crossOrigin="anonymous"
          strategy="idle"
        />
      )}
    </HelmetProvider>
  );
};
