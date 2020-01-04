import { EventType } from "../../model/type";

export type TypesState = {
  typesList: EventType[];
};

export const initialTypesState: TypesState = {
  typesList: []
};
