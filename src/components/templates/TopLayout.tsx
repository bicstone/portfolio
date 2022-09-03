import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Script } from "gatsby";
import React from "react";
import { useThemes } from "src/hooks";

import BackgroundImage from "./background.svg";

import { isDefined } from "@/commons/typeguard";

interface TopLayoutProps {
  children: React.ReactNode;
}

/**
 * TopLayout
 */
export const TopLayout: React.FC<TopLayoutProps> = ({ children }) => {
  const { theme } = useThemes();
  return (
    <EmotionThemeProvider theme={theme}>
      <CssVarsProvider
        defaultMode="system"
        enableColorScheme
        disableTransitionOnChange
        theme={theme}
      >
        {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GATSBY_ADSENSE_PUB_ID}`}
            async
            crossOrigin="anonymous"
            strategy="idle"
          />
        )}
        <Global
          styles={{
            body: {
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              cursor: "default",
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: "400px 400px",
              backgroundRepeat: "repeat",
              opacity: 1,
            },
          }}
        />
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionThemeProvider>
  );
};
