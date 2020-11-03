import React from 'react';
const inBrowser = () => typeof window !== 'undefined';

const LOCAL_STORAGE_NAME = 'paletteType';
const LOCAL_STORAGE_TRUE = 'dark';
const LOCAL_STORAGE_FALSE = 'light';
export const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';

export interface ThemeState {
  darkMode: boolean;
}
export type ThemeAction = { type: typeof TOGGLE_DARKMODE };

export const themeInitialState = {
  darkMode: false,
};

/**
 * テーマの状態
 */
export const themeReducer: React.Reducer<ThemeState, ThemeAction> = (state, action) => {
  inBrowser() &&
    window.localStorage.setItem(
      LOCAL_STORAGE_NAME,
      !state.darkMode ? LOCAL_STORAGE_TRUE : LOCAL_STORAGE_FALSE,
    );
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

/**
 * テーマの状態・遅延初期化
 * 設定順位
 * 1. ローカルストレージの設定があれば引き継ぐ
 * 2. OS設定でナイトモードならダークモード
 * 3. ライトモード
 */
export const themeInitial = (): ThemeState => {
  const localStorageDarkMode = inBrowser() && window.localStorage.getItem(LOCAL_STORAGE_NAME);
  const prefersDarkMode = inBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorageDarkMode === LOCAL_STORAGE_TRUE) {
    return { darkMode: true };
  } else if (localStorageDarkMode === LOCAL_STORAGE_FALSE) {
    return { darkMode: false };
  } else if (prefersDarkMode) {
    return { darkMode: true };
  } else {
    return { darkMode: false };
  }
};
