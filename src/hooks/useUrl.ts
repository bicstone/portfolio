import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo, useCallback } from "react";

/**
 * return current URL
 */
export const useUrl = (): {
  currentLangUrl: string;
  defaultLangUrl: string;
  createUrlWithLang: (lng: string) => string;
} => {
  const {
    language,
    originalPath,
    defaultLanguage,
    siteUrl = "",
  } = useI18next();

  const createUrlWithLang = useCallback(
    (lng: string): string => {
      return `${siteUrl}${
        lng === defaultLanguage ? "" : `/${lng}`
      }${originalPath}`;
    },
    [defaultLanguage, originalPath, siteUrl]
  );

  const currentLangUrl = useMemo(
    () => createUrlWithLang(language),
    [createUrlWithLang, language]
  );
  const defaultLangUrl = useMemo(
    () => createUrlWithLang(defaultLanguage),
    [createUrlWithLang, defaultLanguage]
  );

  return {
    currentLangUrl,
    defaultLangUrl,
    createUrlWithLang,
  };
};