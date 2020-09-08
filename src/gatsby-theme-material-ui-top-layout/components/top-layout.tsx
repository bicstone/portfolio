import React from 'react';

import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { jaJP } from '@material-ui/core/locale';

import CookieAlert from '../../components/CookieAlert';
import Footer from '../../components/Footer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const TopLayout: React.FC = props => {
  // const defaultTheme = createMuiTheme();
  const classes = useStyles();
  const theme = createMuiTheme(
    {
      palette: {
        // type: darkMode ? 'dark' : 'light',
        // primary: {
        //   main: '',
        // },
        // secondary: {
        //   main: '',
        // },
      },
    },
    jaJP,
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          {props.children}
          <CookieAlert />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default TopLayout;
