import { Calendar } from "../model/calendar";
import { EventModel } from "../model/event-model";
import { TrEvent } from "../model/tr-event";
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
  eventModel: [
    { name: "test", type: "date" },
    { name: "name", type: "date" }
  ],
  eventTypeModel: [],
  events: [{ test: "abc", id: "1", typeId: "1", name: "yes" }],
  types: []
};
