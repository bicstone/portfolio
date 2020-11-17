import { Theme, useTheme, useMediaQuery } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export const useBreakPoint = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};
