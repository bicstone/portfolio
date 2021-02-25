import React from 'react';
import { BlockMeta } from 'gatsby-source-notionso/lib/renderer';

export type NotionImageBlockProps = {
  meta: BlockMeta;
};

/**
 * notionからのブロック - 画像
 */
export const NotionImageBlock: React.FC<NotionImageBlockProps> = ({ meta }) =>
  meta.publicImageUrl ? (
    <img
      src={meta.publicImageUrl}
      style={{ width: `${meta.width || 0}px` }}
      alt={meta.caption || ''}
    />
  ) : null;
