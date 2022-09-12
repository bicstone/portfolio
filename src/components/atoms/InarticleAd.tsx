import { Script } from "gatsby";
import { useEffect } from "react";

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
 * In-article Ad
 */
export const InarticleAd = ({ pubId, adId }: InarticleAdProps): JSX.Element => {
  useEffect(() => {
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
          id="adsbygoogle.js"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GATSBY_ADSENSE_PUB_ID}`}
          crossOrigin="anonymous"
          strategy="idle"
          async
        />
      )}
    </>
  );
};
