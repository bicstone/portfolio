import { captureException } from '@sentry/gatsby';

import {
  isDarkModeClassName,
  isLightModeClassName,
  isLoadingClassName,
} from './src/constants/classNames';

import type { GatsbyBrowser } from 'gatsby';

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  try {
    const body = window.document.body;

    body.classList.remove(isLoadingClassName);
    body.classList.remove(isDarkModeClassName);
    body.classList.remove(isLightModeClassName);
  } catch (error) {
    captureException(error);
  }
};
