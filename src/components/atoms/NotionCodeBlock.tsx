import React from 'react';
import { BlockMeta } from 'gatsby-source-notionso/lib/renderer';
import highlight from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

export type NotionCodeBlockProps = {
  meta: BlockMeta;
};

/**
 * notionからのブロック - ソースコード
 */
export const NotionCodeBlock: React.FC<NotionCodeBlockProps> = ({ meta }) => {
  const highlightedCode = highlight.highlightAuto(meta.title).value;
  return <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};
