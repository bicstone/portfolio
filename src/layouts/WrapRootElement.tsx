import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Script } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useEffect } from "react";
import { useThemes } from "src/hooks";

import BackgroundImage from "./background.svg";

import { isDefined } from "@/commons/typeguard";

interface WrapRootElementProps {
  children: React.ReactNode;
}

/**
 * WrapRootElement
 * This is useful to set up any Provider components that will wrap your application.
 */
export const WrapRootElement = ({
  children,
}: WrapRootElementProps): JSX.Element => {
  const { theme } = useThemes();

  const {
    language,
    originalPath,
    defaultLanguage,
    siteUrl = "",
  } = useI18next();

  const createUrlWithLang = (lng: string): string => {
    return `${siteUrl}${
      lng === defaultLanguage ? "" : `/${lng}`
    }${originalPath}`;
  };

  useEffect(() => {
    document?.documentElement?.setAttribute("lang", language);
  }, [language]);

  return (
    <>
      <GatsbySeo
        // 定数は gatsby-config.js で設定
        // ここでは全画面共通の変数を設定
        openGraph={{
          url: createUrlWithLang(language),
          locale: language,
        }}
      />
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
                minHeight: "100vh",
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
    </>
  );
};
