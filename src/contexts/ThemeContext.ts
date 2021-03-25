import React from 'react';
import { ThemeAction } from 'src/reducers';

export const ThemeContext = React.createContext<React.Dispatch<ThemeAction>>(() => false);
