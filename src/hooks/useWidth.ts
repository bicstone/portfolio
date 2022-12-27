import useMediaQuery from "@mui/material/useMediaQuery";

import type { Breakpoint, Theme } from "@mui/material/styles";

import { useTheme } from "@/hooks/useTheme";
import { isDefined } from "@/utils/typeguard";

/**
 * fork from https://github.com/mui/material-ui/blob/v5.10.8/docs/data/material/components/use-media-query/UseWidth.tsx
 * MIT License
 */

type BreakpointOrNull = Breakpoint | null;

/**
 * It only works because the number of breakpoints in theme is static.
 * It will break once you change the number of breakpoints.
 * See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export const useWidth = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !isDefined(output) && matches ? key : output;
    }, null) ?? "xs"
  );
};
