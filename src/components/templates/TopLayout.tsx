import React from 'react';

import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { captureException } from '@sentry/gatsby';
import { isLoadingClassName } from 'src/constants/classNames';
import { LIGHT } from 'src/constants/palette';

import { ThemeContext } from 'src/contexts';
import { themeReducer, themeInitialState, INITIALIZE } from 'src/reducers';

import BackgroundImage from './background.svg';

type TopLayoutProps = {
  children: React.ReactNode;
};

/**
 * TopLayout
 */
export const TopLayout: React.FC<TopLayoutProps> = props => {
  const [themeState, themeDispatch] = React.useReducer(themeReducer, themeInitialState);
  const { palette } = themeState;
  const defaultTheme = React.useMemo(() => createTheme(), []);
  const theme = React.useMemo(() => {
    const isLight = palette === LIGHT;
    console.log(palette);
    return createTheme({
      palette: {
        mode: palette,
        primary: {
          // ダークテーマでは彩度を200以下にする
          // @SEE: https://material.io/design/color/dark-theme.html
          main: isLight ? green[300] : green[200],
        },
        secondary: {
          main: isLight ? pink.A700 : pink[200],
        },
        text: {
          secondary: isLight ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.7)',
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
              backgroundColor: isLight ? green[300] : green[200],
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
  }, [palette]);

  React.useEffect(() => {
    themeDispatch({
      type: INITIALIZE,
    });

    try {
      const body = window.document.body;

      body.classList.remove(isLoadingClassName);
      // body.classList.remove(isDarkModeClassName);
      // body.classList.remove(isLightModeClassName);
    } catch (error) {
      captureException(error);
    }
  }, []);

  return (
    <EmotionThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
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
              opacity: 1,
            },
          }}
        />
        <CssBaseline />
        <ThemeContext.Provider value={themeDispatch}>{props.children}</ThemeContext.Provider>
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
};
