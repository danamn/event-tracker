import { Action, createReducer, on } from "@ngrx/store";

import * as TypesActions from "../actions/types.actions";
import { TypesState, initialTypesState } from "../state/types.state";

const typesReducer = createReducer<any>(
  initialTypesState,
  on(TypesActions.addType, (state, { eventType }) => {
    return { ...state, typesList: [...state.typesList, eventType] };
  })
);

export function reducer(state: TypesState | undefined, action: Action) {
  return typesReducer(state, action);
}
