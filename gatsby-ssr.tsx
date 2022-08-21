import React from 'react';

import { getInitColorSchemeScript } from '@mui/material/styles';
import { oneLineTrim } from 'common-tags';

import { TopLayout } from './src/components/templates/TopLayout';
import { isLoadingClassName } from './src/constants/classNames';

import type { GatsbySSR } from 'gatsby';

const generateHtml = (str: string): React.DOMAttributes<Element>['dangerouslySetInnerHTML'] => {
  return {
    __html: oneLineTrim(str),
  };
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
  setPreBodyComponents,
}) => {
  setBodyAttributes({
    className: isLoadingClassName,
  });

  setHeadComponents([
    <style
      key="loading-style"
      dangerouslySetInnerHTML={generateHtml(`
        body.${isLoadingClassName}{opacity:0}
      `)}
    />,

    <noscript
      key="loading-noscript-style"
      dangerouslySetInnerHTML={generateHtml(`
      <style>
        body.${isLoadingClassName}{opacity:1!important}
      </style>
      `)}
    />,
    <script
      key="loading-fail-safe"
      dangerouslySetInnerHTML={generateHtml(`
        setTimeout(function(){
          document.body.classList.remove("${isLoadingClassName}")
        },2000)
      `)}
    />,
  ]);

  setPostBodyComponents([<script key="loading-script" src="/vanilla/index.js" />]);

  setPreBodyComponents([
    <React.Fragment key="init-color-scheme-script">{getInitColorSchemeScript()}</React.Fragment>,
  ]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <TopLayout>{element}</TopLayout>
);
