import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionItalicTextProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - イタリック(用語)
 */
export const NotionItalicText: React.FC<NotionItalicTextProps> = ({ children }) => {
  return <dfn>{children}</dfn>;
};
