import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Store, select } from "@ngrx/store";
import {
  selectEvents,
  AppState,
  selectEventTitleField
} from "../../store/selectors";
// import { Calendar } from "../../store/state";
import { Observable } from "rxjs";

import { CalendarMetadata } from "../../model/calendar-metadata";
import { Entry } from "../../model/entry";
import { CALENDARS } from "../calendars/mock-calendars";
import * as AppAction from "../../store/actions";

import { FirebaseService } from "../../services/firebase.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  // calendar$: Observable<Calendar>;
  calendar: CalendarMetadata;
  events$: Observable<Record<string, Entry>>;
  titleField$ = this.store.pipe(select(selectEventTitleField));

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>,
    private fb: FirebaseService,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.events$ = this.store.pipe(select(selectEvents));
    this.getCalendar();
  }

  getCalendar(): void {
    const name = this.route.snapshot.paramMap.get("name");

    const calendar: CalendarMetadata = CALENDARS.find(
      (cal: CalendarMetadata) => cal.name === name
    );

    this.calendar = calendar;
  }

  deleteEvent(event, id) {
    this.store.dispatch(AppAction.deleteEvent({ eventId: id }));
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    this.user.getUserFromStorage();
    // console.log("click");
    // this.email$ = this.fb.getUsers();
    // this.store.dispatch(AppAction.createCalendar({ calendarName: "tstName" }));
  }
}
