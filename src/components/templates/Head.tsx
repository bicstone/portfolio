import React from 'react';

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet-async';

import { useSiteMetadata } from 'src/hooks';

/**
 * Headタグ部
 */
export const Head: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  const { languages, language, originalPath, defaultLanguage, siteUrl = '' } = useI18next();
  const createUrlWithLang = (lng: string) => {
    return `${siteUrl}${lng === defaultLanguage ? '' : `/${lng}`}${originalPath}`;
  };

  return (
    <>
      <Helmet>
        <html lang={language} />

        <link rel="canonical" href={createUrlWithLang(language)} />
        {languages.map(lng => (
          <link rel="alternate" key={lng} href={createUrlWithLang(lng)} hrefLang={lng} />
        ))}
        <link rel="alternate" href={createUrlWithLang(defaultLanguage)} hrefLang="x-default" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        {/* contentful */}
        <link rel="dns-prefetch" href="https://images.ctfassets.net" />
        <link rel="dns-prefetch" href="https://videos.ctfassets.net" />

        {/* sentry */}
        <link rel="dns-prefetch" href="https://browser.sentry-cdn.com" />
        <link rel="dns-prefetch" href="https://o1173829.ingest.sentry.io" />

        {/* analytics */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://ssl.google-analytics.com" />

        {/* adsense */}
        <link rel="dns-prefetch" href="https://adservice.google.co.jp" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://partner.googleadservices.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${siteMetadata.siteUrl}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${siteMetadata.siteUrl}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${siteMetadata.siteUrl}/favicon-16x16.png`}
        />
        <link
          rel="mask-icon"
          href={`${siteMetadata.siteUrl}/safari-pinned-tab.svg`}
          color="#2d1e1e"
        />
        <meta name="apple-mobile-web-app-title" content={siteMetadata.shortTitle} />
        <meta name="application-name" content={siteMetadata.shortTitle} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={siteMetadata.description} />

        <meta name="format-detection" content="telephone=no" />

        {
          /* CSP 検証用 Cloudfrontの設定と合わせる */
          process.env.NODE_ENV === 'development' && (
            <meta
              httpEquiv="Content-Security-Policy"
              content={process.env.GATSBY_CONTENT_SECURITY_POLICY}
            />
          )
        }
        {
          /* Permissions-Policy 検証用 Cloudfrontの設定と合わせる */
          process.env.NODE_ENV === 'development' && (
            <meta httpEquiv="Permissions-Policy" content={process.env.GATSBY_PERMISSIONS_POLICY} />
          )
        }
      </Helmet>
      <GatsbySeo
        // 定数は gatsby-config.js で設定
        // ここでは全画面共通の変数を設定
        openGraph={{
          url: createUrlWithLang(language),
          locale: language,
        }}
      />
    </>
  );
};
