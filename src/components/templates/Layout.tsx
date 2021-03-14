import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { CookieAlert, Head, Header, Footer } from 'src/components';
import BackgroundImage from './background.svg';

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
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: '400px 400px',
    backgroundRepeat: 'repeat',
  },
}));

export const Layout: React.FC<LayoutProps> = ({
  children,
  cookieAlertShow,
  isHome = false,
  icon,
  iconAlt,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head {...props} />
      <CookieAlert show={cookieAlertShow} />
      <Header isHome={isHome} icon={icon} iconAlt={iconAlt} />
      <Box component="main" role="main" marginTop={8}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};
