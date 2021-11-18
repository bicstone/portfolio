import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Breakpoint } from '@mui/material/styles';
import { Box, SnackbarContent, Typography } from '@mui/material';
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
