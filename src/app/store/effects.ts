import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import * as AppActions from "./actions";
import { CoreActionsUnion } from "./actions";
import { Calendar } from "../model/calendar";
import { CalendarService } from "../services/calendar.service";
import { FirebaseService } from "../services/firebase.service";
import { AppState, selectCurrentCalendarId } from "./selectors";

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

  setEventTitleField$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Event Title Field] Save Event Title Field"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, id]) =>
        this.firebaseService
          .setTitleField(id, action.titleField, "eventTitleField")
          .pipe(
            map(response => {
              if (response) {
                // TO DO error handling if no response
                return AppActions.setEventTitleField({
                  titleField: action.titleField
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

  setTypeTitleField$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Type Title Field] Save Type Title Field"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, id]) =>
        this.firebaseService
          .setTitleField(id, action.titleField, "typeTitleField")
          .pipe(
            map(response => {
              if (response) {
                // TO DO error handling if no response
                return AppActions.setTypeTitleField({
                  titleField: action.titleField
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

  editEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Event] Save Event"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, calendarId]) =>
        this.firebaseService
          .editEvent(calendarId, action.trEvent, action.eventId)
          .pipe(
            map((response: string) => {
              if (response) {
                const id = response;
                // TO DO error handling if no response
                return AppActions.editEventSuccess();
              }
            }),
            catchError(error => {
              return EMPTY;
            })
          )
      )
    )
  );

  deleteEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Event] Delete Event"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, calendarId]) =>
        this.firebaseService.deleteEvent(calendarId, action.eventId).pipe(
          map((response: string) => {
            if (response) {
              // TO DO error handling if no response
              return AppActions.deleteEventSuccess();
            }
          }),
          catchError(error => {
            return EMPTY;
          })
        )
      )
    )
  );

  editType$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Type] Save Type"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, calendarId]) =>
        this.firebaseService
          .editType(calendarId, action.eventType, action.typeId)
          .pipe(
            map((response: string) => {
              if (response) {
                const id = response;
                // TO DO error handling if no response
                return AppActions.editTypeSuccess();
              }
            }),
            catchError(error => {
              return EMPTY;
            })
          )
      )
    )
  );

  deleteType$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Type] Delete Type"),
      withLatestFrom(this.store.pipe(select(selectCurrentCalendarId))),
      mergeMap(([action, calendarId]) =>
        this.firebaseService.deleteType(calendarId, action.typeId).pipe(
          map((response: string) => {
            if (response) {
              // TO DO error handling if no response
              return AppActions.deleteEventSuccess();
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
