import { Action, createReducer, on } from "@ngrx/store";

import * as AppAction from "./actions";
import { initialState } from "./state";
import { Calendar } from "../model/calendar";
import { AppState } from "./selectors";

const appReducer = createReducer<any>(
  initialState,
  // on(AppAction.setCurrentCalendarId, (state, { id }) => {
  //   return { ...initialState, id };
  // }),

  on(AppAction.storeCalendar, (state, { calendar, id }) => {
    return { currentCalendarId: id, calendar };
  }),

  on(AppAction.addEvent, (state, { trEvent, eventId }) => {
    return {
      ...state,
      calendar: {
        ...state.calendar,
        events: { ...state.events, [eventId]: trEvent }
      }
    };
  }),

  on(AppAction.editEvent, (state, { trEvent, eventId }) => {
    return {
      ...state,
      calendar: {
        ...state.calendar,
        events: { ...state.events, [eventId]: trEvent }
      }
    };
  }),

  on(AppAction.deleteEvent, (state, { eventId }) => {
    const newEvents = { ...state.events };
    delete newEvents[eventId];
    return { ...state, calendar: { ...state.calendar, events: newEvents } };
  }),

  on(AppAction.addType, (state, { eventType, typeId }) => {
    return {
      ...state,
      calendar: {
        ...state.calendar,
        types: { ...state.types, [typeId]: eventType }
      }
    };
  }),

  on(AppAction.editType, (state, { eventType, typeId }) => {
    return {
      ...state,
      calendar: {
        ...state.calendar,
        types: { ...state.types, [typeId]: eventType }
      }
    };
  }),

  on(AppAction.deleteType, (state, { typeId }) => {
    const newTypes = { ...state.types };
    delete newTypes[typeId];
    return { ...state, calendar: { ...state.calendar, types: newTypes } };
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
