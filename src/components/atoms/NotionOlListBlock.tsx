import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionOlListBlockProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - 番号付きリスト
 */
export const NotionOlListBlock: React.FC<NotionOlListBlockProps> = ({ children }) => (
  <ol>{children}</ol>
);
