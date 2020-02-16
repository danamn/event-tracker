import { Calendar } from "../model/calendar";
import { AppState } from "./selectors";

export const initialState: AppState = {
  currentCalendarId: "",
  calendar: {
    name: "",
    eventModel: [
      { name: "name", type: "date" },
      { name: "day", type: "date" }
    ],
    eventTypeModel: [
      // { name: "name", type: "inputField", isTitle: false },
      // { name: "phone", type: "inputField", isTitle: false }
    ],
    events: {},
    types: {},
    eventTitleField: "",
    typeTitleField: ""
  }
};
