import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";

import { of, Observable, EMPTY } from "rxjs";
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  withLatestFrom
} from "rxjs/operators";
import * as AppActions from "./actions";
import { CoreActionsUnion } from "./actions";
import { Calendar } from "../model/calendar";
import { DataModel } from "../model/data-model";
import { CalendarService } from "../services/calendar.service";
import { FirebaseService } from "../services/firebase.service";
import { Action } from "rxjs/internal/scheduler/Action";
import {
  selectEventTypeModel,
  AppState,
  selectCurrentCalendarId
} from "./selectors";

// import { AuthService } from '../services/auth.service';

const makeNewCalendar = (name: string): Calendar => {
  return {
    name,
    eventModel: [],
    eventTypeModel: [],
    events: {},
    types: {},
    eventTitleField: "",
    typeTitleField: ""
  };
};

@Injectable()
export class AppEffects {
  // newCalendar: Calendar = {

  //   eventModel: [
  //     { name: "name", type: "date" },
  //     { name: "day", type: "date" }
  //   ],
  //   eventTypeModel: [
  //     // { name: "name", type: "inputField", isTitle: false },
  //     // { name: "phone", type: "inputField", isTitle: false }
  //   ],
  //   events: {},
  //   types: {},
  //   eventTitleField: "",
  //   typeTitleField: ""
  // };
  // createCalendar$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AppActions.setEventModel),
  //     mergeMap(() =>
  //       this.service.createCalendar(this.newCalendar).pipe(
  //         map((id: string) => {
  //           console.log(id);
  //           if (id) {
  //             return AppActions.setCalendarMetadata({
  //               calendarMetadata: { id, name: "123" }
  //             });
  //           }
  //         })
  //       )
  //     )
  //   )
  // );

  createCalendar$ = createEffect(() =>
    this.actions$.pipe(
      // ofType(AppActions.setEventModel),
      ofType("[Calendar] Create Calendar"),
      mergeMap(action => {
        const newCalendar = makeNewCalendar(action.calendarName);

        return this.firebaseService.createCalendar(newCalendar).pipe(
          map(response => {
            const id = response;
            return AppActions.storeCalendar({
              id,
              calendar: newCalendar
            });
            // });
          }),
          catchError(error => {
            return EMPTY;
          })
        );
      })
    )
  );

  loadCalendar$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Calendar] Load Calendar"),

      mergeMap(action => {
        return this.firebaseService.loadCalendar(action.calendarId).pipe(
          map((response: Calendar) => {
            console.log("res", response);

            return AppActions.storeCalendar({
              id: action.calendarId,
              calendar: response
            });
          }),
          catchError(error => {
            return EMPTY;
          })
        );
      })
    )
  );

  setEventModel$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Event Model] Save Event Model"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, id]) =>
        this.firebaseService.setEventModel(id, action.eventModel).pipe(
          map(response => {
            if (response) {
              // TO DO error handling if no response
              return AppActions.setEventModel({
                eventModel: action.eventModel
              });
            }
          }),
          catchError(error => {
            return EMPTY;
          })
        )
      )
    )
  );

  setTypeModel$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Type Model] Save Type Model"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, id]) =>
        this.firebaseService.setTypeModel(id, action.eventTypeModel).pipe(
          map(response => {
            if (response) {
              // TO DO error handling if no response
              return AppActions.setTypeModel({
                eventTypeModel: action.eventTypeModel
              });
            }
          }),
          catchError(error => {
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions<CoreActionsUnion>,
    private service: CalendarService,
    private firebaseService: FirebaseService,
    private store: Store<AppState>
  ) {}
}
