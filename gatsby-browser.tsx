import type { GatsbyBrowser } from 'gatsby';

import { WrapPageElement } from '@/layouts/WrapPageElement';
import { WrapRootElement } from '@/layouts/WrapRootElement';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <WrapPageElement>{element}</WrapPageElement>;
};
