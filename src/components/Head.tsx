import React from 'react';
import Helmet from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <html lang="ja" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d1e1e" />
    <meta name="apple-mobile-web-app-title" content="まっしろ" />
    <meta name="application-name" content="まっしろ" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);

export default Head;
