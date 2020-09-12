import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { ThemeAction, TOGGLE_DARKMODE } from '../reducer/themeReducer';

export const ThemeContext = React.createContext<React.Dispatch<ThemeAction>>(() => false);

const useToggleDarkMode: () => [boolean, () => void] = () => {
  const dispatch = React.useContext(ThemeContext);
  return [useTheme().palette.type === 'dark', () => dispatch({ type: TOGGLE_DARKMODE })];
};

export default useToggleDarkMode;
