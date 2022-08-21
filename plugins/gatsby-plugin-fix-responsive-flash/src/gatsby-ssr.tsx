import React from 'react';

import { oneLineTrim } from 'common-tags';
import { GatsbySSR } from 'gatsby';

const generateHtml = (str: string): React.DOMAttributes<Element>['dangerouslySetInnerHTML'] => {
  return {
    __html: oneLineTrim(str),
  };
};

export const onRenderBody: GatsbySSR['onRenderBody'] = (
  { setHeadComponents, setBodyAttributes },
  pluginOptions,
) => {
  const breakpoint = pluginOptions.breakpoint as number | undefined;
  const className = pluginOptions.className as string;
  const timeout = pluginOptions.timeout as number;

  setHeadComponents([
    <style
      key="loading-screen-style"
      dangerouslySetInnerHTML={generateHtml(`
        body.${className}{opacity:1}
        @media(min-width:${breakpoint}px){body.${className}{opacity:0}}
      `)}
    />,

    <noscript
      key="loading-screen-noscript-style"
      dangerouslySetInnerHTML={generateHtml(`
      <style>
        body.${className}{opacity:1!important}
      </style>
      `)}
    />,
    <script
      key="loading-screen-fail-safe"
      dangerouslySetInnerHTML={generateHtml(`
        setTimeout(function(){
          document.body.classList.remove("${className}")
        },${timeout})
      `)}
    />,
  ]);

  setBodyAttributes({
    [`data-${className}`]: 'true',
  });
};
