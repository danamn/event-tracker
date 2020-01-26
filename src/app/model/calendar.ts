import { CalendarMetadata } from "./calendar-metadata";
import { DataModel } from "./data-model";
import { Entry } from "./entry";
import { TypeModel } from "./type-model";

export interface Calendar {
  calendarMetadata: CalendarMetadata;
  eventModel: DataModel;
  eventTypeModel: TypeModel;
  events: Entry[];
  types: Entry[];
  eventTitleField: string;
  typeTitleField: string;
}
