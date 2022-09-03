import { NoSsr } from "@mui/material";
import { CookieAlert, Head, Header, Footer, TopLayout } from "src/components";

import type { ReactNode } from "react";

export interface LayoutProps {
  cookieAlertShow?: boolean;
  isHome?: boolean;
  icon: string;
  iconAlt: string;
  className?: string;
  children: ReactNode;
}

/**
 * 基本レイアウト
 */
export const Layout = ({
  children,
  cookieAlertShow,
  isHome = false,
  icon,
  iconAlt,
  className,
}: LayoutProps): JSX.Element => {
  return (
    <TopLayout>
      <Head />
      <NoSsr>
        <CookieAlert show={cookieAlertShow} />
      </NoSsr>
      <Header isHome={isHome} icon={icon} iconAlt={iconAlt} />
      <main
        role="main"
        className={className}
        css={(theme) => ({ marginTop: theme.spacing(8) })}
      >
        {children}
      </main>
      <Footer />
    </TopLayout>
  );
};
