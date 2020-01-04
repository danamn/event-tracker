import { createAction, props } from "@ngrx/store";
import { EventType } from "../../model/type";

export const addType = createAction(
  "[Types] Add Event",
  props<{ eventType: EventType }>()
);
