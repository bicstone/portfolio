import React from 'react';

import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { jaJP } from '@material-ui/core/locale';

import { themeReducer, themeInitialState, themeInitial } from '../../reducer/themeReducer';
import { ThemeContext } from '../../hooks/use-darkmode';

export const TopLayout: React.FC = props => {
  const [themeState, themeDispatch] = React.useReducer(
    themeReducer,
    themeInitialState,
    themeInitial,
  );
  const { darkMode } = themeState;
  // const defaultTheme = createMuiTheme();
  const theme = createMuiTheme(
    {
      palette: {
        type: darkMode ? 'dark' : 'light',
        // primary: {
        //   main: '',
        // },
        // secondary: {
        //   main: '',
        // },
      },
      typography: {
        fontFamily:
          '"BIZ UDPGothic", "Meiryo UI", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif',
      },
    },
    jaJP,
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContext.Provider value={themeDispatch}>{props.children}</ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default TopLayout;
