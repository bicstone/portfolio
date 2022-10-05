import { useState, useEffect } from "react";

import { useWidth } from "./useWidth";

import type { Breakpoint } from "@mui/material/styles";

import { isDefined } from "@/utils/typeguard";

/**
 * When the screen size is larger than specified by the breakpoint key,
 * `expanded` is true.
 */
export const useCollapseResponsive = (props: {
  defaultExpanded: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
}): readonly [boolean, () => void] => {
  const { defaultExpanded, defaultExpandedBreakpoints } = props;
  const width = useWidth();
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const [previousWidth, setPreviousWidth] = useState<Breakpoint>("xs");

  useEffect(() => {
    if (previousWidth === width) {
      return;
    }

    if (isDefined(defaultExpandedBreakpoints)) {
      const newValue = defaultExpandedBreakpoints.includes(width);
      if (!expanded && newValue) {
        setExpanded(newValue);
      }
    }

    setPreviousWidth(width);
  }, [defaultExpandedBreakpoints, expanded, previousWidth, width]);

  const handleChange = (): void => setExpanded(!expanded);

  return [expanded, handleChange] as const;
};
