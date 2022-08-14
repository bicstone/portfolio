const inBrowser = () => typeof window !== 'undefined';

const localStorageName = 'paletteType';
const dark = 'dark';
const light = 'light';

module.exports = {
  dark,
  light,

  /**
   * テーマの取得
   *
   * 設定順位
   * 1. ローカルストレージの設定があれば引き継ぐ
   * 2. OS設定でナイトモードならダークモード
   * 3. ライトモード
   * @type {() => ('dark' | 'light')}
   */
  getTheme: () => {
    const localStorage = inBrowser() && window.localStorage.getItem(localStorageName);
    const prefersDarkMode =
      inBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorage === dark) {
      return dark;
    } else if (localStorage === light) {
      return light;
    } else if (prefersDarkMode) {
      return dark;
    }
    return light;
  },

  /**
   * テーマの保存
   *
   * @type {(palette: 'dark' | 'light') => void}
   */
  setTheme: palette => {
    inBrowser() && window.localStorage.setItem(localStorageName, palette);
  },
};
