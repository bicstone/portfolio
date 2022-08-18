const inBrowser = () => typeof window !== 'undefined';

const localStorageName = 'paletteType';

export const dark = 'dark';
export const light = 'light';
export type Palette = 'dark' | 'light';

/**
 * テーマの取得
 *
 * 設定順位
 * 1. ローカルストレージの設定があれば引き継ぐ
 * 2. OS設定でナイトモードならダークモード
 * 3. ライトモード
 */
export const getTheme = (): Palette => {
  const localStorage = inBrowser() && window.localStorage.getItem(localStorageName);
  const prefersDarkMode = inBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (localStorage === dark) {
    return dark;
  }
  if (localStorage === light) {
    return light;
  }
  if (prefersDarkMode) {
    return dark;
  }
  return light;
};

/**
 * テーマの保存
 */
export const setTheme = (palette: Palette) => {
  inBrowser() && window.localStorage.setItem(localStorageName, palette);
};
