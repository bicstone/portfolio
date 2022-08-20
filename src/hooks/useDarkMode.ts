import React from 'react';

import { useTheme } from '@mui/material/styles';
import { DARK } from 'src/constants/palette';

import { ThemeContext } from 'src/contexts';
import { TOGGLE_DARKMODE } from 'src/reducers';

/**
 * ダークテーマ切り替えの関数を返す
 */
export const useDarkMode: () => [boolean, () => void] = () => {
  const dispatch = React.useContext(ThemeContext);
  return [useTheme().palette.mode === DARK, () => dispatch({ type: TOGGLE_DARKMODE })];
};
