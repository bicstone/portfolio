import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';
import { makeStyles } from '@material-ui/core';

export type NotionCodeTextProps = {
  children: NotionRenderChild;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    fontFamily: 'Consolas, Courier, monospace',
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    backgroundColor: 'rgba(255, 229, 100, 0.2)',
    borderRadius: theme.shape.borderRadius,
  },
}));

/**
 * notionからのブロック - ソースコード
 */
export const NotionCodeText: React.FC<NotionCodeTextProps> = ({ children }) => {
  const classes = useStyles();

  return <span className={classes.root}>{children}</span>;
};
