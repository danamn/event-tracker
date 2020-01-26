import { createSelector, createFeatureSelector } from "@ngrx/store";

import { Calendar } from "../model/calendar";

export interface AppState {
  calendarReducer: Calendar;
}

export const selectCurrentCalendar = (state: AppState) => state.calendarReducer;

export const selectCalendar = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.calendarMetadata
);
export const selectEvents = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.events
);

export const selectTypes = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.types
);
export const selectEventTypeModel = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.eventTypeModel
);

export const selectEventModel = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.eventModel
);

export const selectEventTitleField = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.eventTitleField
);

export const selectTypeTitleField = createSelector(
  selectCurrentCalendar,
  (state: Calendar) => state.typeTitleField
);
