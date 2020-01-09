import { createAction, props } from "@ngrx/store";
import { Calendar } from "../model/calendar";
import { DataModel } from "../model/data-model";
import { TrEvent } from "../model/tr-event";
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

export const editEvent = createAction(
  "Edit Event",
  props<{ trEvent: TrEvent; eventId: string }>()
);

export const setEventModel = createAction(
  "Set Event Model",
  props<{ eventModel: DataModel }>()
);

export const setTypeModel = createAction(
  "[EventModel] Set Fields",
  props<{ eventTypeModel: TypeModel }>()
);
