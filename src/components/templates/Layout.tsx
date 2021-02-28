import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { CookieAlert, Head, Header, Footer } from '../';

export type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  cookieAlertShow?: boolean;
  isHome?: boolean;
  icon: string;
  iconAlt: string;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    cursor: 'default',
  },
}));

export const Layout: React.FC<LayoutProps> = ({
  children,
  cookieAlertShow,
  isHome,
  icon,
  iconAlt,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head {...props} />
      <Header isHome={isHome} icon={icon} iconAlt={iconAlt} />
      <aside>
        <CookieAlert show={cookieAlertShow} />
      </aside>
      <Box component="main" role="main" marginTop={8}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};
