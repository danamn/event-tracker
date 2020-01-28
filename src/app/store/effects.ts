import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import * as AppActions from "./actions";
import { Calendar } from "../model/calendar";
import { CalendarService } from "../services/calendar.service";
// import { AuthService } from '../services/auth.service';

@Injectable()
export class AppEffects {
  newCalendar: Calendar = {
    calendarMetadata: { id: "c1", name: "calendar1" },
    eventModel: [
      { name: "name", type: "date" },
      { name: "day", type: "date" }
    ],
    eventTypeModel: [
      // { name: "name", type: "inputField", isTitle: false },
      // { name: "phone", type: "inputField", isTitle: false }
    ],
    events: {},
    types: {},
    eventTitleField: "",
    typeTitleField: ""
  };
  createCalendar$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Calendar] Create Calendar"),
      mergeMap(() =>
        this.service.createCalendar(this.newCalendar).pipe(
          map((id: string) => {
            console.log(id);
            if (id) {
              return AppActions.setCalendarMetadata({
                calendarMetadata: { id, name: "123" }
              });
            }
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: CalendarService) {}
}
