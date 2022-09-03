import { Script } from "gatsby";
import React from "react";

import { isDefined } from "@/commons/typeguard";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

export interface InarticleAdProps {
  pubId: string;
  adId: string;
}

/**
 * 記事内広告
 */
export const InarticleAd = React.memo<InarticleAdProps>(({ pubId, adId }) => {
  React.useEffect(() => {
    if (!isDefined(window)) {
      return;
    }
    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
    } catch {
      // ignore
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        css={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={pubId}
        data-ad-slot={adId}
      />
      {isDefined(process.env.GATSBY_ADSENSE_PUB_ID) && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GATSBY_ADSENSE_PUB_ID}`}
          async
          crossOrigin="anonymous"
          strategy="idle"
        />
      )}
    </>
  );
});

InarticleAd.displayName = "InarticleAd";
