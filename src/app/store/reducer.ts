import { Action, createReducer, on } from "@ngrx/store";

import * as AppAction from "./actions";
import { initialState } from "./state";
import { Calendar } from "../model/calendar";

const appReducer = createReducer<any>(
  initialState,
  on(AppAction.addEvent, (state, { trEvent, eventId }) => {
    return { ...state, events: { ...state.events, [eventId]: trEvent } };
  }),

  on(AppAction.editEvent, (state, { trEvent, eventId }) => {
    return { ...state, events: { ...state.events, [eventId]: trEvent } };
  }),

  on(AppAction.deleteEvent, (state, { eventId }) => {
    const newEvents = { ...state.events };
    delete newEvents[eventId];
    return { ...state, events: newEvents };
  }),

  on(AppAction.addType, (state, { eventType, typeId }) => {
    return { ...state, types: { ...state.types, [typeId]: eventType } };
  }),

  on(AppAction.editType, (state, { eventType, typeId }) => {
    return { ...state, types: { ...state.types, [typeId]: eventType } };
  }),

  on(AppAction.deleteType, (state, { typeId }) => {
    const newTypes = { ...state.types };
    delete newTypes[typeId];
    return { ...state, types: newTypes };
  }),

  on(AppAction.setCalendarMetadata, (state, { calendarMetadata }) => {
    return { ...state, calendarMetadata };
  }),

  on(AppAction.setEventModel, (state, { eventModel }) => {
    return { ...state, eventModel };
  }),

  on(AppAction.setTypeModel, (state, { eventTypeModel }) => {
    return { ...state, eventTypeModel };
  }),

  on(AppAction.setEventTitleField, (state, { titleField }) => {
    return { ...state, eventTitleField: titleField };
  }),
  on(AppAction.setTypeTitleField, (state, { titleField }) => {
    return { ...state, typeTitleField: titleField };
  })
);

export function reducer(state: Calendar | undefined, action: Action) {
  return appReducer(state, action);
}
