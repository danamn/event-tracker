import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";
import { take } from "rxjs/operators";

import { AppState } from "../../store/selectors";
import * as AppAction from "../../store/actions";
import { DataModel } from "../../model/data-model";
import { ModelField, ModelFieldType } from "../../model/model-field";
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
    if (!this.hasEventType(this.formData)) {
      this.formData = [
        ...this.formData,
        { name: "type", type: ModelFieldType.eventType }
      ];
      // this.formData.push({ name: "type", type: ModelFieldType.eventType });
    }
    console.log(this.formData);
  }

  getEventModel() {
    let evM: DataModel;

    this.store.pipe(select(selectEventModel), take(1)).subscribe(eventModel => {
      evM = eventModel;
    });
    return evM;
  }

  hasEventType(eventModel: DataModel): boolean {
    return !!eventModel.find(
      (field: ModelField) =>
        field.name === "type" && field.type === ModelFieldType.eventType
    );
  }

  handleSave(eventModel: DataModel): void {
    if (this.hasEventType(eventModel)) {
      this.store.dispatch(AppAction.setEventModel({ eventModel }));
      this.location.back();
    } else {
      console.log("the event model doesn't have a type field");
      // eventModel.push({ name: "type", type: ModelFieldType.eventType });
      // this.store.dispatch(AppAction.setEventModel({ eventModel }));
    }
  }
}
