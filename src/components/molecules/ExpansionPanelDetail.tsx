import React from 'react';
import { Collapse } from '@material-ui/core';
import { ExpansionPanelContext } from 'src/contexts';

/**
 * ExpansionPanelの詳細
 */
export const ExpansionPanelDetail: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  children,
  ...props
}) => {
  const { expanded } = React.useContext(ExpansionPanelContext);

  return (
    <Collapse in={expanded}>
      <div {...props}>{children}</div>
    </Collapse>
  );
};
