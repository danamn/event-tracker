import { CalendarMetadata } from "./calendar-metadata";
import { DataModel } from "./data-model";
import { Entry } from "./entry";
import { TypeModel } from "./type-model";

export interface Calendar {
  calendarMetadata: CalendarMetadata;
  eventModel: DataModel;
  eventTypeModel: TypeModel;
  // events: Entry[];
  events: Record<string, Entry>;
  // types: Entry[];
  types: Record<string, Entry>;
  eventTitleField: string;
  typeTitleField: string;
}
