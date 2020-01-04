import { Action, createReducer, on } from "@ngrx/store";

import * as EventsActions from "../actions/events.actions";
import { EventsState, initialEventsState } from "../state/events.state";

const eventsReducer = createReducer<any>(
  initialEventsState,
  on(EventsActions.addEvent, (state, { trEvent }) => {
    return { ...state, eventsList: [...state.eventsList, trEvent] };
  })
);

export function reducer(state: EventsState | undefined, action: Action) {
  return eventsReducer(state, action);
}
