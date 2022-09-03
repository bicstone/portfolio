import { useTheme, useMediaQuery } from "@mui/material";

import type { Theme} from "@mui/material";
import type { Breakpoint } from "@mui/material/styles";

/**
 * 現在のMaterial-uiのブレークポイントを返す
 * @see https://material-ui.com/customization/breakpoints/
 */
export const useBreakPoint = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      // TODO: The violation of rules of hooks
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return output === null && matches ? key : output;
    }, null) ?? "xs"
  );
};
