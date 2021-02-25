import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionPageBlockProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - ページ
 */
export const NotionPageBlock: React.FC<NotionPageBlockProps> = ({ children }) => (
  <div>{children}</div>
);
