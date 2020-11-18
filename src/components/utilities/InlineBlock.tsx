import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

type Props = {
  className?: string;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
}));

export const InlineBlock: React.FC<Props> = ({ className, ...props }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, className)} {...props} />;
};
