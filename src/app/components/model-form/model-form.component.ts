import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";

import { DataModel } from "../../model/data-model";
import * as Selectors from "../../store/selectors";

@Component({
  selector: "app-model-form",
  templateUrl: "./model-form.component.html",
  styleUrls: ["./model-form.component.css"]
})
export class ModelFormComponent implements OnInit {
  @Input() formData: DataModel;
  @Input() titleField: String;
  @Output() handleSave = new EventEmitter<object>();

  currentFields: DataModel;
  error: Object = {};

  constructor(private store: Store<Selectors.AppState>) {}

  ngOnInit() {
    this.currentFields = this.formData;
  }

  onSetTitleField(event, fieldName) {
    this.titleField = fieldName;
  }

  onDeleteField(event, name) {
    this.currentFields = this.currentFields.filter(
      field => field.name !== name
    );
    if (this.titleField === name) {
      this.titleField = "";
    }
  }

  onFieldDataChange({ fieldData, initialFieldName }) {
    const fields = [...this.currentFields];
    const fieldWithSameName = fields.find(f => f.name === fieldData.name);

    if (fieldWithSameName && initialFieldName !== fieldWithSameName.name) {
      this.error[initialFieldName || "newField"] = "nonUniqueName";
      console.log("name already exists");
    } else {
      // If field edit
      if (initialFieldName) {
        const changedFieldIndex = fields.findIndex(
          f => f.name === initialFieldName
        );
        fields[changedFieldIndex] = fieldData;
        this.error[initialFieldName] = "";
        // If field add
      } else {
        fields.push(fieldData);
        this.error["newField"] = "";
      }
      this.currentFields = fields;
    }
  }

  onSave() {
    if (!this.titleField) {
      alert("you need a title field");
    } else {
      this.handleSave.emit({
        dataModel: this.currentFields,
        titleField: this.titleField
      });
    }
  }
}
