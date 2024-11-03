/**
 * Convert a katakana to a hiragana
 */

export const convertKatakanaToHiragana = (src: string): string =>
  src.replace(/[\u30a1-\u30f6]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });

/**
 * Convert a hiragana to a katakana
 */

export const convertHiraganaToKatakana = (src: string): string =>
  src.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
