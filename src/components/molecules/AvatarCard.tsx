import React from 'react';
import { Card, CardHeader } from '@material-ui/core';

/**
 * 左にAvatarが付いたカード
 */
export const AvatarCard: React.FC<React.ComponentProps<typeof CardHeader>> = props => {
  return (
    <Card>
      <CardHeader {...props} />
    </Card>
  );
};
