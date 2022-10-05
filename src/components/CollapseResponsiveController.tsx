import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

import type { Accordion, Theme } from "@mui/material";
import type { Breakpoint } from "@mui/material/styles";
import type { ReactComponentElement } from "react";

import { isDefined } from "@/utils/typeguard";

export interface CollapseResponsiveControllerProps {
  defaultExpanded: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
  children: ReactComponentElement<typeof Accordion>;
}

const useBreakPoint = (): Breakpoint => {
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

/**
 * ブレークポイントが広くなった場合に展開するアコーディオン制御
 * @deprecated
 */
export const CollapseResponsiveController = ({
  defaultExpanded = true,
  defaultExpandedBreakpoints = undefined,
  children,
}: CollapseResponsiveControllerProps): JSX.Element => {
  const width = useBreakPoint();
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const [previousWidth, setPreviousWidth] = useState<Breakpoint>("xs");

  useEffect(() => {
    if (previousWidth === width) {
      return;
    }

    // ブレークポイントが広くなった場合に展開する
    if (isDefined(defaultExpandedBreakpoints)) {
      const newValue = defaultExpandedBreakpoints.includes(width);
      if (!expanded && newValue) {
        setExpanded(newValue);
      }
    }
    setPreviousWidth(width);
  }, [defaultExpandedBreakpoints, expanded, previousWidth, width]);

  const handleChange = (): void => setExpanded(!expanded);

  return (
    <children.type
      expanded={expanded}
      onChange={handleChange}
      {...children.props}
    />
  );
};
