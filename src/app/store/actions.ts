import { createAction, props } from "@ngrx/store";
import { Calendar } from "../components/calendar/calendar";
import { EventModel } from "../components/event-model/event-model";
import { TrEvent } from "../components/event/tr-event";
import { EventType } from "../model/type";
import { TypeModel } from "../model/type-model";

export const setCalendar = createAction(
  "Set Calendar",
  props<{ calendar: Calendar }>()
);

export const addType = createAction(
  "Add Type",
  props<{ eventType: EventType }>()
);

export const addEvent = createAction(
  "Add Event",
  props<{ trEvent: TrEvent }>()
);

export const setEventModel = createAction(
  "Set Event Model",
  props<{ eventModel: EventModel }>()
);

export const setTypeModel = createAction(
  "[EventModel] Set Fields",
  props<{ typeModel: TypeModel }>()
);
