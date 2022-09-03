import { Accordion } from "@mui/material";
import { Breakpoint } from "@mui/material/styles";
import React from "react";
import { useBreakPoint } from "src/hooks";

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

  React.useEffect(() => {
    // ブレークポイントが広くなった場合に展開する
    if (defaultExpandedBreakpoints != null) {
      const newValue = defaultExpandedBreakpoints.includes(width);
      if (!expanded && newValue) {
        setExpanded(newValue);
      }
    }
  }, [defaultExpandedBreakpoints, expanded, width]);

  const handleChange = (): void => setExpanded(!expanded);

  return (
    <children.type
      expanded={expanded}
      onChange={handleChange}
      {...children.props}
    />
  );
};
