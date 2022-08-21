import React from 'react';

import { TopLayout } from './src/components/templates/TopLayout';
import { isLoadingClassName } from './src/constants/classNames';

import type { GatsbyBrowser } from 'gatsby';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <TopLayout>{element}</TopLayout>
);

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  window.document.body.classList.remove(isLoadingClassName);
};
