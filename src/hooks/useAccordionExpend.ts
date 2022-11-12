import { useReducer, useMemo, useCallback } from "react";

import type { Reducer } from "react";

type Action =
  | { type: "TOGGLE_EXPAND"; id: string }
  | { type: "ALL_EXPAND"; ids: string[] }
  | { type: "ALL_COLLAPSE" };

type State = string[];

const initialState: State = [];

const AccordionExpendReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EXPAND":
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id);
      } else {
        return [...state, action.id];
      }
    case "ALL_EXPAND":
      return action.ids;
    case "ALL_COLLAPSE":
      return [];
    default:
      return state;
  }
};

export const useAccordionExpend = (
  allIds: State
): {
  expandedIds: State;
  isAllExpanded: boolean;
  toggleBulkExpand: () => void;
  toggleExpand: (id: string) => void;
} => {
  const [expandedIds, dispatchExpanded] = useReducer(
    AccordionExpendReducer,
    initialState
  );

  const isAllExpanded = useMemo(
    () => expandedIds.length === allIds.length,
    [allIds.length, expandedIds.length]
  );

  const toggleBulkExpand = useCallback(() => {
    if (isAllExpanded) {
      dispatchExpanded({ type: "ALL_COLLAPSE" });
    } else {
      dispatchExpanded({ type: "ALL_EXPAND", ids: allIds });
    }
  }, [allIds, isAllExpanded]);

  const toggleExpand = useCallback((id: string): void => {
    dispatchExpanded({ type: "TOGGLE_EXPAND", id });
  }, []);

  return {
    expandedIds,
    isAllExpanded,
    toggleBulkExpand,
    toggleExpand,
  };
};
