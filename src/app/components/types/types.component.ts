import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";

import { selectCalendar, selectTypes, AppState } from "../../store/selectors";

@Component({
  selector: "app-types",
  templateUrl: "./types.component.html",
  styleUrls: ["./types.component.css"]
})
export class TypesComponent implements OnInit {
  calendar$ = this.store.pipe(select(selectCalendar));
  types$ = this.store.pipe(select(selectTypes));

  constructor(private store: Store<AppState>, private location: Location) {}

  ngOnInit() {}
  goBack(): void {
    this.location.back();
  }
}
