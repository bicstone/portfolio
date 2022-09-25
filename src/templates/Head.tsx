import type { HeadFC } from "gatsby";

import { useSiteMetadata } from "@/hooks/useSiteMetadata";

/**
 * Head export
 * see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head: HeadFC<never, never> = ({ location }) => {
  const siteMetadata = useSiteMetadata();
  const canonical = `${siteMetadata.siteUrl}${location.pathname}`;

  return (
    <>
      {/* canonical links */}
      <link rel="canonical" href={canonical} />
      <link
        rel="alternate"
        href={canonical}
        hrefLang={siteMetadata.defaultLanguage}
      />
      <link rel="alternate" href={canonical} hrefLang="x-default" />

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

      {/* favicons, thanks to https://realfavicongenerator.net/ */}
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
        rel="manifest"
        href={`${siteMetadata.siteUrl}/manifest.webmanifest`}
      />
      <link
        rel="mask-icon"
        href={`${siteMetadata.siteUrl}/safari-pinned-tab.svg`}
        color={siteMetadata.maskColor}
      />
      <meta
        name="apple-mobile-web-app-title"
        content={siteMetadata.shortTitle}
      />
      <meta name="application-name" content={siteMetadata.shortTitle} />
      <meta name="msapplication-TileColor" content={siteMetadata.tileColor} />
      <meta name="description" content={siteMetadata.description} />

      {/* others */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
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
