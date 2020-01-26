import { Calendar } from "../model/calendar";

export const initialState: Calendar = {
  calendarMetadata: { id: "c1", name: "calendar1" },
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
