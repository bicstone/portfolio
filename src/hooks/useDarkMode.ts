import React from 'react';

import { useTheme } from '@mui/material/styles';

import { ThemeContext } from 'src/contexts';
import { TOGGLE_DARKMODE } from 'src/reducers';

/**
 * ダークテーマ切り替えの関数を返す
 */
export const useDarkMode: () => [boolean, () => void] = () => {
  const dispatch = React.useContext(ThemeContext);
  return [useTheme().palette.mode === 'dark', () => dispatch({ type: TOGGLE_DARKMODE })];
};
