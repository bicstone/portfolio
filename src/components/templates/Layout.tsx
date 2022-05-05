import React from 'react';

import { NoSsr } from '@mui/material';

import { CookieAlert, Head, Header, Footer, TopLayout } from 'src/components';

export type LayoutProps = {
  cookieAlertShow?: boolean;
  isHome?: boolean;
  icon: string;
  iconAlt: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * 基本レイアウト
 */
export const Layout: React.FC<LayoutProps> = ({
  children,
  cookieAlertShow,
  isHome = false,
  icon,
  iconAlt,
  className,
}) => {
  return (
    <TopLayout>
      <Head />
      <NoSsr>
        <CookieAlert show={cookieAlertShow} />
      </NoSsr>
      <Header isHome={isHome} icon={icon} iconAlt={iconAlt} />
      <main role="main" className={className} css={theme => ({ marginTop: theme.spacing(8) })}>
        {children}
      </main>
      <Footer />
    </TopLayout>
  );
};
