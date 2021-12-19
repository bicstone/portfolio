import React from 'react';

import { Accordion } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';

import { useBreakPoint } from 'src/hooks';

export type CollapseResponsiveControllerProps = {
  defaultExpanded: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
  children: React.ReactComponentElement<typeof Accordion>;
};

/**
 * ブレークポイントが広くなった場合に展開するアコーディオン制御
 */
export const CollapseResponsiveController: React.FC<CollapseResponsiveControllerProps> = ({
  defaultExpanded = true,
  defaultExpandedBreakpoints = undefined,
  children,
}) => {
  const width = useBreakPoint();
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded);

  React.useEffect(() => {
    // ブレークポイントが広くなった場合に展開する
    if (defaultExpandedBreakpoints) {
      const newValue = defaultExpandedBreakpoints.includes(width);
      if (!expanded && newValue) {
        setExpanded(newValue);
      }
    }
  }, [width]);

  const handleChange = () => setExpanded(!expanded);

  return <children.type expanded={expanded} onChange={handleChange} {...children.props} />;
};
