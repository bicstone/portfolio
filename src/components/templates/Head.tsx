import React from 'react';

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { Helmet, useI18next } from 'gatsby-plugin-react-i18next';

import { useSiteMetadata } from 'src/hooks';

/**
 * Headタグ部
 */
export const Head: React.FC = () => {
  const siteMetadata = useSiteMetadata();
  const { language, path } = useI18next();

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

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
          url: `${siteMetadata.siteUrl}${path}`,
          locale: language,
        }}
      />
    </>
  );
};
