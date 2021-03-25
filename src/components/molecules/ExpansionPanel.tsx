import React from 'react';
import { Collapse } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useBreakPoint } from 'src/hooks';
import { ExpansionPanelContext } from 'src/contexts';

export type ExpansionPanelProps = {
  defaultExpanded?: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
  summary: JSX.Element;
  detail: JSX.Element;
};

/**
 * 詳細を開閉できるパネル
 * <ExpansionPanel summary={<ExpansionPanelSummary />} detail={<ExpansionPanelDetail />} />
 */
export const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
  defaultExpanded = true,
  defaultExpandedBreakpoints = undefined,
  summary,
  detail,
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

  const contextValue = React.useMemo(() => ({ expanded, setExpanded }), [expanded, setExpanded]);

  return (
    <>
      <ExpansionPanelContext.Provider value={contextValue}>
        {summary}
      </ExpansionPanelContext.Provider>
      <Collapse in={expanded}>
        <div aria-labelledby={summary.props.id} id={summary.props['aria-controls']} role="region">
          {detail}
        </div>
      </Collapse>
    </>
  );
};
