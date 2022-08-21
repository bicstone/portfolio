import React from 'react';

import { getInitColorSchemeScript } from '@mui/material/styles';
import { GatsbySSR } from 'gatsby';

import { TopLayout } from './src/components/templates/TopLayout';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
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
