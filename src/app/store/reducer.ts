import { Action, createReducer, on } from "@ngrx/store";

import * as AppAction from "./actions";
import { State, initialState } from "./state";

const appReducer = createReducer<any>(
  initialState,
  on(AppAction.addEvent, (state, { trEvent }) => {
    return { ...state, events: [...state.events, trEvent] };
  }),

  on(AppAction.editEvent, (state, { trEvent, eventId }) => {
    const editedEventIndex = state.events.findIndex(ev => ev.id === eventId);
    if (editedEventIndex >= 0) {
      return {
        ...state,
        events: [
          ...state.events.slice(0, editedEventIndex),
          trEvent,
          ...state.events.slice(editedEventIndex + 1)
        ]
      };
    }
    return state;
  }),

  on(AppAction.deleteEvent, (state, { eventId }) => {
    const updatedEvents = state.events.filter(ev => ev.id !== eventId);
    return { ...state, events: updatedEvents };
  }),

  on(AppAction.addType, (state, { eventType }) => {
    return { ...state, types: [...state.types, eventType] };
  }),

  on(AppAction.editType, (state, { eventType, typeId }) => {
    const editedTypeIndex = state.types.findIndex(t => t.id === typeId);

    if (editedTypeIndex >= 0) {
      return {
        ...state,
        types: [
          ...state.types.slice(0, editedTypeIndex),
          eventType,
          ...state.types.slice(editedTypeIndex + 1)
        ]
      };
    }
    return state;
  }),

  on(AppAction.deleteType, (state, { typeId }) => {
    const updatedTypes = state.types.filter(ev => ev.id !== typeId);
    return { ...state, types: updatedTypes };
  }),

  on(AppAction.setCalendar, (state, { calendar }) => {
    return { ...state, calendar };
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

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
