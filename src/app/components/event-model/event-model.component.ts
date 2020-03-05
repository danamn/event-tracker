import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Location } from "@angular/common";
import { take } from "rxjs/operators";

import { AppState } from "../../store/selectors";

import * as AppAction from "../../store/actions";
import { DataModel } from "../../model/data-model";
import { ModelField, ModelFieldType } from "../../model/model-field";
import { selectEventModel, selectEventTitleField } from "../../store/selectors";

@Component({
  selector: "app-event-model",
  templateUrl: "./event-model.component.html",
  styleUrls: ["./event-model.component.css"]
})
export class EventModelComponent implements OnInit {
  formData: DataModel;
  titleField$ = this.store.pipe(select(selectEventTitleField));

  constructor(private location: Location, private store: Store<AppState>) {}

  ngOnInit() {
    this.formData = this.getEventModel();
    const typeField = { name: "type", type: ModelFieldType.eventType };

    if (!this.formData) {
      this.formData = [typeField];
    } else if (!this.hasEventType(this.formData)) {
      this.formData = [...this.formData, typeField];
    }
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

  handleSave({ dataModel, titleField }): void {
    if (this.hasEventType(dataModel)) {
      console.log(dataModel);

      this.store.dispatch(AppAction.saveEventModel({ eventModel: dataModel }));
      this.store.dispatch(AppAction.saveEventTitleField({ titleField }));
      this.location.back();
    } else {
      console.log("the event model doesn't have a type field");
    }
  }
  onCancel() {
    this.location.back();
  }
}
