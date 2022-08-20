import { captureException } from '@sentry/gatsby';

import { isLoadingClassName } from './src/constants/classNames';

import type { GatsbyBrowser } from 'gatsby';

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  try {
    window.document.body.classList.remove(isLoadingClassName);
  } catch (error) {
    captureException(error);
  }
};
