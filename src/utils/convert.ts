/**
 * Convert a katakana to a hiragana
 */

import { isDefined } from "./typeguard";

export const convertKatakanaToHiragana = (src: string): string => {
  return src.replace(/[\u30a1-\u30f6]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
};

/**
 * Convert a hiragana to a katakana
 */

export const convertHiraganaToKatakana = (src: string): string => {
  return src.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

/**
 * Contetnful の // 始まり URL を https:// に変換する
 * Twitter で読み込みに失敗するため。
 * TODO: Contentful の使用をやめるタイミングで削除
 */

export const convertImageUrl = (src: string): string => {
  const url = /^\/\/(.+)$/.exec(src)?.[1];
  if (!isDefined(url)) return src;

  return `https://${url}`;
};
