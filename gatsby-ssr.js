import * as React from 'react';
import TopLayout from './src/components/templates/TopLayout';

export const wrapRootElement = ({ element }) => {
  return React.createElement(TopLayout, null, element);
};
