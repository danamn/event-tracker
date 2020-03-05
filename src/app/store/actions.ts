import { createAction, props, union } from "@ngrx/store";
import { CalendarMetadata } from "../model/calendar-metadata";
import { DataModel } from "../model/data-model";
import { Entry } from "../model/entry";
import { Calendar } from "../model/calendar";

export const createCalendar = createAction(
  "[Calendar] Create Calendar",
  props<{ calendarName: string }>()
);

export const loadCalendar = createAction(
  "[Calendar] Load Calendar",
  props<{ calendarId: string }>()
);
export const storeCalendar = createAction(
  "[Calendar] Store Calendar",
  props<{ calendar: Calendar; id: string }>()
);

export const setCalendarMetadata = createAction(
  "[Calendar] Set Calendar metadata",
  props<{ calendarMetadata: CalendarMetadata }>()
);

export const saveType = createAction(
  "[Type] Save Type",
  props<{ eventType: Entry; typeId: string }>()
);

export const editTypeSuccess = createAction("[Type] Edit Type Success");

export const deleteType = createAction(
  "[Type] Delete Type",
  props<{ typeId: string }>()
);

export const deleteTypeSuccess = createAction("[Type] Delete Type Success");

export const saveEvent = createAction(
  "[Event] Save Event",
  props<{ trEvent: Entry; eventId: string }>()
);

export const editEventSuccess = createAction("[Event] Edit Event Success");

export const deleteEvent = createAction(
  "[Event] Delete Event",
  props<{ eventId: string }>()
);

export const deleteEventSuccess = createAction("[Event] Delete Event Success");

export const setEventModel = createAction(
  "[Event Model] Set Event Model",
  props<{ eventModel: DataModel }>()
);
export const saveEventModel = createAction(
  "[Event Model] Save Event Model",
  props<{ eventModel: DataModel }>()
);

export const setTypeModel = createAction(
  "[Type Model] Set Type Model",
  props<{ eventTypeModel: DataModel }>()
);
export const saveTypeModel = createAction(
  "[Type Model] Save Type Model",
  props<{ eventTypeModel: DataModel }>()
);

export const saveEventTitleField = createAction(
  "[Event Title Field] Save Event Title Field",
  props<{ titleField: string }>()
);

export const setEventTitleField = createAction(
  "[Event Title Field] Set Event Title Field",
  props<{ titleField: string }>()
);

export const setTypeTitleField = createAction(
  "[Type Title Field] Set Type Title Field",
  props<{ titleField: string }>()
);

export const saveTypeTitleField = createAction(
  "[Type Title Field] Save Type Title Field",
  props<{ titleField: string }>()
);

const all = union({
  createCalendar,
  loadCalendar,
  setCalendarMetadata,
  storeCalendar,
  editEventSuccess,
  saveEvent,
  deleteEvent,
  deleteEventSuccess,
  saveType,
  deleteType,
  deleteTypeSuccess,
  setEventModel,
  saveEventModel,
  setTypeModel,
  saveTypeModel,
  setEventTitleField,
  saveEventTitleField,
  setTypeTitleField,
  saveTypeTitleField
});

export type CoreActionsUnion = typeof all;
