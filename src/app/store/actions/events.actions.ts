import { createAction, props } from "@ngrx/store";
import { TrEvent } from "../../model/tr-event";

export const addEvent = createAction(
  "[Events] Add Event",
  props<{ trEvent: TrEvent }>()
);
