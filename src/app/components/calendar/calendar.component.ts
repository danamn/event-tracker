import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";

import { Calendar } from "./calendar";
import { TrEvent } from "../event/tr-event";
import { CALENDARS } from "../calendars/mock-calendars";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  // calendar$: Observable<Calendar>;
  calendar: Calendar;
  events: TrEvent[];
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getCalendar();
  }

  getCalendar(): void {
    const name = this.route.snapshot.paramMap.get("name");

    const calendar: Calendar = CALENDARS.find(
      (cal: Calendar) => cal.name === name
    );

    this.calendar = calendar;
    // this.events = calendar.events;
  }

  addEvent() {
    const newEvent: TrEvent = {
      name: "test",
      id: "123",
      date: new Date(),
      typeId: "12"
    };
    // this.calendar.addEvent(newEvent);
  }

  goBack(): void {
    this.location.back();
  }
}
