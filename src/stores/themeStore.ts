const inBrowser = () => typeof window !== 'undefined';

const localStorageName = 'paletteType';

export const DARK = 'dark';
export const LIGHT = 'light';
export type Palette = 'dark' | 'light';

/**
 * テーマの取得
 *
 * 設定順位
 * 1. window が未定義ならばライトモード
 * 2. ローカルストレージの設定があれば引き継ぐ
 * 3. OS設定でナイトモードならダークモード
 * 4. ライトモード
 */
export const getTheme = (): Palette => {
  const localStorage = inBrowser() && window.localStorage.getItem(localStorageName);
  const prefersDarkMode = inBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (!inBrowser) {
    return LIGHT;
  }
  if (localStorage === DARK) {
    return DARK;
  }
  if (localStorage === LIGHT) {
    return LIGHT;
  }
  if (prefersDarkMode) {
    return DARK;
  }
  return LIGHT;
};

/**
 * テーマの保存
 */
export const setTheme = (palette: Palette) => {
  inBrowser() && window.localStorage.setItem(localStorageName, palette);
};
