import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";
import { take } from "rxjs/operators";

import { AppState } from "../../store/selectors";
import * as AppAction from "../../store/actions";
import { DataModel } from "../../model/data-model";
import { ModelField } from "../../model/model-field";
import { selectEventModel } from "../../store/selectors";

@Component({
  selector: "app-event-model",
  templateUrl: "./event-model.component.html",
  styleUrls: ["./event-model.component.css"]
})
export class EventModelComponent implements OnInit {
  formData: DataModel;

  constructor(private location: Location, private store: Store<AppState>) {}

  ngOnInit() {
    this.formData = this.getEventModel();
  }

  getEventModel() {
    let evM: DataModel;

    this.store.pipe(select(selectEventModel), take(1)).subscribe(eventModel => {
      evM = eventModel;
    });
    return evM;
  }

  handleSave(eventModel) {
    this.store.dispatch(AppAction.setEventModel({ eventModel }));
    this.location.back();
  }
}
