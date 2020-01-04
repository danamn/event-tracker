import { createAction, props } from "@ngrx/store";
import { Field } from "../../components/event-model/event-model";

export const addField = createAction(
  "[EventModel] Add Field",
  props<{ field: Field }>()
);

export const removeField = createAction(
  "[EventModel] Remove Field",
  props<{ field: Field }>()
);
