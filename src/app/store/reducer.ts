import { Action, createReducer, on } from "@ngrx/store";

import * as AppAction from "./actions";
import { State, initialState } from "./state";

const appReducer = createReducer<any>(
  initialState,
  on(AppAction.addEvent, (state, { trEvent }) => {
    return { ...state, events: [...state.events, trEvent] };
  }),
  on(AppAction.addType, (state, { eventType }) => {
    return { ...state, types: [...state.types, eventType] };
  }),
  on(AppAction.setCalendar, (state, { calendar }) => {
    return { ...state, calendar };
  }),
  on(AppAction.setEventModel, (state, { eventModel }) => {
    console.log("reducer", eventModel);

    return { ...state, eventModel };
  }),
  on(AppAction.setTypeModel, (state, { typeModel }) => {
    return { ...state, typeModel };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
