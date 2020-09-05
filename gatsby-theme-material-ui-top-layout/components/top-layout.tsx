import React from 'react';

import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { jaJP } from '@material-ui/core/locale';

export const TopLayout: React.FC = props => {
  // const defaultTheme = createMuiTheme();
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
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default TopLayout;
