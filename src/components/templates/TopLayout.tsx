import React from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { themeReducer, themeInitialState } from 'src/reducers';
import { ThemeContext } from 'src/contexts';
import BackgroundImage from './background.svg';

/**
 * material-ui 基本レイアウト
 */
export const TopLayout: React.FC = props => {
  const [themeState, themeDispatch] = React.useReducer(
    themeReducer,
    themeInitialState,
    // FIXME: #264 で対応するまで一時的に無効にする
    // themeInitial,
  );
  const { darkMode } = themeState;
  const defaultTheme = React.useMemo(() => createTheme(), []);
  const theme = React.useMemo(
    () =>
      createTheme({
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
      }),
    [darkMode],
  );

  return (
    <ThemeContext.Provider value={themeDispatch}>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: {
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              cursor: 'default',
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: '400px 400px',
              backgroundRepeat: 'repeat',
            },
          }}
        />
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
