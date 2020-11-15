import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { ThemeAction, TOGGLE_DARKMODE } from '../reducers';

export const ThemeContext = React.createContext<React.Dispatch<ThemeAction>>(() => false);

export const useDarkMode: () => [boolean, () => void] = () => {
  const dispatch = React.useContext(ThemeContext);
  return [useTheme().palette.type === 'dark', () => dispatch({ type: TOGGLE_DARKMODE })];
};
