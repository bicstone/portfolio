import type { Reducer } from "react";

export type Action =
  | { type: "TOGGLE_BULK_EXPAND" }
  | { type: "TOGGLE_EXPAND"; id: string };

/*
 * true if all accordions are expanded
 * false if all accordions are collapsed
 * string if only one accordion is expanded
 */
export type State = string | boolean;

export const initialState: State = false;

export const AccordionExpendReducer: Reducer<State, Action> = (
  state,
  action
) => {
  switch (action.type) {
    case "TOGGLE_BULK_EXPAND":
      // Expand only if all accordions are collapsed (=== false), otherwise collapse all.
      return state === false;
    case "TOGGLE_EXPAND":
      // Collapsed only if the accordion is expanded (=== action.id), otherwise expand it.
      return state === action.id ? false : action.id;
    default:
      return state;
  }
};
