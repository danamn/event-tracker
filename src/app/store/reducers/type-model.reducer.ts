import { Action, createReducer, on } from "@ngrx/store";

import * as TypeModelActions from "../actions/type-model.actions";

import {
  TypeModelState,
  initialTypeModelState
} from "../state/type-model.state";

const typeModelReducer = createReducer<any>(
  initialTypeModelState,
  on(TypeModelActions.setFields, (state, { fields }) => {
    return { ...state, fields };
  })
);

export function reducer(state: TypeModelState | undefined, action: Action) {
  return typeModelReducer(state, action);
}
