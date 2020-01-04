import { Action, createReducer, on } from "@ngrx/store";

import * as CalendarActions from "../actions/calendar.actions";

import { CalendarState, initialCalendarState } from "../state/calendar.state";

const calendarReducer = createReducer<any>(
  initialCalendarState,
  on(CalendarActions.setCalendar, (state, { calendar }) => {
    return { ...state, calendar };
  })
);

export function reducer(state: CalendarState | undefined, action: Action) {
  return calendarReducer(state, action);
}
