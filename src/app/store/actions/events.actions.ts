import { createAction, props } from "@ngrx/store";
import { TrEvent } from "../../components/event/tr-event";

export const addEvent = createAction(
  "[Events] Add Event",
  props<{ trEvent: TrEvent }>()
);
