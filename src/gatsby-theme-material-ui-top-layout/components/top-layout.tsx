import React from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { green, pink } from '@material-ui/core/colors';
import { themeReducer, themeInitialState, themeInitial } from '../../reducers';
import { ThemeContext } from '../../hooks';

const TopLayout: React.FC = props => {
  const [themeState, themeDispatch] = React.useReducer(
    themeReducer,
    themeInitialState,
    themeInitial,
  );
  const { darkMode } = themeState;
  const defaultTheme = createMuiTheme();
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: green[400],
      },
      secondary: {
        main: pink.A400,
      },
    },
    typography: {
      fontFamily:
        '"BIZ UDPGothic", "Meiryo UI", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif',
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
        },
      },
      MuiChip: {
        root: {
          margin: defaultTheme.spacing(0.5),
        },
      },
      MuiLinearProgress: {
        root: {
          height: defaultTheme.spacing(0.5),
        },
      },
      MuiAvatar: {
        colorDefault: {
          backgroundColor: green[400],
        },
      },
    },
    props: {
      MuiButton: {
        size: 'small',
      },
    },
  });

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
