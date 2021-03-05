import React from 'react';
import { BlockMeta } from 'gatsby-source-notionso/lib/renderer';
import { makeStyles, Paper } from '@material-ui/core';
import highlight from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

export type NotionCodeBlockProps = {
  meta: BlockMeta;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    fontFamily: 'Consolas, Courier, monospace',
    margin: theme.spacing(3, 'auto'),
    padding: theme.spacing(2),
    background: '#1E1E1E',
    color: '#DCDCDC',
    borderRadius: theme.shape.borderRadius,
    overflow: 'auto',
  },
}));

/**
 * notionからのブロック - ソースコード
 */
export const NotionCodeBlock: React.FC<NotionCodeBlockProps> = ({ meta }) => {
  const classes = useStyles();

  const highlightedCode = highlight.highlightAuto(meta.title).value;

  return (
    <Paper>
      <pre className={classes.root}>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </Paper>
  );
};
