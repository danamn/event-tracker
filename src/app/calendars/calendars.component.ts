import { Component, OnInit } from "@angular/core";
import { CALENDARS } from "./mock-calendars";

@Component({
  selector: "app-calendars",
  templateUrl: "./calendars.component.html",
  styleUrls: ["./calendars.component.css"]
})
export class CalendarsComponent implements OnInit {
  constructor() {}

  calendars = CALENDARS;

  ngOnInit() {}
}
