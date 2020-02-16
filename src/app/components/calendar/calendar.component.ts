import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Store, select } from "@ngrx/store";
import {
  selectEvents,
  AppState,
  selectEventTitleField,
  selectCalendarName
} from "../../store/selectors";
import { Observable } from "rxjs";

import { Entry } from "../../model/entry";
import * as AppAction from "../../store/actions";

import { FirebaseService } from "../../services/firebase.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  calendarName$ = this.store.pipe(select(selectCalendarName));
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
  }

  deleteEvent(event, id) {
    this.store.dispatch(AppAction.deleteEvent({ eventId: id }));
  }

  goBack(): void {
    this.location.back();
  }

  async create() {
    // this.user.getUserFromStorage();
    // console.log("click");
    // this.fb.getCalendars().then(res => console.log("r", res));
    // .subscribe(calendar => console.log(calendar));
    // this.store.dispatch(AppAction.createCalendar({ calendarName: "tstName" }));
  }
}
