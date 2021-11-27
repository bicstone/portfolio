import React from 'react';

import { NoSsr } from '@mui/material';
import { CookieAlert, Head, Header, Footer, TopLayout } from 'src/components';

export type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  cookieAlertShow?: boolean;
  isHome?: boolean;
  icon: string;
  iconAlt: string;
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
  ...props
}) => {
  return (
    <TopLayout>
      <Head {...props} />
      <NoSsr>
        <CookieAlert show={cookieAlertShow} />
      </NoSsr>
      <Header isHome={isHome} icon={icon} iconAlt={iconAlt} />
      <main role="main" css={theme => ({ marginTop: theme.spacing(8) })}>
        {children}
      </main>
      <Footer />
    </TopLayout>
  );
};
