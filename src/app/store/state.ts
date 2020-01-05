import { Calendar } from "../components/calendar/calendar";
import { EventModel } from "../components/event-model/event-model";
import { TrEvent } from "../components/event/tr-event";
import { EventType } from "../model/type";
import { TypeModel } from "../model/type-model";

export type State = {
  calendar: Calendar;
  eventModel: EventModel;
  eventTypeModel: TypeModel;
  events: TrEvent[];
  types: EventType[];
};

export const initialState: State = {
  calendar: null,
  eventModel: [{ name: "test", type: "date" }],
  eventTypeModel: [],
  events: [],
  types: []
};
