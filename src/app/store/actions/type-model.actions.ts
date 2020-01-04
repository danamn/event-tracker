import { createAction, props } from "@ngrx/store";
import { TMField } from "../../model/type-model";

export const setFields = createAction(
  "[EventModel] Set Fields",
  props<{ fields: TMField[] }>()
);
