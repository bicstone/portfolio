import React from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

export type InarticleAdProps = {
  pubId: string;
  adId: string;
};

/**
 * 記事内広告
 */
export const InarticleAd = React.memo<InarticleAdProps>(({ pubId, adId }) => {
  React.useEffect(() => {
    if (!window) {
      return;
    }
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      css={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client={pubId}
      data-ad-slot={adId}
    />
  );
});

InarticleAd.displayName = 'InarticleAd';
