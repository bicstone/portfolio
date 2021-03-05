import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionBoldTextProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - 太字(重要)
 */
export const NotionBoldText: React.FC<NotionBoldTextProps> = ({ children }) => {
  return <strong>{children}</strong>;
};
