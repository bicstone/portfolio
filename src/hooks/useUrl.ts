import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo, useCallback } from "react";

export const query = graphql`
  fragment UseUrl on Locale {
    ns
    data
    language
  }
`;

export const useUrl = (): {
  readonly currentLangUrl: string;
  readonly defaultLangUrl: string;
  readonly createUrlWithLang: (lng: string) => string;
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
  } as const;
};
