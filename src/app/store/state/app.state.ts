import { EventModelState, initialEventModelState } from "./event-model.state";
import { EventsState, initialEventsState } from "./events.state";
import { TypeModelState, initialTypeModelState } from "./type-model.state";
import { TypesState, initialTypesState } from "./types.state";
import { CalendarState, initialCalendarState } from "./calendar.state";

export type AppState = {
  calendar: CalendarState;
  eventModel: EventModelState;
  eventTypeModel: TypeModelState;
  events: EventsState;
  types: TypesState;
};

export const initialAppState: AppState = {
  calendar: initialCalendarState,
  eventModel: initialEventModelState,
  eventTypeModel: initialTypeModelState,
  events: initialEventsState,
  types: initialTypesState
};
