import { createSelector, createFeatureSelector } from "@ngrx/store";

import { State } from "./state";

export interface AppState {
  calendarReducer: State;
}

export const selectCurrentCalendar = (state: AppState) => state.calendarReducer;

export const selectCalendar = createSelector(
  selectCurrentCalendar,
  (state: State) => state.calendar
);
export const selectEvents = createSelector(
  selectCurrentCalendar,
  (state: State) => state.events
);

export const selectTypes = createSelector(
  selectCurrentCalendar,
  (state: State) => state.types
);
export const selectEventTypeModel = createSelector(
  selectCurrentCalendar,
  (state: State) => state.eventTypeModel
);

export const selectEventModel = createSelector(
  selectCurrentCalendar,
  (state: State) => state.eventModel
);
