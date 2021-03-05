import React from 'react';
import { NotionRenderChild } from 'gatsby-source-notionso/lib/renderer';
import { makeStyles, Typography } from '@material-ui/core';

export type NotionHeaderBlockProps = {
  children: NotionRenderChild;
  level: 1 | 2 | 3;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    position: 'relative',
    margin: theme.spacing(6, 0, 3),
    paddingLeft: theme.spacing(2),
    fontWeight: 'bold',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: theme.spacing(0.5),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

/**
 * notionからのブロック - タイトル
 */
export const NotionHeaderBlock: React.FC<NotionHeaderBlockProps> = ({ children, level }) => {
  const classes = useStyles();
  switch (level) {
    case 1:
      return (
        <Typography variant="h5" component="h2" className={classes.root}>
          {children}
        </Typography>
      );
    case 2:
      return (
        <Typography variant="h6" component="h3" className={classes.root}>
          {children}
        </Typography>
      );
    case 3:
    default:
      return (
        <Typography variant="subtitle1" component="h4" className={classes.root}>
          {children}
        </Typography>
      );
  }
};
