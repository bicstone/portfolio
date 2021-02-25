import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';

export type NotionTextBlockProps = {
  children: NotionRenderChild;
};

/**
 * notionからのブロック - テキスト
 */
export const NotionTextBlock: React.FC<NotionTextBlockProps> = ({ children }) => <p>{children}</p>;
