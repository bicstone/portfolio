import type { Reducer } from "react";

export type Action =
  | { type: "TOGGLE_EXPAND"; id: string }
  | { type: "ALL_EXPAND"; ids: string[] }
  | { type: "ALL_COLLAPSE" };

export type State = string[];

export const initialState: State = [];

export const AccordionExpendReducer: Reducer<State, Action> = (
  state,
  action
) => {
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
