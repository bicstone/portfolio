import React from 'react';

import { SnackbarContent, Typography } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';

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
        action={<div css={theme => ({ padding: theme.spacing(1) })}>{action}</div>}
        message={
          <Typography variant={breakpoints.includes(width) ? 'caption' : 'body2'} component="div">
            {message}
          </Typography>
        }
      />
    );
  },
);
