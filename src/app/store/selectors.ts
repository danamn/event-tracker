import { createSelector, createFeatureSelector } from "@ngrx/store";

import { State } from "./state";

// export const selectCurrentCalendar = createFeatureSelector<State>(
//   "calendarReducer"
// );

export interface AppState {
  calendarReducer: State;
}

export const selectCurrentCalendar = (state: AppState) => state.calendarReducer;

export const selectCalendar = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    return state.calendar;
  }
);
export const selectEvents = createSelector(
  selectCurrentCalendar,
  (state: State) => {
    console.log(state.events);

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
