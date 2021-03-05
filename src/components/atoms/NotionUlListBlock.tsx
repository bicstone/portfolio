import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionUlListBlockProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - 番号なしリスト
 */
export const NotionUlListBlock: React.FC<NotionUlListBlockProps> = ({ children }) => (
  <ul>{children}</ul>
);
