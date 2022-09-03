import { useState, useEffect } from "react";
import { useBreakPoint } from "src/hooks";

import type { Accordion } from "@mui/material";
import type { Breakpoint } from "@mui/material/styles";
import type { ReactComponentElement } from "react";

import { isDefined } from "@/commons/typeguard";

export interface CollapseResponsiveControllerProps {
  defaultExpanded: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
  children: ReactComponentElement<typeof Accordion>;
}

/**
 * ブレークポイントが広くなった場合に展開するアコーディオン制御
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
