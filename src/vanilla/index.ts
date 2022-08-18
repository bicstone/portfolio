import { createTheme } from '@mui/material/styles';

import { isLoadingClassName, isDarkModeClassName } from '../constants/classNames';
import { getTheme } from '../stores/themeStore';

const isEnableLoading = () => {
  const theme = createTheme();
  const sm = theme.breakpoints.values.sm;
  const isBrowser = typeof window !== 'undefined';
  const isUpXs = isBrowser && window.document.documentElement.clientWidth >= sm;
  const isDarkMode = getTheme() === 'dark';

  return isBrowser && (isUpXs || isDarkMode);
};

/**
 * react, gatsby がロードされる前に実行する (vanilla)
 * vite でビルド
 */

const main = () => {
  if (isEnableLoading()) {
    // see gatsby-browser.ts
    setTimeout(() => {
      // フェールセーフ
      window.document.body.classList.remove(isLoadingClassName);
    }, 2000);
  } else {
    window.document.body.classList.remove(isLoadingClassName);
  }

  if (getTheme() === 'dark') {
    // see gatsby-ssr.ts
    window.document.body.classList.add(isDarkModeClassName);
  }
};

main();
