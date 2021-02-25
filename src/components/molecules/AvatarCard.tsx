import React from 'react';
import { CardActionArea } from 'gatsby-theme-material-ui';
import { Card, CardHeader } from '@material-ui/core';

export type AvatarCardProps = {
  to?: string;
  avatar: React.ReactNode;
  title: React.ReactNode;
  subheader: React.ReactNode;
};

const CardChild: React.FC<Exclude<AvatarCardProps, 'to'>> = props => {
  return (
    <Card>
      <CardHeader {...props} />
    </Card>
  );
};

/**
 * 左にアバター、右にタイトルとサブタイトルのあるカード
 * toがあればりんくし、なければリンクしない
 */
export const AvatarCard: React.FC<AvatarCardProps> = ({ to, ...props }) => {
  return to ? (
    <CardActionArea to={to}>
      <CardChild {...props} />
    </CardActionArea>
  ) : (
    <CardChild {...props} />
  );
};
