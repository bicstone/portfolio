import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { TOGGLE_DARKMODE } from 'src/reducers';
import { ThemeContext } from 'src/contexts';

export const useDarkMode: () => [boolean, () => void] = () => {
  const dispatch = React.useContext(ThemeContext);
  return [useTheme().palette.type === 'dark', () => dispatch({ type: TOGGLE_DARKMODE })];
};
