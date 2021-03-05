import React from 'react';
import { BlockMeta } from 'gatsby-source-notionso/lib/renderer';
import { Paper, makeStyles } from '@material-ui/core';

export type NotionImageBlockProps = {
  meta: BlockMeta;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
}));

/**
 * notionからのブロック - 画像
 */
export const NotionImageBlock: React.FC<NotionImageBlockProps> = ({ meta }) => {
  const classes = useStyles();

  return meta.publicImageUrl ? (
    <Paper className={classes.root}>
      <img
        src={meta.publicImageUrl}
        style={{ width: `${meta.width || 0}px` }}
        alt={meta.caption || ''}
      />
    </Paper>
  ) : null;
};
