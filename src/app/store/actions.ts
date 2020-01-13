import { createAction, props } from "@ngrx/store";
import { Calendar } from "../model/calendar";
import { DataModel } from "../model/data-model";
import { Entry } from "../model/entry";
import { TypeModel } from "../model/type-model";

export const setCalendar = createAction(
  "Set Calendar",
  props<{ calendar: Calendar }>()
);

export const addType = createAction("Add Type", props<{ eventType: Entry }>());

export const editType = createAction(
  "Edit Type",
  props<{ eventType: Entry; typeId: string }>()
);
export const deleteType = createAction(
  "Delete Type",
  props<{ typeId: string }>()
);

export const addEvent = createAction("Add Event", props<{ trEvent: Entry }>());

export const editEvent = createAction(
  "Edit Event",
  props<{ trEvent: Entry; eventId: string }>()
);

export const deleteEvent = createAction(
  "Delete Event",
  props<{ eventId: string }>()
);

export const setEventModel = createAction(
  "Set Event Model",
  props<{ eventModel: DataModel }>()
);

export const setTypeModel = createAction(
  "[EventModel] Set Fields",
  props<{ eventTypeModel: TypeModel }>()
);
