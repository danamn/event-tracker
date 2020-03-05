import { Calendar } from "../model/calendar";
import { AppState } from "./selectors";

export const initialState: AppState = {
  currentCalendarId: "",
  calendar: {
    name: "",
    eventModel: [],
    eventTypeModel: [],
    events: {},
    types: {},
    eventTitleField: "",
    typeTitleField: ""
  }
};
