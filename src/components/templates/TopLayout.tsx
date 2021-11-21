import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { themeReducer, themeInitialState, themeInitial } from 'src/reducers';
import { ThemeContext } from 'src/contexts';

/**
 * material-ui 基本レイアウト
 */
export const TopLayout: React.FC = props => {
  const [themeState, themeDispatch] = React.useReducer(
    themeReducer,
    themeInitialState,
    themeInitial,
  );
  const { darkMode } = themeState;
  const defaultTheme = createTheme();
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
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
    components: {
      MuiButton: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            userSelect: 'auto',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            marginRight: defaultTheme.spacing(0.5),
            marginTop: defaultTheme.spacing(0.5),
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: defaultTheme.spacing(0.5),
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          colorDefault: {
            backgroundColor: darkMode ? green[200] : green[300],
          },
        },
      },
      MuiLink: {
        defaultProps: {
          color: 'inherit',
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={themeDispatch}>{props.children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default TopLayout;
