import { Action, createReducer, on } from "@ngrx/store";

import * as EventModelActions from "../actions/event-model.actions";
import {
  EventModelState,
  initialEventModelState
} from "../state/event-model.state";

const eventModelReducer = createReducer<any>(
  //   initialAppState.eventModel,
  initialEventModelState,
  on(EventModelActions.addField, (state, { field }) => {
    return { ...state, fields: [...state.fields, field] };
  })
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  // on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  // on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  // on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function reducer(state: EventModelState | undefined, action: Action) {
  return eventModelReducer(state, action);
}
