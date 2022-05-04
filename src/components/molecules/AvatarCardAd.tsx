import React from 'react';

import { Card } from '@mui/material';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

export type AvatarCardAdProps = {
  pubId: string;
  adId: string;
  layoutKey: string;
};

/**
 * AvatarCardAd
 */
export const AvatarCardAd = React.memo<AvatarCardAdProps>(({ pubId, adId, layoutKey }) => {
  React.useEffect(() => {
    if (!window) {
      return;
    }
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <Card>
      <ins
        className="adsbygoogle"
        css={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key={layoutKey}
        data-ad-client={pubId}
        data-ad-slot={adId}
      />
    </Card>
  );
});

AvatarCardAd.displayName = 'AvatarCardAd';
