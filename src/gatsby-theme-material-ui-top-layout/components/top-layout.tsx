import React from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { green, pink } from '@material-ui/core/colors';
import { themeReducer, themeInitialState, themeInitial } from 'src/reducers';
import { ThemeContext } from 'src/contexts';

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
        // ダークテーマでは彩度を200以下にする
        // @SEE: https://material.io/design/color/dark-theme.html
        main: darkMode ? green[200] : green[300],
      },
      secondary: {
        main: darkMode ? pink[200] : pink.A700,
      },
      text: {
        secondary: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.65)',
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
      MuiButtonBase: {
        root: {
          userSelect: 'auto',
        },
      },
      MuiChip: {
        root: {
          marginRight: defaultTheme.spacing(0.5),
          marginTop: defaultTheme.spacing(0.5),
        },
      },
      MuiLinearProgress: {
        root: {
          height: defaultTheme.spacing(0.5),
        },
      },
      MuiAvatar: {
        colorDefault: {
          backgroundColor: darkMode ? green[200] : green[300],
        },
      },
    },
    props: {
      MuiButton: {
        size: 'small',
      },
      MuiLink: {
        color: 'inherit',
        underline: 'always',
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
