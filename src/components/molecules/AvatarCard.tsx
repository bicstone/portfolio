import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import { CardActionArea } from 'gatsby-theme-material-ui';

export type AvatarCardProps = {
  to?: string;
};

/**
 * 左にAvatarが付いたカード
 */
export const AvatarCard: React.FC<React.ComponentProps<typeof CardHeader> & AvatarCardProps> = ({
  to,
  ...props
}) => {
  return to ? (
    <CardActionArea to={to}>
      <Card>
        <CardHeader {...props} />
      </Card>
    </CardActionArea>
  ) : (
    <Card>
      <CardHeader {...props} />
    </Card>
  );
};
