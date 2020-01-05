import { createAction, props } from "@ngrx/store";
import { Calendar } from "../../model/calendar";

export const setCalendar = createAction(
  "[Calendar] Set Calendar",
  props<{ calendar: Calendar[] }>()
);
