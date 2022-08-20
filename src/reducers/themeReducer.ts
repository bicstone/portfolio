import React from 'react';

import { setTheme, getTheme } from 'src/stores/themeStore';

export const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
export type ThemeAction = { type: typeof TOGGLE_DARKMODE };

export const DARK = 'dark';
export const LIGHT = 'light';
export type Palette = typeof DARK | typeof LIGHT;

export type ThemeState = {
  palette: Palette;
};

export const themeInitialState: ThemeState = {
  palette: LIGHT,
};

/**
 * テーマの状態
 */
export const themeReducer: React.Reducer<ThemeState, ThemeAction> = (state, action) => {
  setTheme(state.palette);
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        palette: state.palette === LIGHT ? DARK : LIGHT,
      };
    default:
      return state;
  }
};

/**
 * テーマの状態・遅延初期化
 */
export const themeInitial = (): ThemeState => {
  const palette = getTheme();
  return {
    palette,
  };
};
