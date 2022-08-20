import React from 'react';

import { ThemeAction } from 'src/reducers';

/**
 * ダークテーマ設定用コンテキスト
 */
export const ThemeContext = React.createContext<React.Dispatch<ThemeAction>>(() => false);
