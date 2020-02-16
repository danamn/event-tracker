// import { CalendarMetadata } from "./calendar-metadata";
import { DataModel } from "./data-model";
import { Entry } from "./entry";

export interface Calendar {
  // calendarMetadata: CalendarMetadata;
  name: string;
  eventModel: DataModel;
  eventTypeModel: DataModel;
  // events: Entry[];
  events: Record<string, Entry>;
  // types: Entry[];
  types: Record<string, Entry>;
  eventTitleField: string;
  typeTitleField: string;
}
