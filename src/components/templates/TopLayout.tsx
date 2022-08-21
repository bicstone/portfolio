import React from 'react';

import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { useThemes } from 'src/hooks';

import BackgroundImage from './background.svg';

type TopLayoutProps = {
  children: React.ReactNode;
};

/**
 * TopLayout
 */
export const TopLayout: React.FC<TopLayoutProps> = ({ children }) => {
  const { theme } = useThemes();
  return (
    <EmotionThemeProvider theme={theme}>
      <CssVarsProvider defaultMode="system" enableColorScheme={true} theme={theme}>
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
        {children}
      </CssVarsProvider>
    </EmotionThemeProvider>
  );
};
