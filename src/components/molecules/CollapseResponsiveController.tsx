import { Accordion } from "@mui/material";
import { Breakpoint } from "@mui/material/styles";
import React from "react";
import { useBreakPoint } from "src/hooks";

import { isDefined } from "@/commons/typeguard";

export interface CollapseResponsiveControllerProps {
  defaultExpanded: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
  children: React.ReactComponentElement<typeof Accordion>;
}

/**
 * ブレークポイントが広くなった場合に展開するアコーディオン制御
 */
export const CollapseResponsiveController: React.FC<
  CollapseResponsiveControllerProps
> = ({
  defaultExpanded = true,
  defaultExpandedBreakpoints = undefined,
  children,
}) => {
  const width = useBreakPoint();
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded);
  const [previousWidth, setPreviousWidth] = React.useState<Breakpoint>("xs");

  React.useEffect(() => {
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
