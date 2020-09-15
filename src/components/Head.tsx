import React from 'react';
import { Helmet, useI18next } from 'gatsby-plugin-react-i18next';
import useSiteMetadata from '../hooks/use-site-metadata';
import useBuildTime from '../hooks/use-buildtime';
import { Languages } from '../types/languages';

export interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  isHome?: boolean;
}

const Head: React.FC<Props> = ({ title = '', description = '', pathname = '', image = '' }) => {
  const siteMetadata = useSiteMetadata();
  const buildTime = useBuildTime();
  const { language } = useI18next();
  const defaultMetadata = {
    title: siteMetadata?.title?.[language as Languages] || '',
    shortTitle: siteMetadata?.shortTitle?.[language as Languages] || '',
    description: siteMetadata?.description?.[language as Languages] || '',
    author: siteMetadata?.author?.[language as Languages] || '',
    image: siteMetadata?.icon?.src || '',
  };
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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d1e1e" />
      <meta name="apple-mobile-web-app-title" content={defaultMetadata.shortTitle} />
      <meta name="application-name" content={defaultMetadata.shortTitle} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={pathname} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:site_name" content={defaultMetadata.title} />
      <meta property="og:locale" content="language" />
      <meta property="article:published_time" content={buildTime} />
      <meta property="article:modified_time" content={buildTime} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={pathname} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={defaultMetadata.author} />
      <meta name="twitter:site" content={defaultMetadata.author} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="Hatena::Bookmark" content="nocomment" />
      <meta name="referrer" content="unsafe-url" />
    </Helmet>
  );
};

export default Head;
