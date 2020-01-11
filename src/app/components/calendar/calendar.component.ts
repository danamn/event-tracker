import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Store, select } from "@ngrx/store";
import { selectEvents, AppState } from "../../store/selectors";
import { State } from "../../store/state";
import { Observable } from "rxjs";

import { Calendar } from "../../model/calendar";
import { Entry } from "../../model/entry";
import { CALENDARS } from "../calendars/mock-calendars";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  // calendar$: Observable<Calendar>;
  calendar: Calendar;
  events$: Observable<Entry[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.events$ = this.store.pipe(select(selectEvents));
    this.getCalendar();
  }

  getCalendar(): void {
    const name = this.route.snapshot.paramMap.get("name");

    const calendar: Calendar = CALENDARS.find(
      (cal: Calendar) => cal.name === name
    );

    this.calendar = calendar;
  }

  goBack(): void {
    this.location.back();
  }
}
