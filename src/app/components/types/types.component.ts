import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";

import {
  selectCalendarName,
  selectTypes,
  AppState,
  selectTypeTitleField
} from "../../store/selectors";
import * as AppAction from "../../store/actions";

@Component({
  selector: "app-types",
  templateUrl: "./types.component.html",
  styleUrls: ["./types.component.css"]
})
export class TypesComponent implements OnInit {
  calendarName$ = this.store.pipe(select(selectCalendarName));
  types$ = this.store.pipe(select(selectTypes));
  titleField$ = this.store.pipe(select(selectTypeTitleField));

  constructor(private store: Store<AppState>, private location: Location) {}

  ngOnInit() {}

  deleteType(event, id) {
    this.store.dispatch(AppAction.deleteType({ typeId: id }));
  }
  goBack(): void {
    this.location.back();
  }
}
