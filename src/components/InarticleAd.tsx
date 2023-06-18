import { Script } from "gatsby";
import { useEffect } from "react";

import { isDefined } from "@/utils/typeguard";

export interface InarticleAdProps {
  pubId: string;
  adId: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
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
      <Script
        id="adsbygoogle.js"
        strategy="idle"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
        async={true}
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        css={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={pubId}
        data-ad-slot={adId}
      />
    </>
  );
};
