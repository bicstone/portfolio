import { createTheme } from '@mui/material/styles';

import { isLoadingClassName } from '../constants/classNames';

const inBrowser = () => typeof window !== 'undefined';

const isEnableLoading = () => {
  const theme = createTheme();
  const sm = theme.breakpoints.values.sm;
  return inBrowser() && window.document.documentElement.clientWidth >= sm;
};

/**
 * Scripts that do not depend on react, gatsby, etc.
 * You `yarn build:vanilla` will output to `/static/vanilla`.
 */

(() => {
  const removeLoadingScreen = () => window.document.body.classList.remove(isLoadingClassName);

  if (!isEnableLoading()) {
    // When the width is xs, the loading screen is not displayed because FOUC does not occur.
    removeLoadingScreen();
  }
  setTimeout(() => {
    // As the fallback, hide the loading screen after a few seconds.
    removeLoadingScreen();
  }, 2000);
})();
