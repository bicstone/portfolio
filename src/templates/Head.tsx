import { useSiteMetadata } from "src/hooks";

/**
 * Headタグ部
 */
export const Head = (): JSX.Element => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

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
      <meta
        name="apple-mobile-web-app-title"
        content={siteMetadata.shortTitle}
      />
      <meta name="application-name" content={siteMetadata.shortTitle} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={siteMetadata.description} />

      <meta name="format-detection" content="telephone=no" />

      {
        /* local dev server CSP */
        process.env.NODE_ENV === "development" && (
          <meta
            httpEquiv="Content-Security-Policy"
            content={process.env.GATSBY_CONTENT_SECURITY_POLICY}
          />
        )
      }
      {
        /* local dev server Permissions-Policy */
        process.env.NODE_ENV === "development" && (
          <meta
            httpEquiv="Permissions-Policy"
            content={process.env.GATSBY_PERMISSIONS_POLICY}
          />
        )
      }
    </>
  );
};
