import React from 'react';
import { Card, CardHeader } from '@mui/material';

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
