import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import { CardActionArea } from 'gatsby-theme-material-ui';

export type MediaCardProps = {
  to?: string;
  media?: React.ReactNode;
};

/**
 * 上にMediaが付いたカード
 */
export const MediaCard: React.FC<React.ComponentProps<typeof CardHeader> & MediaCardProps> = ({
  to,
  media,
  ...props
}) => {
  return to ? (
    <CardActionArea to={to}>
      <Card>
        {media}
        <CardHeader {...props} />
      </Card>
    </CardActionArea>
  ) : (
    <Card>
      {media}
      <CardHeader {...props} />
    </Card>
  );
};
