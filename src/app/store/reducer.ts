import { Action, createReducer, on } from "@ngrx/store";

import * as AppAction from "./actions";
import { initialState } from "./state";
import { AppState } from "./selectors";

const appReducer = createReducer<any>(
  initialState,

  on(AppAction.storeCalendar, (state, { calendar, id }) => {
    return { currentCalendarId: id, calendar };
  }),

  on(AppAction.editEventSuccess, state => {
    return { ...state };
  }),

  on(AppAction.deleteEventSuccess, state => {
    return { ...state };
  }),

  on(AppAction.editTypeSuccess, state => {
    return { ...state };
  }),

  on(AppAction.setCalendarMetadata, (state, { calendarMetadata }) => {
    return { ...state, calendar: { ...state.calendar, calendarMetadata } };
  }),

  on(AppAction.setEventModel, (state, { eventModel }) => {
    return { ...state, calendar: { ...state.calendar, eventModel } };
  }),

  on(AppAction.setTypeModel, (state, { eventTypeModel }) => {
    return { ...state, calendar: { ...state.calendar, eventTypeModel } };
  }),

  on(AppAction.setEventTitleField, (state, { titleField }) => {
    return {
      ...state,
      calendar: { ...state.calendar, eventTitleField: titleField }
    };
  }),
  on(AppAction.setTypeTitleField, (state, { titleField }) => {
    return {
      ...state,
      calendar: { ...state.calendar, typeTitleField: titleField }
    };
  })
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
