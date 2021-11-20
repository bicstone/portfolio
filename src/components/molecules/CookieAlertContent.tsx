import React from 'react';
import { Breakpoint } from '@mui/material/styles';
import { Box, SnackbarContent, Typography } from '@mui/material';
import { useBreakPoint } from 'src/hooks';

export type CookieAlertContentProps = {
  breakpoints: Breakpoint[];
  action: React.ReactNode;
  message: React.ReactNode;
};

/**
 * クッキーアラートのコンテンツ部
 */
export const CookieAlertContent = React.forwardRef<HTMLDivElement, CookieAlertContentProps>(
  ({ breakpoints, action, message }, ref) => {
    const width = useBreakPoint();
    return (
      <SnackbarContent
        ref={ref}
        css={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          wordBreak: 'keep-all',
          whiteSpace: 'nowrap',
        }}
        action={<Box padding={1}>{action}</Box>}
        message={
          <Typography variant={breakpoints.includes(width) ? 'caption' : 'body2'} component="div">
            {message}
          </Typography>
        }
      />
    );
  },
);
