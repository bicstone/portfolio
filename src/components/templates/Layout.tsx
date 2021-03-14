import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { CookieAlert, Head, Header, Footer } from 'src/components';

export type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  cookieAlertShow?: boolean;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    cursor: 'default',
    backgroundImage: `url(${require('./background.svg')})`,
    backgroundSize: '400px 400px',
    backgroundRepeat: 'repeat',
  },
}));

export const Layout: React.FC<LayoutProps> = ({ children, cookieAlertShow, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head {...props} />
      <aside>
        <CookieAlert show={cookieAlertShow} />
      </aside>
      <Header />
      <Box component="main" role="main" marginTop={8}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};
