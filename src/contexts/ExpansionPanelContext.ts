import React from 'react';

export type ExpansionPanelContextValue = {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExpansionPanelContext = React.createContext<ExpansionPanelContextValue>({
  expanded: false,
  setExpanded: () => false,
});
