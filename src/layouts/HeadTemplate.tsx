import type { HeadProps } from "gatsby";

import { SITE_METADATA } from "@/constants/SITE_METADATA";

/**
 * Head export
 * see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const HeadTemplate = (props: {
  location: HeadProps["location"];
  title: string;
  description?: string;
  image?: string;
  imageAlt: string;
  type: string;
}): React.JSX.Element => {
  const {
    location,
    title,
    description = SITE_METADATA.description,
    image = SITE_METADATA.ogpImage,
    imageAlt,
    type,
  } = props;

  const isAllPagesToNoIndex = process.env.ALL_PAGES_TO_NO_INDEX === "true";
  const canonical = `${SITE_METADATA.siteUrl}${location.pathname}`;

  return (
    <>
      {/* canonical links */}
      <link rel="canonical" href={canonical} />
      <link
        rel="alternate"
        href={canonical}
        hrefLang={SITE_METADATA.defaultLanguage}
      />
      <link rel="alternate" href={canonical} hrefLang="x-default" />
      {/* sentry */}
      <link rel="dns-prefetch" href="https://js.sentry-cdn.com" />
      {/* analytics */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://ssl.google-analytics.com" />
      {/* favicons, thanks to https://realfavicongenerator.net/ */}
      <link
        rel="icon"
        type="image/png"
        href={`${SITE_METADATA.siteUrl}/favicon-96x96.png`}
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href={`${SITE_METADATA.siteUrl}/favicon.svg`}
      />
      <link rel="shortcut icon" href={`${SITE_METADATA.siteUrl}/favicon.ico`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${SITE_METADATA.siteUrl}/apple-touch-icon.png`}
      />
      <meta name="apple-mobile-web-app-title" content="bicstone" />
      <link rel="manifest" href={`${SITE_METADATA.siteUrl}/site.webmanifest`} />
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
      <meta property="og:site_name" content={SITE_METADATA.title} />
      <meta property="og:locale" content={SITE_METADATA.defaultLanguage} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: SITE_METADATA.siteUrl,
            logo: SITE_METADATA.logoImage,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": SITE_METADATA.siteUrl,
                  name: SITE_METADATA.title,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": canonical,
                  name: title,
                  "@type": "Thing",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};
