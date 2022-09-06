import { memo, useEffect } from "react";

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
export const InarticleAd = memo<InarticleAdProps>(({ pubId, adId }) => {
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
    <ins
      className="adsbygoogle"
      css={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client={pubId}
      data-ad-slot={adId}
    />
  );
});

InarticleAd.displayName = "InarticleAd";
