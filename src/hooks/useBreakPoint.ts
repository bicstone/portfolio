import { Theme, useTheme, useMediaQuery } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';

/**
 * 現在のMaterial-uiのブレークポイントを返す
 * @see https://material-ui.com/customization/breakpoints/
 */
export const useBreakPoint = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      // FIXME: The violation of rules of hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};
