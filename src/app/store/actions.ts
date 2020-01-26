import { createAction, props } from "@ngrx/store";
import { CalendarMetadata } from "../model/calendar-metadata";
import { DataModel } from "../model/data-model";
import { Entry } from "../model/entry";
import { TypeModel } from "../model/type-model";

export const createCalendar = createAction(
  "[Calendar] Create Calendar",
  props<{ calendarName: String }>()
);

export const loadCalendar = createAction(
  "[Calendar] Load Calendar",
  props<{ calendarId: String }>()
);

export const setCalendarMetadata = createAction(
  "[Calendar] Set Calendar metadata",
  props<{ calendarMetadata: CalendarMetadata }>()
);

export const addType = createAction(
  "[Type] Add Type",
  props<{ eventType: Entry }>()
);

export const editType = createAction(
  "[Type] Edit Type",
  props<{ eventType: Entry; typeId: string }>()
);
export const deleteType = createAction(
  "[Type] Delete Type",
  props<{ typeId: string }>()
);

export const addEvent = createAction(
  "[Event] Add Event",
  props<{ trEvent: Entry }>()
);

export const editEvent = createAction(
  "[Event] Edit Event",
  props<{ trEvent: Entry; eventId: string }>()
);

export const deleteEvent = createAction(
  "[Event] Delete Event",
  props<{ eventId: string }>()
);

export const setEventModel = createAction(
  "[Event Model] Set Event Model",
  props<{ eventModel: DataModel }>()
);

export const setTypeModel = createAction(
  "[Type Model] Set Fields",
  props<{ eventTypeModel: TypeModel }>()
);

export const setEventTitleField = createAction(
  "[Event Title Field] Set Event Title Field",
  props<{ titleField: string }>()
);

export const setTypeTitleField = createAction(
  "[Type Title Field] Set Type Title Field",
  props<{ titleField: string }>()
);
