import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CookieAlert, Head, Header, Footer } from '../';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
  },
}));

export const Layout: React.FC<Props> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Head {...props} />
      <div className={classes.root}>
        <Header />
        <main className={classes.main} role="main">
          {children}
        </main>
        <CookieAlert />
        <Footer />
      </div>
    </>
  );
};
