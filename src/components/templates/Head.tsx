import React from 'react';
import { Helmet } from 'gatsby-plugin-react-i18next';
import { useBuildTime, useSiteMetadata } from '../../hooks';

export type HeadProps = {
  title?: string;
  description?: string;
  image?: string;
};

export const Head: React.FC<HeadProps> = ({
  title = undefined,
  description = undefined,
  image = undefined,
}) => {
  const buildTime = useBuildTime();
  const defaultMetadata = useSiteMetadata();
  const seo = {
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    image: image || defaultMetadata.image,
  };
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{defaultMetadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${defaultMetadata.siteUrl}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${defaultMetadata.siteUrl}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${defaultMetadata.siteUrl}/favicon-16x16.png`}
      />
      <link
        rel="mask-icon"
        href={`${defaultMetadata.siteUrl}/safari-pinned-tab.svg`}
        color="#2d1e1e"
      />
      <meta name="apple-mobile-web-app-title" content={defaultMetadata.shortTitle} />
      <meta name="application-name" content={defaultMetadata.shortTitle} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={`${defaultMetadata.siteUrl}${seo.image}`} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:site_name" content={defaultMetadata.title} />
      <meta property="article:published_time" content={buildTime} />
      <meta property="article:modified_time" content={buildTime} />
      <meta property="article:author" content={defaultMetadata.author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${defaultMetadata.siteUrl}${seo.image}`} />
      <meta name="twitter:image:alt" content={seo.title} />
      <meta name="twitter:creator" content={defaultMetadata.twitter} />
      <meta name="twitter:site" content={defaultMetadata.twitter} />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};
