import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionListItemBlockProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - リストアイテム
 */
export const NotionListItemBlock: React.FC<NotionListItemBlockProps> = ({ children }) => (
  <li>{children}</li>
);
