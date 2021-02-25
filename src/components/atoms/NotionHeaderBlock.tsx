import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';
import { Typography } from '@material-ui/core';

export type NotionHeaderBlockProps = {
  children: NotionRenderChild;
  level: 1 | 2 | 3;
};

/**
 * notionからのブロック - タイトル
 */
export const NotionHeaderBlock: React.FC<NotionHeaderBlockProps> = ({ children, level }) => {
  switch (level) {
    case 1:
      return (
        <Typography variant="h4" component="h3">
          {children}
        </Typography>
      );
    case 2:
      return (
        <Typography variant="h5" component="h4">
          {children}
        </Typography>
      );
    case 3:
    default:
      return (
        <Typography variant="h6" component="h5">
          {children}
        </Typography>
      );
  }
};
