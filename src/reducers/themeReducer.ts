import React from 'react';

import { DARK, LIGHT } from 'src/constants/palette';
import { setTheme, getTheme } from 'src/stores/themeStore';

import type { Palette } from 'src/constants/palette';

export const TOGGLE_DARKMODE = Symbol('TOGGLE_DARKMODE');
export const INITIALIZE = Symbol('INITIALIZE');

export type ThemeAction = { type: typeof TOGGLE_DARKMODE } | { type: typeof INITIALIZE };

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
  switch (action.type) {
    case TOGGLE_DARKMODE: {
      const toggledPalette = state.palette === LIGHT ? DARK : LIGHT;
      setTheme(toggledPalette);
      return {
        palette: toggledPalette,
      };
    }
    case INITIALIZE: {
      const initPalette = themeInitial();
      setTheme(initPalette);
      return {
        palette: initPalette,
      };
    }
    default:
      return state;
  }
};

/**
 * テーマの状態・遅延初期化
 */
export const themeInitial = (): Palette => {
  const palette = getTheme();
  return palette as Palette;
};
