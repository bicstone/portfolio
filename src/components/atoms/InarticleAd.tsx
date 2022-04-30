import React from 'react';

export type InarticleAdProps = {
  pubId: string;
  adId: string;
};

/**
 * 記事内広告
 */
export const InarticleAd = React.memo<InarticleAdProps>(({ pubId, adId }) => {
  return (
    <>
      <ins
        className="adsbygoogle"
        css={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={pubId}
        data-ad-slot={adId}
      />
      <script
        dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }}
      />
    </>
  );
});

InarticleAd.displayName = 'InarticleAd';
