import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";

import { Calendar } from "./calendar";
import { CALENDARS } from "../calendars/mock-calendars";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  // calendar$: Observable<Calendar>;
  calendar: Calendar;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getCalendar();
  }

  getCalendar(): void {
    const id = this.route.snapshot.paramMap.get("id");
    const calendar: Calendar = CALENDARS.find((cal: Calendar) => cal.id === id);
    this.calendar = calendar;
  }

  goBack(): void {
    this.location.back();
  }
}
