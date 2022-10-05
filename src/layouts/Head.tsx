import { withPrefix } from "gatsby";

import type { HeadProps } from "gatsby";

import siteMetaData from "@/constants/siteMetaData";

/**
 * Head export
 * see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = (props: {
  location: HeadProps["location"];
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: string;
}): JSX.Element => {
  const { location, title, description, image, imageAlt, type } = props;

  const isAllPagesToNoIndex = process.env.ALL_PAGES_TO_NO_INDEX === "true";
  const canonical = `${siteMetaData.siteUrl}${withPrefix(location.pathname)}`;

  return (
    <>
      {/* canonical links */}
      <link rel="canonical" href={canonical} />
      <link
        rel="alternate"
        href={canonical}
        hrefLang={siteMetaData.defaultLanguage}
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
        href={`${siteMetaData.siteUrl}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${siteMetaData.siteUrl}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${siteMetaData.siteUrl}/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${siteMetaData.siteUrl}/manifest.webmanifest`}
      />
      <link
        rel="mask-icon"
        href={`${siteMetaData.siteUrl}/safari-pinned-tab.svg`}
        color={siteMetaData.maskColor}
      />
      <meta
        name="apple-mobile-web-app-title"
        content={siteMetaData.shortTitle}
      />
      <meta name="application-name" content={siteMetaData.shortTitle} />
      <meta name="msapplication-TileColor" content={siteMetaData.tileColor} />

      {/* others */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta
        name="format-detection"
        content="email=no, telephone=no, address=no"
      />

      {/* SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {isAllPagesToNoIndex ? (
        <>
          <meta name="robots" content="noindex,follow" />
          <meta name="googlebot" content="noindex,follow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </>
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteMetaData.title} />
      <meta property="og:locale" content={siteMetaData.defaultLanguage} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@bicstone_me" />
      <meta name="twitter:creator" content="@bicstone_me" />

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
