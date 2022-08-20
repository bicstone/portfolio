import React from 'react';

import { createTheme } from '@mui/material/styles';
import { oneLineTrim } from 'common-tags';

import { TopLayout } from './src/components/templates/TopLayout';
import {
  isLoadingClassName,
  isDarkModeClassName,
  isLightModeClassName,
} from './src/constants/classNames';
import { DARK, LIGHT } from './src/constants/palette';

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
}) => {
  const lightTheme = createTheme({ palette: { mode: LIGHT } });
  const darkTheme = createTheme({ palette: { mode: DARK } });

  setBodyAttributes({
    className: isLoadingClassName,
  });

  setHeadComponents([
    <style
      key="loading-style"
      dangerouslySetInnerHTML={generateHtml(`
        body.${isLoadingClassName}{opacity:0}
        body.${isLightModeClassName}{background-color:${lightTheme.palette.background.default}}
        body.${isDarkModeClassName}{background-color:${darkTheme.palette.background.default}}
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
          document.body.classList.remove("${isLoadingClassName}");
          /* document.body.classList.remove("${isLightModeClassName}");
          document.body.classList.remove("${isDarkModeClassName}"); */
        },2000)
      `)}
    />,
  ]);

  setPostBodyComponents([<script key="loading-script" src="/vanilla/index.js" />]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <TopLayout>{element}</TopLayout>
);
