import { NoSsr } from "@mui/material";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useEffect } from "react";
import { useUrl } from "src/hooks";

import { CookieAlert } from "@/layouts/CookieAlert";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";

export interface WrapPageElementProps {
  children: React.ReactNode;
}

/**
 * WrapPageElement
 * This is useful for setting wrapper components around pages that won't get unmounted on page changes.
 */
export const WrapPageElement = ({
  children,
}: WrapPageElementProps): JSX.Element => {
  const { currentLangUrl } = useUrl();
  const { language } = useI18next();

  useEffect(() => {
    document?.documentElement?.setAttribute("lang", language);
  }, [language]);

  return (
    <>
      <NoSsr defer>
        <CookieAlert />
      </NoSsr>
      <Header />
      <main role="main" css={(theme) => ({ marginTop: theme.spacing(8) })}>
        {children}
      </main>
      <Footer />
      <GatsbySeo
        openGraph={{
          url: currentLangUrl,
          locale: language,
        }}
      />
    </>
  );
};
