import * as React from 'react';

import { isLoadingClassName, isDarkModeClassName } from './src/constants/classNames';

import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setBodyAttributes({
    className: isLoadingClassName,
  });

  setHeadComponents([
    React.createElement('style', {
      key: 'loading-style',
      dangerouslySetInnerHTML: {
        __html: `body.${isLoadingClassName} { opacity: 0 } body.${isDarkModeClassName} {background-color: #000}`,
      },
    }),
    React.createElement('noscript', {
      key: 'loading-noscript-style',
      dangerouslySetInnerHTML: {
        __html: `<style>body.${isLoadingClassName} { opacity: 1 !important }</style>`,
      },
    }),
    React.createElement('script', {
      key: 'loading-timeout',
      dangerouslySetInnerHTML: {
        __html: `setTimeout(function() { document.body.classList.remove("${isLoadingClassName}") }, 2000);`,
      },
    }),
  ]);

  setPostBodyComponents([
    React.createElement('script', {
      key: 'loading-script',
      src: '/vanilla/index.js',
    }),
  ]);
};
