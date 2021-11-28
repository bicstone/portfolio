import React from 'react';

import { Card, CardHeader } from '@mui/material';

export type MediaCardProps = {
  media?: React.ReactNode;
};

/**
 * 上にMediaが付いたカード
 */
export const MediaCard: React.FC<React.ComponentProps<typeof CardHeader> & MediaCardProps> = ({
  media,
  ...props
}) => {
  return (
    <Card>
      {media}
      <CardHeader {...props} />
    </Card>
  );
};
