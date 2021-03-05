import React from 'react';
import { Box, SnackbarContent, Typography, makeStyles } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useBreakPoint } from 'src/hooks';

export type CookieAlertContentProps = {
  breakpoints: Breakpoint[];
  action: React.ReactNode;
  message: React.ReactNode;
};

const useStyles = makeStyles(() => ({
  snackbar: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap',
  },
}));

/**
 * クッキーアラートのコンテンツ部
 */
export const CookieAlertContent: React.FC<CookieAlertContentProps> = ({
  breakpoints,
  action,
  message,
}) => {
  const classes = useStyles();
  const width = useBreakPoint();
  return (
    <SnackbarContent
      className={classes.snackbar}
      action={<Box padding={1}>{action}</Box>}
      message={
        <Typography variant={breakpoints.includes(width) ? 'caption' : 'body2'} component="div">
          {message}
        </Typography>
      }
    />
  );
};
