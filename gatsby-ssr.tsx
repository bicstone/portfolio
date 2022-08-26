import React from 'react';

import { getInitColorSchemeScript } from '@mui/material/styles';
import { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <React.Fragment key="init-color-scheme-script">
      {getInitColorSchemeScript({
        enableSystem: true,
      })}
    </React.Fragment>,
  ]);
};
