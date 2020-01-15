import { Calendar } from "../model/calendar";
import { DataModel } from "../model/data-model";
import { Entry } from "../model/entry";
import { EventType } from "../model/type";
import { TypeModel } from "../model/type-model";

export type State = {
  calendar: Calendar;
  eventModel: DataModel;
  eventTypeModel: TypeModel;
  events: Entry[];
  types: Entry[];
  eventTitleField: string;
  typeTitleField: string;
};

export const initialState: State = {
  calendar: { id: "c1", name: "calendar1" },
  eventModel: [
    { name: "name", type: "date" },
    { name: "day", type: "date" }
  ],
  eventTypeModel: [
    // { name: "name", type: "inputField", isTitle: false },
    // { name: "phone", type: "inputField", isTitle: false }
  ],
  events: [],
  types: [],
  eventTitleField: "",
  typeTitleField: ""
};
