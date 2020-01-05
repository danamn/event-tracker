import { createSelector, createFeatureSelector } from "@ngrx/store";

import { State } from "./state";

export const selectCurrentCalendar = createFeatureSelector<State>(
  "calendarReducer"
);

export const selectCalendar = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    return state.calendar;
  }
);
export const selectEvents = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    return state.events;
  }
);
export const selectTypes = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    return state.types;
  }
);
export const selectEventTypeModel = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    return state.eventTypeModel;
  }
);

export const selectEventModel = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    return state.eventModel;
  }
);
