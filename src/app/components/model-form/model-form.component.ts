import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";

import { DataModel } from "../../model/data-model";
import { ModelField } from "../../model/model-field";
import * as Selectors from "../../store/selectors";

@Component({
  selector: "app-model-form",
  templateUrl: "./model-form.component.html",
  styleUrls: ["./model-form.component.css"]
})
export class ModelFormComponent implements OnInit {
  @Input() formData: DataModel;
  @Output() handleSave = new EventEmitter<DataModel>();

  currentFields: DataModel;
  error: Object = {};

  constructor(private store: Store<Selectors.AppState>) {}

  ngOnInit() {
    this.currentFields = this.formData;
  }

  onSave() {
    // this.store.dispatch(
    //   AppAction.setEventModel({ eventModel: this.currentFields })
    // );
    this.handleSave.emit(this.currentFields);
  }

  onDeleteField(event, name) {
    this.currentFields = this.currentFields.filter(
      field => field.name !== name
    );
  }

  onFieldDataChange({ fieldData, initialFieldName }) {
    // const fields = [...this.getEventModel()];
    const fields = [...this.currentFields];
    const fieldWithSameName = fields.find(f => f.name === fieldData.name);
    // console.log(initialFieldName, nonUniqueName);

    if (fieldWithSameName && initialFieldName !== fieldWithSameName.name) {
      this.error[initialFieldName || "newField"] = "nonUniqueName";
      console.log("name already exists");
    } else {
      if (initialFieldName) {
        const changedFieldIndex = fields.findIndex(
          f => f.name === initialFieldName
        );
        fields[changedFieldIndex] = fieldData;
        this.error[initialFieldName] = "";
      } else {
        fields.push(fieldData);
        this.error["newField"] = "";
      }
      this.currentFields = fields;
    }
  }
}
