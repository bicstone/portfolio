import { NoSsr } from "@mui/material";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { ReactNode } from "react";

import { useUrl } from "@/hooks/useUrl";
import { CookieAlert } from "@/layouts/CookieAlert";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";

export interface WrapPageElementProps {
  isHome?: boolean;
  icon: string;
  iconAlt: string;
  children: ReactNode;
}

/**
 * WrapPageElement
 * This is useful for setting wrapper components around pages that won't get unmounted on page changes.
 */
export const WrapPageElement = ({
  isHome,
  icon,
  iconAlt,
  children,
}: WrapPageElementProps): JSX.Element => {
  const { currentLangUrl } = useUrl();
  const { language } = useI18next();

  return (
    <>
      <NoSsr defer>
        <CookieAlert />
      </NoSsr>
      <Header icon={icon} iconAlt={iconAlt} isHome={isHome ?? false} />
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
