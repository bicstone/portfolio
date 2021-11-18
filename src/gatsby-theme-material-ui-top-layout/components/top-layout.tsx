import React from 'react';
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  CssBaseline,
  createTheme,
  adaptV4Theme,
} from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { themeReducer, themeInitialState, themeInitial } from 'src/reducers';
import { ThemeContext } from 'src/contexts';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

/**
 * material-ui 基本レイアウト
 */
const TopLayout: React.FC = props => {
  const [themeState, themeDispatch] = React.useReducer(
    themeReducer,
    themeInitialState,
    themeInitial,
  );
  const { darkMode } = themeState;
  const defaultTheme = createTheme();
  const theme = createTheme(
    adaptV4Theme({
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
        },
      },
    }),
  );

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeContext.Provider value={themeDispatch}>{props.children}</ThemeContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default TopLayout;
