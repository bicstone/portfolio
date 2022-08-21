import React from 'react';

import { getInitColorSchemeScript } from '@mui/material/styles';
import { GatsbySSR } from 'gatsby';

import { TopLayout } from './src/components/templates/TopLayout';
import { isLoadingClassName } from './src/constants/classNames';

const generateHtml = (str: string): React.DOMAttributes<Element>['dangerouslySetInnerHTML'] => {
  return {
    __html: str.trim(),
  };
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setBodyAttributes,
  setPreBodyComponents,
}) => {
  setHeadComponents([
    <style
      key="loading-screen-style"
      dangerouslySetInnerHTML={generateHtml(`
        body.${isLoadingClassName}{opacity:0}
      `)}
    />,

    <noscript
      key="loading-screen-noscript-style"
      dangerouslySetInnerHTML={generateHtml(`
      <style>
        body.${isLoadingClassName}{opacity:1!important}
      </style>
      `)}
    />,
    <script
      key="loading-screen-fail-safe"
      dangerouslySetInnerHTML={generateHtml(`
        setTimeout(function(){
          document.body.classList.remove("${isLoadingClassName}")
        },2000)
      `)}
    />,
  ]);

  setBodyAttributes({
    // loading-screen
    className: isLoadingClassName,
  });

  setPreBodyComponents([
    <script key="vanilla-script" src="/vanilla/index.js" />,
    <React.Fragment key="init-color-scheme-script">
      {getInitColorSchemeScript({
        enableSystem: true,
      })}
    </React.Fragment>,
  ]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <TopLayout>{element}</TopLayout>
);
