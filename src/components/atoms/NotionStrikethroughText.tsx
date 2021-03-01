import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionStrikethroughTextProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - 取り消し線
 */
export const NotionStrikethroughText: React.FC<NotionStrikethroughTextProps> = ({ children }) => {
  return <del>{children}</del>;
};
