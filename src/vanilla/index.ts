import { createTheme } from '@mui/material/styles';
import { captureException } from '@sentry/browser';
import { DARK } from 'src/constants/palette';
import { getTheme } from 'src/stores/themeStore';

import {
  isLoadingClassName,
  isDarkModeClassName,
  isLightModeClassName,
} from '../constants/classNames';

const inBrowser = () => typeof window !== 'undefined';

const isEnableLoading = () => {
  const theme = createTheme();
  const sm = theme.breakpoints.values.sm;

  const isUpXs = inBrowser() && window.document.documentElement.clientWidth >= sm;
  const isDarkMode = getTheme() === DARK;

  return isUpXs || isDarkMode;
};

/**
 * Scripts that do not depend on react, gatsby, etc.
 * You `yarn build:vanilla` will output to static/vanilla.
 */

const main = () => {
  try {
    const body = window.document.body;

    if (isEnableLoading()) {
      setTimeout(() => {
        // fail-safe
        try {
          body.classList.remove(isLoadingClassName);
          // body.classList.remove(isDarkModeClassName);
          // body.classList.remove(isLightModeClassName);
        } catch (error) {
          captureException(error);
        }
      }, 2000);
    } else {
      body.classList.remove(isLoadingClassName);
    }

    if (getTheme() === DARK) {
      body.classList.add(isDarkModeClassName);
    } else {
      body.classList.add(isLightModeClassName);
    }
  } catch (error) {
    captureException(error);
  }
};

main();
