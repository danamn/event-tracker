import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { Store } from "@ngrx/store";
import { AppState } from "../../store/selectors";
import * as AppAction from "../../store/actions";
import { FirebaseService } from "../../services/firebase.service";

import { Observable } from "rxjs";

@Component({
  selector: "app-calendars",
  templateUrl: "./calendars.component.html",
  styleUrls: ["./calendars.component.css"]
})
export class CalendarsComponent implements OnInit {
  name = new FormControl("");
  calendars$: Observable<any[]>;

  constructor(
    private store: Store<AppState>,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.calendars$ = this.firebaseService.getCalendars();
  }

  openCalendar(id: string, name: string) {
    this.store.dispatch(AppAction.loadCalendar({ calendarId: id }));
    this.router.navigate([`/calendars/${name}`]);
  }

  saveCalendarName() {
    if (this.name.value.length > 0) {
      this.store.dispatch(
        AppAction.createCalendar({
          calendarName: this.name.value
        })
      );
    }
  }
}
