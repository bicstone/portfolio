import React from 'react';

import { TopLayout } from './src/components/templates/TopLayout';

import type { GatsbyBrowser } from 'gatsby';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <TopLayout>{element}</TopLayout>
);
